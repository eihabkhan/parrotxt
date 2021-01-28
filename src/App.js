import React, {useState} from 'react';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import data from './data';

import {Section} from './components/section/Section.component'
import { Form } from './components/form/Form.component'
import {Hero} from './components/hero/Hero.component';
import Article from './components/article/Article.component'
import Footer from './components/footer/Footer.component'

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])


  const handleSubmit =(e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count > 10) amount = 10
    setText(data.slice(0, amount))
  }

  const notify = () => toast('🦜 Copied!')

  return ( 
    <Section>
          <Hero />
          <Form onSubmit={handleSubmit} count={count} onChange={(e) => setCount(e.target.value)}/>
          
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
          
      </Section>  
      
   );
}
    


export default App;
