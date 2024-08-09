
// import { useState } from "react";
// const App = () => {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "Go to Gym",
//     description: "Go to Gym Today"
//   }, {
//     id: 2,
//     title: "Do Yoga ",
//     description: "Do yoga today"
//   },
//   {
//     id: 3,
//     title: "Do Some fun",
//     description: "Do som fun Today"
//   }]
//   )
//   function addTodo() {
//     const newTodo = [];
//     for (let i = 0; i < todos.length; i++) {
//       newTodo.push(todos[i]);
//     }
//     console.log(newTodo)
//     // new todo == old todo afterthat
//     newTodo.push({
//       id: 4,
//       title: Math.random(),
//       description: Math.random() * 100
//     })
//     setTodos(newTodo);
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add a Todo</button>


// import { useEffect, useMemo, useState } from "react";
// import axios from "axios";
//       {
//         todos.map((todo) => (

//           <Todo key={todo.id} title={todo.title} description={todo.description} />
//           // <h1 key={todo.id}>{todo.title} {todo.description}</h1>
//         ))
//       }
//     </div >
//   )
// }
// const Todo  = ({ title, description }) => {
//   return (
//     <div>
//       <h1>
//         {title}
//       </h1 >
//       <h3>
//         {description}
//       </h3>
//     </div>
//   )
// }
// export default App

// function App() {
//   return (
//     <div>
//       <Card><div>
//         My Name is Himanshu
//       </div>
//       </Card>

//       <Card>
//         <div>
//           I am a Slow Lern but when i Lern then its extra ordinery
//         </div>
//       </Card>
//     </div>
//   ) 
// }

// function Card({ children }) {
//   return (
//     <div style={{ padding: "20px", border: "2px solid red" }}>
//       {children}
//     </div>
//   )
// }
// function App() {
//   // const [counter, SetCounter] = useState([0]);
//   const [todos, setTodos] = useState(0);
//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function (res) {
//         setTodos(res.body.todos);
//       })
//   }, [])
//   return (
//     <div>
//       {/* <button onClick={function () {
//         SetCounter(counter + 1);
//       }}>Click Me   {counter}</button> */}
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({ todo, description }) {
//   return (
//     <div>
//       <h1>
//         {todo}
//       </h1>
//       <h5>
//         {description}
//       </h5>
//     </div>

//   )
// }
// export default App;




//  USE EFFECT

// function App() {

//   const [selectedId, SetSelectedId] = useState(3);


//   return (
//     <div>
//       <button onClick={function () {
//         SetSelectedId(1)
//       }}>1</button>
//       <button onClick={function () {
//         SetSelectedId(2)
//       }}>2</button>
//       <button onClick={function () {
//         SetSelectedId(3)
//       }}>3</button>
//       <button onClick={function () {
//         SetSelectedId(4)
//       }}> 4</button>
//       <Todo id={selectedId} />
//     </div>
//   )
// }
// function Todo({ id }) {

//   const [todo, setTodo] = useState({});

//   useEffect(() => {

//     setTimeout(() => {
//       axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then(
//         function (res) {
//           setTodo(res.data.todo)
//         }
//       )

//     }, [5000])
//     // const fatch = async () => {
//     //   console.log("")
//     //   const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     //   setTodo(res.data.todo);
//     // }
//     // fatch();

//   }, [id])
//   return (
//     <div>
//       ID: {id}
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>

//     </div>
//   )
// }
// export default App;

//  USEMEMO HOOK

// function App() {
//   const [counter, SetCounter] = useState(0);

//   const [inputvalue, SetInputvalue] = useState(1);


//   let count = useMemo(() => {
//     let count = 0;
//     for (let i = 0; i <= inputvalue; i++) {
//       count = count + i;
//     }
//     return count;
//   }, [inputvalue])
//   return (
//     <div>
//       <input onChange={function (e) {
//         SetInputvalue(e.target.value);
//       }} placeholder="Find Sum From 1 to n" />
//       <br />
//       Sum From 1 to {inputvalue} is {count}
//       <br />
//       <button onClick={function () {
//         SetCounter(counter + 1);
//       }}> counter ({counter})</button>
//     </div>


//   )
// }
// export default App;

/// USECall Back
function App() {
  return (
    <div>


    </div>
  )
}


export default App;