import Student from "./Student"

function Students({students, removeStudent}){
    // const list = students.map((student)=>{
    //     return <p>{student.name}</p>
    // })

    return <div>
        {students.map((student, index)=>{
            return <Student student = {student} key={student.name} removeStudent={removeStudent}/>
        })}

    </div>
}

export default Students