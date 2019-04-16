// Styling
import React from 'react'

// There are two primary ways to style react components
// 1. Inline styles with the `style` prop
// 2. Regular CSS with the `className` prop
//
// About the `style` prop:
//   In HTML you'd pass a string of CSS: <div style="margin-top: 20px; background-color: blue;"></div>
//   In React, you'll pass an object of CSS: <div style={{marginTop: 20, backgroundColor: 'blue'}} />
//
//   💰 note that in react the {{ and }} is actually a combination of a JSX expression and an
//   object expression. The same example above could be written like so:
//   const myStyles = {marginTop: 20, backgroundColor: 'blue'}
//   <div styles={myStyles} />
//
// About the `className` prop:
//   As we discussed earlier, in HTML, you apply a class name to
//   an element with the `class` attribute. In JSX, you use the
//   `className` prop.
//
// In this exercise we'll use both methods for styling react components.
//
// We have a few class names on this page:
// .box
// .box--large
// .box--medium
// .box--small
//
// 🐨 Your job is to apply the right className and style props to the divs below
// so the styles applied match the text content
//
// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink'}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor: 'orange'}}>large orange box</div>

//extra credit way
function Box({children, size, style, ...props}) {
  const sizeMod = `box--${size}`
  return (
    <div
    className={`box ${sizeMod}`} {...props}
    style={style}
    >
    {children}
    </div>
  )
}
const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>


// 💯 As extra credit, try to make a Box component that renders a div and
// accepts a `size` prop rather than a className and also merges the `style`
// prop and `className` props as well.



// Feel free to peak at the exercises-final/02-extra-0.js for more details.
// Note: The tests for 02 and 02-extra-0.js are the same :)

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}
Usage.title = 'Styling'

export default Usage
