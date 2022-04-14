import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log('Uppercase Clicked')
        if(props.newText !== ''){
            let newText = text.toUpperCase()
            setText(newText)
            props.showAlert('Converted To Uppar Case ' , 'success :')
        }
    }

    const handleLowerClick = () => {
        //console.log('Uppercase Clicked')
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted To Lower Case ' , 'success :')
    }
    // 
    const handleClearText = () => {
        //console.log('Uppercase Clicked')
        let newText = ''
        setText(newText)
        props.showAlert('Content Is Cleared', 'success :')
    }
     
    const handleOnChange = (event) => {
        //console.log('Uppercase Clicked')
        setText(event.target.value)
    }

    const copyContent = () => {
        var text = document.getElementById('myText')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Content Is Coppied...' , 'success :')
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert(' Content Formated' , 'success :')
    }
    const [text, setText] = useState('');

    // const [txtWord,setWord]  = useState(text.this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(' '))
    // console.log(txtWord)

    // const onWordChange =(event)=> {

    //   //const newWord = txtWord.value
    //   setWord(event.target.value)
       
    // }



    //Download Content

    const downloadContent = () => {

        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myText').value], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);

        //  document.body.appendChild(element); // Required for this to work in FireFox

        if (document.getElementById('myText').value) {
            element.download = "myFile.txt";
            element.click();
            props.showAlert('File Has Been Downloded.. ' , 'success :')
        } else {
            alert("File Must Have Content")
        }

    }

    
    

    // text="Hello ";  Wrong Way To Change the State 
    // setText('Enter Text 2 Here...') Correct Way To Use Update Varibale in State

    return (
        <>
            <div className='container' style={{color:props.mode ==='dark'?'white':'#042138'}}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control col-6'  style={{backgroundColor:props.mode ==='dark'?'#042743':'white' , color:props.mode ==='dark'?'white':'#042743'}} placeholder="Enter Your Text Here ....." value={text} onChange={handleOnChange} id="myText" rows="8" cols="5" ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To Upparcase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={downloadContent}>Download Text File</button>
                <button className="btn btn-primary mx-1" onClick={copyContent}>Copy Content</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3">
                <h2>Your Text Summary :</h2>
               
                <p className='text-warning'>Total Words : <b className='text-danger'>  {text.split(' ').filter(t => t.trim().length > 0).length} </b> | Total Charachters : <b className='text-danger'> {text.length} </b></p>
                <p className='text-warning'>Minutes To Read Content : <b className='text-danger'> {0.008 * text.split(' ').length} </b></p>
                <h2 className='my-3'>Preview Content :</h2>
                <div className="alert alert-info col-7">
                    {text.length>0?text:'Enter Something To Preview'}
                </div>
                {/* {text.split(' ').filter((text) =>{if(text !== '' ) return text}).length} */}
                {/* console.log({text.split()})   console.log({text.split().length}) */}
                {/* {newWord.split(' ').filter(t => t.trim().length > 0).length} */}
            </div>
        </>
    )
}
