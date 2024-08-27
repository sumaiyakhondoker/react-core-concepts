import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'


function App() {

  const actors = ['Sakib', 'sarifur raz','jasim','rubel','salman','riyaz']

  const singers = [
    {id: 1, name: 'Dr Mahfujur ', age: 68},
    {id: 2,name: 'Eva Rahman', age: 38},
    {id: 3,name: 'Imran', age: 35},
    {id: 4,name: 'Pritam', age: 28},
    {id: 5,name: 'Hasan', age: 28},
  ]

  const books = [
    {id: 1,name: 'physics', price: 100},
    {id: 2,name: 'chemistry', price: 120},
    {id: 3,name: 'Math', price: 130},
    {id: 4,name: 'Biology', price: 150},
  ]


  return (
    <>
      
    <h2>Vite + React</h2>
    









    {/* <BookStore books = {books}></BookStore> */}

    
    {
      books.map(book=> <BookStore book={book}></BookStore>)
    }



    {
      singers.map(singer=> <Singer singer={singer}></Singer>)
    }




    <Actor name={"Bappa raz"}></Actor>
    {
      actors.map(actor=> <Actor name={actor}></Actor>)
    }


  

      {/* <Todo
       task="Learn React"
        isDone={true} ></Todo>

      <Todo 
      task="core concepts"
       isDone={false}></Todo>
      <Todo
       task="Try jsx"
       isDone={true}></Todo> */}


      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="23"></Device>
      <Device name="Watch" price="3"></Device>
      <Device name="earphone" price="140"></Device>
      <Person></Person>
      

      <Student grade="7" score="99"></Student>
      <Student grade={12} score="52"></Student>
      <Student ></Student>

      <Developer></Developer> */}
      
      
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h3>This device: {props.name} price: {props.price}</h3>
}


function Person(){
  const age = 25;
  const money = 20;

  const person = {name: 'sarika', age:12}

  return <h3>I am {person.name} with age: {age + money}</h3>
}

function Student({grade =1, score=0}){

  // const {grade,score} = {grade: '7', score: '99'}
  // console.log(props);
  return (
    <div className='student'>
    <h3>This is a student</h3>
    <p>Grade:{grade}</p>
    <p>Score: {score}</p>
  </div>
  )

}


function Developer(){

  const developerStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '15px',
    borderRadius: '25px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>coding:</p>
    </div>


  )
}
export default App
