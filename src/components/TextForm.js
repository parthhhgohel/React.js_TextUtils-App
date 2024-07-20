// This is a TextFrom Section

import React, { useState } from 'react'

export default function TextForm(props) {
    const upperCase = ()=>{
        // console.log("button clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success");
    }
    const lowerCase = ()=>{
        // console.log("button clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const Copy = ()=>{
        var text = document.getElementById("myBox"); 
        text.select(); // used to see, text copied or not
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }
    const [text, setText] = useState("Enter text here");

    return (
        <>
        <form>
            <div className="container form-group">
                <h3 style={{color: props.mode === 'dark'? 'white':'black', }} className='mb-3'>{props.heading}</h3>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'black'}} value={text} onChange={handleOnChange} rows={7} id="myBox" required></textarea>
                <button type="button" disabled={text.length===0} onClick={upperCase} className="my-2 btn btn-primary">Convert to upperCase </button>
                <button type="button" disabled={text.length===0} onClick={lowerCase} className="mx-2 my-2 btn btn-primary">Convert to lowerCase </button>
                <button type="button" disabled={text.length===0} onClick={Copy} className="  mx-2 my-2 btn btn-primary">Copy Text</button>
            </div>
            <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
                <h3>Preview</h3>
                <p>{text.length>0?`${text}`:'Enter text to preview'}</p>
            </div>
        </form>
        </>
  )
}