import React from 'react'
import Output from '../component/output.js'



class Btn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pressNumbs: '',
            ClickArr: []

        }
    }


    //getting our button to loop and store the PressArr into BottonArr. to be useable

render(){
    let BottonArr = this.props.PressArr.map((num)=>{
        return <button className='Btn' onClick={this.mouseClick.bind(this, num)}>{num}</button>
    }) 


    
return(

    <div>
         <Output screen={this.state.pressNumbs}/>
        {BottonArr}
    </div>
)

}
// this function is for the click. when click button print value on screen
mouseClick(apply){
    let store = this.state.ClickArr;
    if (typeof apply == 'number' ){
        store.push(apply)
        this.setState({
            pressNumbs: store
        })
    }

    if (apply == 'BS'){
        store.pop()
        this.setState({
            pressNumbs: store
        })
    }
    if (apply == 'OK'){
        alert("the number you preesed is " + store)
    }






}






}





export default Btn



// const Btn = (props)=>{
//     return <button className="Btn" onClick={this.props.text}>{props.text}</button>
// }


// export default Btn

