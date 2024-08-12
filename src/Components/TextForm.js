import React, {useState} from 'react';

const TextForm = ({h1= 'Textbox', h2='Details', button1='Click', button2='Click', showAlert}) => {
    const copy=()=>{
        navigator.clipboard.writeText(text);
        if(text.length>0) showAlert("Text has been copied to clipboard","success");
    }
    const speak = ()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        msg.rate=0.1;
        msg.pitch=1;
        window.speechSynthesis.speak(msg);
        if(text.length>0) showAlert("Speaking the text","success");
    }
    const clear = ()=>{
        setText("");
        if(text.length>0) showAlert("Text has been cleared","success");
    }
    const handleInClick = ()=>{
        let newtext="";
        for(let i=0;i<text.length;i++){
            if(text[i]>='A' && text[i]<='Z'){
                newtext+=text[i].toLowerCase();
            }
            else{
                newtext+=text[i].toUpperCase();
            }
        }
        setText(newtext);
        if(text.length>0) showAlert("Text has been converted into inverse cases","success");
    }
    const handleAtClick = ()=>{
        let newtext="";
        for(let i=0;i<text.length;i++){
            if(i%2===0){
                newtext+=text[i].toUpperCase();
            }
            else{
                newtext+=text[i].toLowerCase();
            }
        }
        setText(newtext);
        if(text.length>0) showAlert("Text has been converted into alternate cases","success");
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        if(text.length>0) showAlert("Text has been converted into uppercase","success");
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase());
        if(text.length>0) showAlert("Text has been converted into lowercase","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");
    let words=text.split(" ").length;
    if(text[text.length-1]===" " || text.length===0){
        words-=1;
    }
    let characters=text.length;
    let min=0.005*words;
    
    return <div><div className='container'>
<div className="mb-3">
  <label htmlFor="getText"><h1>{h1}</h1></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="getText" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>{button1}</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>{button2}</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleInClick}>Convert to Inverse Cases</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleAtClick}>Convert to Alternate Cases</button>
<button className="btn btn-primary mx-2 my-1" onClick={clear}>Clear</button>
<button className="btn btn-primary mx-2 my-1" onClick={speak}>Speak</button>
<button className="btn btn-primary mx-2 my-1" onClick={copy}>Copy to Clipboard</button>
    </div>
    <div className="container my-3"><h2>{h2}</h2>
    <p><b>Number of words={words} <br/> Number of characters={characters} <br/> Minutes per read={min}</b></p>
    <h2 className='my-3'>Preview</h2>
    <p><b>{text.length>0?text:"Enter the text to preview it in here"}</b></p>
    </div>
    </div>;
}




export default TextForm;