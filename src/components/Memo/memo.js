// import React from "react";
// import { useState, useMemo, useEffect  } from "react";
// import ReactDOM from "react-dom/client";

// const products() =>{

// }

// import { useState, useMemo } from "react";

// const Memo = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => Calculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const Calculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }

//   if(Calculation === true){
//     console.log("calculated succesfully :)");
//   }else {
//     console.log("Failed :(");
//   }

//   return num;

// };

// export default Memo;

import { useState, useMemo } from "react";
import Navbar from "../navbar/navbar";

const Memo = () => {
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => Calculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
        <Navbar />
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+</button>
        <h2>Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const Calculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 9999000; i++) {
    num += 1;
  }

  if (num === 9999000) {
    console.log("calculated successfully :)");
  } else {
    console.log("Failed :(");
  }

  return num;
};

export default Memo;