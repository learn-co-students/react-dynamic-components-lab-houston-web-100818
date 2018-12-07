import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let colorBoxStyles = {
      opacity: this.props.opacity
    }
    return (
      <div className="color-box" style={colorBoxStyles}>
        {(this.props.opacity >= 0.2)  ?
            <ColorBox opacity={this.props.opacity-0.1}/>
            : null
        }
        { /*(this.props.opacity >= 0.2) &&
              <ColorBox opacity={this.props.opacity-0.1}/>
        */}
      </div>
    )

    let content = null;
    if(this.props.opacity >= 0.2){
      content = <ColorBox opacity={this.props.opacity-0.1}/>
    }
    return (
      <div className="color-box" style={colorBoxStyles}>
        {content}
      </div>
    )
  }

}
