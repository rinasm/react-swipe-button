import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const slider = React.createRef();
const container = React.createRef();
const isTouchDevice = 'ontouchstart' in document.documentElement

export default class ReactSwipeButton extends Component {
  
  isDragging = false;
  sliderLeft = 0;

  componentDidMount() {
    if(isTouchDevice) {
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.stopDrag);
    } else {
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);  
    }
    this.containerWidth = container.current.clientWidth - 50;
  }

  onDrag =e=> {
    if(this.unmounted) return;
    if(this.isDragging) {
      if(isTouchDevice) {
        this.sliderLeft = Math.min(Math.max(0, e.touches[0].clientX - this.startX), this.containerWidth);
      } else {
        this.sliderLeft = Math.min(Math.max(0, e.clientX - this.startX), this.containerWidth);
      }
      this.updateSliderStyle();
    }
  }

  updateSliderStyle =()=> {
    if(this.unmounted) return;
    slider.current.style.left = (this.sliderLeft + 50)+'px';
  }

  stopDrag =()=> {
    if(this.unmounted) return;
    this.isDragging = false;
    if(this.sliderLeft > this.containerWidth * 0.9) {
      this.sliderLeft = this.containerWidth;
      if(this.props.onSuccess) {
        this.props.onSuccess();
      }
    } else {
      this.sliderLeft = 0;
      if(this.props.onFailure) {
        this.props.onFailure();
      }
    }
    this.updateSliderStyle();
  }

  startDrag =e=> {
    if(this.unmounted) return;
    this.isDragging = true;
    if(isTouchDevice) {
      this.startX = e.touches[0].clientX;
    } else {
      this.startX = e.clientX;
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const {
      text
    } = this.props;
    return (
      <div className={styles.ReactSwipeButton}>
        <div className={styles.rsbContainer} ref={container}>
          <div className={styles.rsbcSlider} 
            ref={slider} 
            onMouseDown={this.startDrag} 
            onTouchStart={this.startDrag}>
            <span className={styles.rsbcSliderArrow}></span>
            <span className={styles.rsbcSliderCircle} style={{background: this.props.color}}></span>
          </div>
          <div className={styles.rsbcText}>{this.props.text || 'SLIDE'}</div>
        </div>
      </div>
    )
  }
}
