import React, { Component } from 'react'
import ReactSwipeButton from 'react-swipe-button'

const textRef = React.createRef();
const swipeButton = React.createRef();
const colors = [
  '#6ab04c', '#eb4d4b', '#f0932b', '#30336b', '#686de0'
]
const windowHeight = window.innerWidth > 500 ? 700 : window.innerHeight;

export default class App extends Component {

  state = {
    lastStatus: 'NONE',
    slideStatus: false,
    text: 'SLIDE',
    color: colors[0]
  }

  onSuccess =()=> {
    this.setState({slideStatus: true});
  }

  resetStatus =()=> {
    this.setState({slideStatus: false});
    swipeButton.current.reset();
  }

  onTextChange =()=> {
    let text = (textRef.current.value || '').trim();
    this.setState({text})
  }

  onColorChange =color=> {
    this.setState({color})
  }

  getColorPalette =()=> {
    return (
      <div className='a-block'>
        <div className='ab-title'>SELECT COLOUR</div>
        <div className='ab-container'>
          <div className='abc-color-palette'>
            {colors.map((color, index)=> {
              return (
                <div className={' abcc-color' + (color === this.state.color ? ' active' : '')} 
                  onClick={()=>this.onColorChange(color)} 
                  style={{background: color}} key={index}>
                  <span style={{background: color}}></span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='app' style={{height: windowHeight+'px'}}>
        <div className='settings'>
          <div className='a-block'>
            <div className='ab-logo'>React Swipe Button</div>
          </div>
          {this.getColorPalette()}
          <div className='a-block'>
            <div className='ab-title'>SET TEXT</div>
            <div className='ab-container'>
              <input placeholder='Text' ref={textRef} onChange={this.onTextChange} defaultValue={this.state.text}/>
            </div>
          </div>
        </div>
        {this.state.slideStatus ? (
          <div className='container2'>
            <div className='c-retry' onClick={this.resetStatus}>RESET</div>
          </div>
        ):''}
        <div className='container'>
          <ReactSwipeButton color={this.state.color} text={this.state.text} onSuccess={this.onSuccess} ref={swipeButton}/>
        </div>
      </div>
    )
  }
}
