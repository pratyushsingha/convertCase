import React, { useState } from 'react'
import hi from '/hi.gif';

const TextEdit = (props) => {
  // for uppercase converter
  const handleUpClick = (event) => {
    // console.log("UpperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  }
  // word.charAt(0).toUpperCase()+ word.slice(1)
  // for lower case generator
  const handleLowerClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
  }

  // title case generator
  const handleTitleClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.charAt(0).toUpperCase()+ text.slice(1);
    setText(newText)
  }


  const [text, setText] = useState("preview text");
  return (
    <>
      <div className="message md:mx-96">
        <div className='flex justify-center items-center'>
          <img className='w-16 h-16 rounded-2xl' src={hi} alt="" />
        </div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.title}</label>
        <div className="flex space-x-4">
          <textarea id="message" rows="4" onChange={handleOnChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeholder}></textarea>

          <textarea id="message" rows="4" value={text} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeholder}></textarea>
        </div>
      </div>
      {/* analyze dataa */}
      <div className="summary flex justify-center items-center space-x-3 mt-2">
        <div>Charracter count:{text.length}</div>
        <div>Word count:{text.split(" ").length}</div>
        <div>Line count:{text.split(/\r\n|\r|\n/).length}</div>

      </div>
      <div className="buttonMiddle flex justify-center items-center">
        <div className="flex justify-center items-center my-3">
          <button type="button" className="focus:outline-none text-md text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleUpClick}>{props.upperCase}</button>
        </div>

        <div className="my-3">
          <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleLowerClick}>{props.lowerCase}</button>
        </div>

        <div className="my-3">
          <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleTitleClick}>{props.titleCase}</button>
        </div>
      </div>


    </>
  )
}

export default TextEdit
