import React, {useState, useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {AppLogo} from './components/logo/Logo.component'
import Footer from './components/footer/Footer.component'

import data from './data';

import {Button} from './components/custom-button/CustomButton.component';
import Article from './components/article/Article.component'

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
              <Button type="submit">Generate</Button>
          </form>
          {
          text.length > 0 && <Article text={text} onCopy={notify}/>
          }

          <Footer />
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
