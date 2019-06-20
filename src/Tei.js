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
  }

  componentDidMount() {
    this.getTEI();
  }

  componentDidUpdate() {
    if (!this.state.processing) {
      this.refs.tei.innerHTML = ''
      this.refs.tei.appendChild(this.state.teiData)
    }
  }

  async getTEI() {
    const ct = new CETEI()
    const teiData = await ct.getHTML5('data/example.xml')
    this.setState({
      processing: false,
      teiData
    })
  }

  render() {
    return <div ref="tei" className="Tei">Loading ...</div>
  }
}

export default Tei
