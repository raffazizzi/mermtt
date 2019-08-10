import React from 'react'
import Verovio from './Verovio'
import TeiElement from './TeiElement'
import './Music.scss'

class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
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

    // This is an example
    const type = this.props.notatedMusic.getAttribute('type')
    let pageWidth = 800
    if (type === 'tipo1') {
      pageWidth = 400
    } else if (type === 'tipo2') {
      pageWidth = 100
    }

    Verovio.loadData(meiData)
    Verovio.setOptions({
      pageWidth,
      adjustPageHeight: true,
      scale: 50
    })
    this.setState({meiData, svg: Verovio.renderPage(1)}) 
  }

  render() {
    const url = this.props.notatedMusic.querySelector('tei-ptr').getAttribute('target')
    const label = <TeiElement teiDomElement={this.props.notatedMusic.querySelector('tei-label')} />
    let music = ''
    // If there is a tei-graphic element, then show the image, otherwise render with Verovio.
    const image = this.props.notatedMusic.querySelector('tei-graphic')
    if (image) {
      music = <TeiElement teiDomElement={this.props.notatedMusic.querySelector('tei-graphic')} />
    } else if (this.state.svg) {
      music = <div dangerouslySetInnerHTML={{__html: this.state.svg}}/>
    }
    const header = (<div className="MusicHeader">
      {label} &nbsp; <a href={`data/${url}`}>MEI</a>
    </div>)
    const children = (<>{header}{music}</>)
    return React.createElement(this.props.notatedMusic.tagName.toLowerCase(), 
      {
        ...this.forwardTeiAttributes(),
      }, 
      children
    )
  }
}

export default Music
