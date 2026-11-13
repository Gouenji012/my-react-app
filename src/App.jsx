
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Welcome from './components/Welcome'
import MyClass from './components/MyClass'
import Person from './components/Person'
import {useState} from 'react';

function App() {
  
  const [count,setCount] = useState(0);


  return (
    <> 
    <h1>First React app</h1>
    <Welcome name="Manish" job="Developer" />
    <MyClass />
    <Person />

    Counter Value : {count}
    <button onClick={()=>setCount(count+1)}>Increment</button>


     </>
        );
}

export default App
