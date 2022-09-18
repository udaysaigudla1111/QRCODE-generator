import QRCode from 'qrcode';
import { useState } from 'react';
import './App.css';

function App() {

  const [url, setUrl] = useState('');
  const [qrcode, setqrcode] = useState('');
  const GenerateQRCode = () => {
      QRCode.toDataURL(url, {
            width:600,
            height:600,
            margin: 2
      }, (err,url) => {
        if (err) return console.error(err)
          console.log(url)
          setqrcode(url)
      })
      
  }
  return (
    <div className="App">
    <h1>QRCODE GENERATOR </h1>
    <div className='flex-container'>
      <div className='flex-box'>
    <textarea rows="5" cols="60" 
   className='textarea'
    placeholder="Write any http or content or whatever ............."
    value={url}
    onChange={(evt) => setUrl(evt.target.value)}
    />
    <br></br>
    <button className="btn" onClick={GenerateQRCode}>Generate</button>
    </div>
    <div className='flex-box'>
    {qrcode && <>
      <img src={qrcode}  className="img" />
      <a href={qrcode} className="btn1" download="qrcode.png">Download</a>
    </>}
    </div>
    </div>
    </div>
  );
}

export default App;
