import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log('Uppercase Clicked')
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerClick = () => {
        //console.log('Uppercase Clicked')
        let newText = text.toLowerCase()
        setText(newText)
    }
    // 
    const handleClearText = () => {
        //console.log('Uppercase Clicked')
        let newText = ''
        setText(newText)
    }

    const handleOnChange = (event) => {
        //console.log('Uppercase Clicked')
        setText(event.target.value)
    }

    const copyContent=()=>{
        var text =document.getElementById('myText')
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const removeExtraSpaces =()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }

    //Download Content

    const downloadContent = () =>{

        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myText').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);

         //  document.body.appendChild(element); // Required for this to work in FireFox

        if(document.getElementById('myText').value){
            element.download = "myFile.txt";
            element.click();
        }else{
            alert("File Must Have Content")
        }
        
     
    }
    
    const [text, setText] = useState('');

    // text="Hello ";  Wrong Way To Change the State 
    // setText('Enter Text 2 Here...') Correct Way To Use Update Varibale in State

    return (
        <>
            <div className='container'>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control text-primary col-6' placeholder='Enter Your Text Here .....' value={text} onChange={handleOnChange} id="myText" rows="8" cols="5" ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upparcase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1"  onClick={downloadContent}>Download Text File</button>
                <button className="btn btn-primary mx-1"  onClick={copyContent}>Copy Content</button>
                <button className="btn btn-primary mx-1"  onClick={removeExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3">
                <h2>Your Text Summary :</h2>

                <p className='text-danger'>Total Words : <b className='text-success'> {text.split(' ').length-1} </b> | Total Charachters : <b className='text-success'> {text.length} </b></p>
                <p className='text-danger'>Minutes To Read Content : <b className='text-success'> {0.008 * text.split(' ').length} </b></p>
                <h2 className='my-3'>Preview Content :</h2>
                <div className="alert alert-success col-7">
                     {text}
                </div>
                
            </div>
        </>
    )

   
}
