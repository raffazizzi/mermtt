import React from 'react'
import CETEI from 'CETEIcean'
import './Tei.css';

class Tei extends React.Component {
  state = {
    processing: false
  }

  constructor(props) {
    super(props);
    this.state.processing = true
    this.teiDataContainer = React.createRef()
  }

  componentDidMount() {
    this.getTEI();
  }

  componentDidUpdate() {
    if (!this.state.processing) {
      this.teiDataContainer.current.innerHTML = ''
      this.teiDataContainer.current.appendChild(this.state.teiData)
    }
  }

  async getTEI() {
    const ct = new CETEI()
    
    // Override default CETEI TEI behaviors.
    ct.addBehavior('tei', 'teiHeader', undefined)

    const teiData = await ct.getHTML5('data/example.xml')
    this.setState({
      processing: false,
      teiData
    })
  }

  render() {
    return <div ref={this.teiDataContainer} className="Tei">Loading ...</div>
  }
}

export default Tei
