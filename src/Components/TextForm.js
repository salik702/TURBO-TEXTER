import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to UpperCase', 'success');
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to LowerCase', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    let textArea = document.getElementById('myBox');
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert('Text copied to clipboard', 'success');
  };

  const ClearonClick = () => {
    setText('');
    props.showAlert('Text cleared successfully', 'success');
  };

  const CapAllFWords = () => {
    let words = text.split(' ');
    let cap = words.map((word) =>
      word.length > 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : ''
    );
    setText(cap.join(' '));
    props.showAlert('Capitalized first word successfully', 'success');
  };

  const removeSpaces = () => {
    let newText = text.split(/\s+/).filter((word) => word !== '');
    setText(newText.join(' '));
    props.showAlert('Successfully removed multiple spaces', 'success');
  };

  const textColor = {
    color: props.mode === 'dark' ? 'white' : '#042743',
  };

  return (
    <>
      <div className="container" style={textColor}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              ...textColor,
              backgroundColor: 'transparent',
              border: '1px solid',
              borderColor: props.mode === 'dark' ? 'white' : '#042743',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* Buttons using dynamic styles from props.btnStyle */}
        <button
          disabled={text.length === 0}
          style={props.btnStyle}
          className="btn mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          style={props.btnStyle}
          className="btn mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          style={props.btnStyle}
          className="btn mx-1 my-1"
          onClick={CapAllFWords}
        >
          Capitalize First Word
        </button>
        <button
          disabled={text.length === 0}
          style={props.btnStyle}
          className="btn mx-1 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          style={props.btnStyle}
          className="btn mx-1 my-1"
          onClick={removeSpaces}
        >
          Remove Spaces
        </button>
        <button
          disabled={text.length === 0}
          style={props.btnStyle}
          className="btn mx-1 my-1"
          onClick={ClearonClick}
        >
          Clear
        </button>
      </div>

      <div className="container my-3" style={textColor}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word !== '').length} words and{' '}
          {text.length} characters
        </p>
        <p>
          {(
            0.008 * text.split(/\s+/).filter((word) => word !== '').length
          ).toFixed(2)}{' '}
          Minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}
