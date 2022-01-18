import React, { useState } from 'react';
import Card from './Card';

var details=[];

const Form = () => {
    const [send,sendState]=useState([])

    function create()
    {

        var each={
            name:"",
            email:"",
            contact:"",
            pic:""
        }
        each.name=document.getElementById('name').value;
        each.email=document.getElementById('email').value;
        each.contact=document.getElementById('contactno').value;
        each.pic=document.getElementById('image').value;
        details.push(each);
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('contactno').value='';
        document.getElementById('image').value='';
        sendState(oldArray => [...oldArray, each])
    }

    function deletes(name)
    {
        var sample=[]
        sendState(sample) 
        for(let i=0;i<details.length;i++)
        {     
            if(details[i].name!==name)
            {   
                sendState(oldArray => [...oldArray, details[i]])
            }
            else if(details[i].name===name)
            {
                details.splice(i,1);
                i--;
            }
        }
       
    }

    return (
        <div>
            <h1>CARD CREATOR</h1>
            <div className="form">
                <p>Please enter your Name :</p>
                <input type="text" id="name"></input>
                <p>Please enter your E-mail :</p>
                <input type="email" id="email"></input>
                <p>Please enter your Contact Number :</p>
                <input type="number" id="contactno"></input>
                <p>Please enter your Profile Picture Url :</p>
                <input type="text" id="image"></input><br></br><br></br>
                <button type="submit" onClick={create} >CREATE CARD</button>
            </div>
            <br></br>
            <br></br>
            <Card data={send} deletes={deletes}></Card>
        </div>
    )
}

export default Form
