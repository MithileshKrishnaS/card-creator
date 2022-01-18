import React from 'react'


const Card = (props) => {


    return (
        <div className="card">
            {props.data?.map(input=>(
                <div className="eachcard">
                <img src={input.pic}></img>
                <p>{input.name}</p>
                <p>{input.email}</p>
                <p>{input.contact}</p>
                <button onClick={()=>props.deletes(input.name)}> Delete</button>
                </div>
            ))} 
            
        </div>
    )
}

export default Card
