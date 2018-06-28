import React from 'react'
import Btn from '../component/btn.js'




const App = ()=> {
    let PressArr = [1,2,3,4,5,6,7,8,9,'BS',0,'OK'] //pressarr to be used.. check btn.js
    return (
        <div className='container'>
       
        <Btn  PressArr={PressArr}/> 
        </div>


    )
};



export default App