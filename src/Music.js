import React from 'react'
import Verovio from './Verovio'
import TeiElement from './TeiElement'
import './Music.scss'

class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 'svg'
    }
  }

  componentDidMount() {
    this.renderMusic(this.props.notatedMusic.querySelector('tei-ptr').getAttribute('target'))
  }

  forwardTeiAttributes() {
    return Array.from(this.props.notatedMusic.attributes).reduce((acc, att) => {
      acc[att.name] = att.value
      return acc
    }, {})
  }

  async renderMusic(url) {
    const meiData = await fetch(`data/${url}`).then(response => response.text())
    Verovio.loadData(meiData)
    Verovio.setOptions({
      pageWidth: 800,
      adjustPageHeight: true,
      scale: 50
    })
    this.setState({meiData, svg: Verovio.renderPage(1)}) 
  }

  show(type) {
    this.setState({show: type})
  }

  render() {
    const url = this.props.notatedMusic.querySelector('tei-ptr').getAttribute('target')
    const label = <TeiElement teiDomElement={this.props.notatedMusic.querySelector('tei-label')} />
    let music = ''
    if (this.state.svg && this.state.show === 'svg') {
      music = <div dangerouslySetInnerHTML={{__html: this.state.svg}}/>
    } else if (this.state.show === 'jpg') {
      music = <TeiElement teiDomElement={this.props.notatedMusic.querySelector('tei-graphic')} />
    }
    const eActive = this.state.show === 'svg' ? 'MTabActive' : ''
    const fActive = this.state.show === 'jpg' ? 'MTabActive' : ''
    const tabs = (<div className="MusicTabs">
      {label}&nbsp;
      <span onClick={() => this.show('svg')} className={eActive}>Engraved</span> |&nbsp;
      <span onClick={() => this.show('jpg')} className={fActive}>Facsimile</span> |&nbsp;
      <a href={`data/${url}`}>MEI</a>
    </div>)
    return React.createElement(this.props.notatedMusic.tagName.toLowerCase(), 
      {
        ...this.forwardTeiAttributes(),
      }, 
      [
        tabs,
        music
      ]
    )
  }
}

export default Music
