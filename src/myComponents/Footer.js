import React from 'react'

export const Footer = () => {
  let footerStyle ={
    position :"relative",
    width : "100%",
    top:"130%"
   
  }
  return (
    <footer  style={footerStyle} className='bg-dark text-light py-3 my-3'>
        <p className="text-center">copyrights &copy; KingsmanTodoList.com</p>
    </footer>
  )
}
