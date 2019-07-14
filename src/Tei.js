import React from 'react'
import CETEI from 'CETEIcean'
import './teiStyles/Base.scss'
import './teiStyles/Diplomatic.scss'
import './teiStyles/Diplomatic2.scss'
import './teiStyles/Edited.scss'
import './teiStyles/Modernized.scss'

class Tei extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.teiDataContainer = React.createRef()
    this.allowedViews = this.props.allowedViews.map(view => {
      return view.url
    })
  }

  componentDidMount() {
    this.getTEI()
  }

  async getTEI() {
    const ct = new CETEI()
    
    // Override default CETEI TEI behaviors.
    ct.addBehavior('tei', 'teiHeader', undefined)

    const teiData = await ct.getHTML5('data/example.xml')
    this.setState({
      teiData
    })
  }

  componentDidUpdate() {
    if (this.state.teiData) {
      this.renderTei()
    }
  }

  renderTei() {
    this.teiDataContainer.current.innerHTML = ''
    this.teiDataContainer.current.appendChild(this.state.teiData)
  }

  render() {
    let view = this.props.defaultView
    if (this.allowedViews.indexOf(this.props.view) > -1) {
      view = this.props.view
    }
    const viewStyle = view.charAt(0).toUpperCase() + view.substr(1).toLowerCase()
    return <div className={`Tei ${viewStyle}`} ref={this.teiDataContainer}>Loading...</div>
  }
}

export default Tei
