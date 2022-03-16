import React from 'react'



const Greeting = props => {
    return (
        <h1>
                {props.phrase} {props.name}
        </h1>
    )
}

const GreetApp1 = () =>{
    return(
        <div>
            <Greeting phrase = 'Hello,' name = 'Jake'/>
        </div>
    )
}
export default Greeting