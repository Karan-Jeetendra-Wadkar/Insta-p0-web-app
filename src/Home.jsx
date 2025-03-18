import React from 'react';
import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import { Link} from 'react-router-dom';


const Home = () => {

  
  return (
    <>
        
       <div className='App'>
            <div className="Box1"><Box1/></div>
            <div className="Box2"><Box2/></div>
            <div className="Box3"><Box3/></div>
          </div>
 </>
  )
}

export default Home
