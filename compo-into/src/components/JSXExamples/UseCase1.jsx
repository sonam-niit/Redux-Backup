function UseCase1() {
    const name = "Sonam Soni"
    const handleClick = () => {
        alert('Welcome to React')
    }
    const user = { name: 'John Doe', email: 'john@gmail.com', age: 45 }
    const flag = true;
    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={handleClick}>Click Me..!!</button>
            <p>
                Name: {user.name} <br />
                Email: {user.email} <br />
                Age: {user.age} <br />
            </p>
            <p>{JSON.stringify(user)}</p>
            {flag ? <div>Extra Div</div> : ''}
        </div>
    );
}

export default UseCase1;