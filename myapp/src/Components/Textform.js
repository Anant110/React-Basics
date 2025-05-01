import React, { useState } from 'react'

export default function Textform(props) {
    const HandleUpClick = () => {
        console.log("HandleUp is clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to UpperCase","success");
    }

    const HandleUplow = () => {
        console.log("HandleUp is clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to LowerCase","success");
    }

    const HandleChangeClicked = (event) => {
        console.log("HandleChange is clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');

    const isTextEmpty = text.trim() === '';


    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#090626':'white',color:props.mode==='dark'?'white':'black'}} onChange={HandleChangeClicked} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={HandleUpClick} >Convert To UpperCase</button>

                <button className="btn btn-primary mx-3" onClick={HandleUplow} >Convert To LowerCase</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
                <h2>Your Text Summary</h2>
                {isTextEmpty ? (
                    <p>No words and 0 characters</p>
                ) : (
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                )}

            </div>
        </>
    )
}
