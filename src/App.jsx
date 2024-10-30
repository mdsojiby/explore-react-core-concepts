import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import './App.css'

function App() {


  return (
    <>

      <h1>Vite + React</h1>
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="learn Jsx" isDone={false}></Todo>
      <Todo task="Learn" isDone={true}></Todo>
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="22"></Device>
      <Device name="Watch" price="6"></Device>
      <Person></Person>
      
      <Student grade="9" score="99"></Student>
      <Student grade={8} score={98}></Student>
      <Student></Student>
      <Developer></Developer>
      */}
    
    </>

  )
}

function Device(props){
  // console.log(props)
  return <h3>This is my device: {props.name} price: {props.price}  </h3>
}

function Person(){
  const age=12;
  const money=20;
  const person ={name:'sakib', age:23}
  return <h3>I am a {person.name} with age: {age+money} </h3>
}


 const {grade,score} ={grade: '9', score: '99'}

function Student({grade=1,score =0}){
  console.log(grade,score)
return(
  <div className='student'>
    <h3>I am a Student</h3>
    <p>class: {grade}</p>
    <p>score:  {score} </p>
  </div>
)

}

function Developer(){
  const developerStyle={
    margin:'20px',
    padding:'20px',
    border:'2px solid green',
    borderRadius:'15px'
  }
  return(
    <div style={developerStyle}>
    <h4>Devo Devo</h4>
    <p>code:</p>
    </div>

  )
}

export default App
