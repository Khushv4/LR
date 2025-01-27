import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <div>
            <h1>CUSTOM APP!!!</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: { 
//       href: 'https://google.com',
//       target: '_blank'
//     },
//     children: 'click me to visit google'
//   }
  const anotherElement= (
    <a href = 'https://google.com' target='_blank'> visit google</a>
  )

  const user = 'khushal'
  const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click to go to google',
    user
  )
  

createRoot(document.getElementById('root')).render(
  
    
    <App />
)
