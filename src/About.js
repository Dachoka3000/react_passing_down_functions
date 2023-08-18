function About({name, age, sayHello}){
    return <div>
        <h4>Your name is {name} , your age is {age} </h4>
        <button onClick={sayHello}>Click me</button>
    </div>
}

export default About