import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Counger></Counger> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

const ExternalUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
};
const User = (props) => {
  return (
    <div
      style={{ border: "3px solid red", margin: "20px", borderRadius: "20px " }}
    >
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
};
const Counger = () => {
  const [count, setCount] = useState(10);
  const IncreseCount = () => setCount(count + 1);
  const DecreaseCount = () => {
    if (count <= 0) {
      return setCount((count = 0));
    }
    return setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={IncreseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
      {/* <button>Decrease</button> */}
    </div>
  );
};

/* 
const product = [
  { name: "laptop", price: 74000 },
  { name: "iPhone", price: 12000 },
  { name: "Watch", price: 350 },
  { name: "Tablet", price: 10000 },
  { name: "pant", price: 120 },
  { name: "t-shirt", price: 100 },
]; */

/* const Counter = () => {
  const [count, setCount] = useState(10);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  // console.log(count, setCount);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}; */

// const Product = (props) => {
//   return (
//     <div className="product">
//       <h2>Name: {props.name}</h2>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// };

export default App;
