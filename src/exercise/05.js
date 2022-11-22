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

const smallBox = <div
  className="box box--small"
  style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
>
  small lightblue box
</div>

const mediumBox = <div
  className="box box--medium"
  style={{backgroundColor: 'pink', fontStyle: 'italic'}}
>
  medium pink box
</div>

const largeBox = <div
  className="box box--large"
  style={{backgroundColor: 'orange', fontStyle: 'italic'}}
>
  large orange box
</div>

// Extra credit 1
function Box({ className = '', style = {}, children, ...otherProps }) {
  return (
    <div
      className={`box ${className}`}
      style={{ ...style, fontStyle: 'italic' }}
      {...otherProps}
    >
      {children}
    </div>
  )
}

// Extra credit 2
function BoxCredit2({
  size,
  className = '',
  style = {},
  children,
  ...otherProps
}) {
  const sizeClassName = `box--${size}`;
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{...style, fontStyle: 'italic'}}
      {...otherProps}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      <h1>Basic</h1>
      <div>
        {smallBox}
        {mediumBox}
        {largeBox}
      </div>

      <h1>Extra credit 1</h1>
      <Box
        className='box--small'
        style={{ backgroundColor: 'lightblue' }}
      >
        small lightblue box
      </Box>
      <Box
        className='box--medium'
        style={{ backgroundColor: 'pink' }}
      >
        medium pink box
      </Box>
      <Box
        className='box--large'
        style={{ backgroundColor: 'orange' }}
      >
        large orange box
      </Box>
      
      <h1>Extra credit 2</h1>
      <BoxCredit2
        size='small'
        style={{ backgroundColor: 'lightblue' }}
      >
        small lightblue box
      </BoxCredit2>
      <BoxCredit2
        size='medium'
        style={{ backgroundColor: 'pink' }}
      >
        medium pink box
      </BoxCredit2>
      <BoxCredit2
        size='large'
        style={{ backgroundColor: 'orange' }}
      >
        large orange box
      </BoxCredit2>
    </>
  )
}

export default App
