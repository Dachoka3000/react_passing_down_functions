import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Students from './Students';
import { useState } from 'react';

function App() {

  // const studentsArray = 
  const [students, setStudents]=useState(
    [
      {
        name:"John Doe",
        course:"Maths",
        id:1
      },
      {
        name:"Mike Doe",
        course:"English",
        id:2
      },
      {
        name:"Mary Doe",
        course:"Kiswahili",
        id:3
      },
      {
        name:"Jane Doe",
        course:"Music",
        id:4
      },
    ]
  )
  const myName = "Daisy Machoka"
  const age = 190

  //let props = {propData: myName, age:190}

  function sayHello(){
    console.log("Hi")
  }

  function removeStudent(id){
    const newArray = students.filter((student)=>{
      return student.id !== id
    })
     console.log(newArray)
     setStudents(newArray)
  }
  
  
  

  return (
    <div className="App">
      <Navbar propData ={myName} age={age}/>
      <About name={myName} age={age} sayHello = {sayHello}/>
      <Students students = {students} removeStudent = {removeStudent}/>
    </div>
  );
}

export default App;
