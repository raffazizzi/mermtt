import React from 'react'

class TeiElement extends React.Component {
  forwardTeiAttributes() {
    return Array.from(this.props.teiDomElement.attributes).reduce((acc, att) => {
      acc[att.name] = att.value
      return acc
    }, {})
  }

  render() {
    const teiChildren = Array.from(this.props.teiDomElement.childNodes).map((teiEl, i) => {
      switch (teiEl.nodeType) {
        case 1:
          return <TeiElement 
            teiDomElement={teiEl}
            key={`${teiEl.tagName}_${i}`}
            dataType={this.props.dataType}              
            getContextChapter={this.props.getContextChapter}
            clearContextChapter={this.props.clearContextChapter}
            />
        case 3:
          return teiEl.nodeValue
        default:
          return null
      }        
    })

    return React.createElement(this.props.teiDomElement.tagName, 
      {
        ...this.forwardTeiAttributes(),
      }, 
      teiChildren
    )
  }
}

export default TeiElement
