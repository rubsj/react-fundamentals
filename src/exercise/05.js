// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

//extra credit 1
const Box = ({children, className='', style}) => {
  const classes = `box ${className}`
  const styles = {...style, fontStyle: 'italic'}
  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}

export const App1 = () => {
  return (
    <div>
      <p>Extra credit 1</p>
      <Box className='box--small' style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
      <Box className='box--medium' style={{backgroundColor: 'pink'}}>medium pink box</Box>
      <Box className='box--large' style={{backgroundColor: 'orange'}}>large orange box</Box>
      <Box>sizeless box</Box>
    </div>
  )
}

//extra credit 2
const Box2 = ({children, className='', style , size}) => {
  const sizeClass = size? `box--${size}` : '';
  const classes = `box ${className} ${sizeClass}`
  console.log(classes);
  const styles = {...style, fontStyle: 'italic'}
  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}

export const App2 = () => {
  return (
    <div>
      <p>Extra credit 2</p>
      <Box2 size='small' style={{backgroundColor: 'lightblue'}}>small lightblue box</Box2>
      <Box2 size='medium' style={{backgroundColor: 'pink'}}>medium pink box</Box2>
      <Box2 className='box--large' style={{backgroundColor: 'orange'}}>large orange box</Box2>
      <Box2>sizeless box</Box2>
    </div>
  )
}


export default App2
