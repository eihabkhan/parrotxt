import React from 'react'

import {ArticleContainer} from './Article.styles'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import {IconButtonWithText} from '../custom-button/CustomButton.component'
import {ReactComponent as Clipboard} from '../../assets/clipboard.svg'

const Article = (props) => {
    const {text} = props
    return ( 
        <ArticleContainer>
            <CopyToClipboard text={text} onCopy={props.onCopy}> 
                {/* <button>Copy To Clipboard</button> */}
                <IconButtonWithText label="Copy to clipboard">
                  <Clipboard />
                </IconButtonWithText>
              </CopyToClipboard>
              
              {                
                  text.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>
                  })
              }
             
        </ArticleContainer> 
    );
}
 
export default Article;