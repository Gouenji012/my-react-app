import React, {useState} from 'react';

export default function Person() {

const [name, setName] = useState("Gouenji");

const [age, setAge] = useState(25);

return (
    <>

    Name : <input type= "text" value={name} onChange={(e)=>setName(e.target.value)} />
    Age : <input type= "number" value = {age} onChange= {(e)=>setAge(e.target.value)} />

    <br />



    <h1>My name is {name} and my age is {age}</h1>
    </>
);

}