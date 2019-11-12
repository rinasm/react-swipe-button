# react-swipe-button

> This Package is a swipe button for react

[![NPM](https://img.shields.io/npm/v/react-swipe-button.svg)](https://www.npmjs.com/package/react-swipe-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-swipe-button
```

## [Demo](http://react-swipe-button.rinas.in/)

This is a [demo](http://react-swipe-button.rinas.in/) of react-swipe-button

## Usage

```jsx
import React, { Component } from 'react'

import ReactSwipeButton from 'react-swipe-button'

class Example extends Component {
  render () {
    return (
      <ReactSwipeButton 
        text='SWIPE TO UNLOCK'
        color='#f00'
        onSuccess={onSucces}
      />
    )
  }
}
```
## Props

**text (Default will be 'SWIPE')**
The text that will display on the swipe button

**color (Default will be '#444')**
The color of swipe button

**onSuccess**
The function that will get called when a swipe is success


## License

MIT © [rinasm](https://github.com/rinasm)
