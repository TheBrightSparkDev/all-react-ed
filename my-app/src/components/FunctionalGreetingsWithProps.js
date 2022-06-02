function FunctionalGreetingWithProps(props){
    return <h1>Hello, {props.name} {props.greetings} I see you're {props.age} years old!!</h1>
}

const FunctionalGreetingSixWithProps = (props) => <h1>Hello, {props.name} {props.greetings} I see you're {props.age} years old!!</h1>;

export {FunctionalGreetingWithProps, FunctionalGreetingSixWithProps};