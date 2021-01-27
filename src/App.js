import React, {useState, useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {AppLogo} from './components/logo/Logo.component'
import {ReactComponent as Clipboard} from './assets/clipboard.svg'

import data from './data';

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])


  const handleSubmit =(e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count > 10) amount = 10
    setText(data.slice(0, amount))
  }


  useEffect(() => {
  }, [])

  const notify = () => toast('🦜 Copied!')

  return ( 
    <section className="section-center">
          <AppLogo />
          <h4>lorem ipsum is not professional</h4>
          <p>Use <span>Parrotxt</span>  to put REAL text in your design</p>
          <form className="lorem-form" onSubmit={handleSubmit}>
              <label htmlFor="amount">Paragraphs: </label>
              <input type="number" min="0" placeholder="0" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
              <button type="submit" className="btn">Generate</button>
          </form>
          {
          text.length > 0 && 
              <article className="lorem-text">
              <CopyToClipboard text={text} onCopy={() => notify()}>
              <button className="btn ctc">
                  <div className="btn-container">
                    <div className="btn-text">Copy to clipboard</div>
                    <Clipboard />
                  </div>
              </button>
              </CopyToClipboard>
              {
                  text.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>
                  })
              }
              </article>
          }
          <footer>
            <div className="credit">
              <div className="copyright">{"\u00a9"} 2021 Parrotxt.</div>
              <div className="quality">Made with <span role="img" aria-label="heart">💖</span> by <a href="https://twitter.com/eihab_khan" target="_blank" rel="noopener noreferrer" className="twitter">Eihab Khan</a></div>
            </div>
          </footer>
          <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              draggable
              />
      </section>  
   );
}
    


export default App;
