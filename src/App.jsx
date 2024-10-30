import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import './App.css'
import Actor from './Actor'
import Singer from './Singer'
import BooksStore from './BooksStore'
import Books from './Books'

function App() {
  const actors=['sakib','josim','riyaj','jolil']


  const books=[
    {id:1, name:'physics',price:100},
    {id:2, name:'math',price:120},
    {id:3, name:'chemestry',price:130},
    {id:4, name:'biology',price:150}
  ]

  const singers=[
    { id:1,name:'dr silpi',age:67},
    { id:2,name:'pritom',age:27},
    {id:3,name:'asif khan',age:47},
    {id:4,name:'safayet',age:27}
  ]


  return (
    <>

      <h1>Vite + React</h1>

      <BooksStore books={books}></BooksStore>


      {

        singers.map(singer=><Singer singer={singer}></Singer>)


      }



      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }
      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="learn Jsx" isDone={false}></Todo>
      <Todo task="Learn" isDone={true}></Todo> */}
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
