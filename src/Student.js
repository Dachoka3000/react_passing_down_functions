function Student({student, index, removeStudent}){
    let id = student.id
    return <div key={index} >
        <h3>Name :{student.name}</h3>
        <p>Course:{student.course}</p>
        <button onClick={()=>{removeStudent(id)}}>Delete</button>
    </div>
}

export default Student