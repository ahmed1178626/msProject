import React from "react";
import { useState } from "react";

export default function Counter() {
  const [isMarred, setIsMarred] = useState(false);
//   const [num, setNum] = useState(5);
//   const [name, setName] = useState(true);

  const changeStatus = () => {
    if (isMarred) {
      setIsMarred(false);
    } else {
      setIsMarred(true);
    }
  };

//   const changeName = () => {
//     if (name) {
//       setName(false);
//     } else {
//       setName(true);
//     }
//   };
//   const incereaseNum = () => {
//     if (num >= 10) return;
//     setNum((preState) => preState + 1);
//   };
//   const decereaseNum = () => {
//     if (num <= 1) return;
//     setNum((preState) => preState - 1);
//   };

  return (
    <>
      <div>
        <h4 style={{ color: isMarred ? "red" : "green" }}>
          {isMarred ? "married" : "unmarried"}
        </h4>
        <button onClick={changeStatus} className="btn btn-primary">
          ChangeStatus
        </button>
      </div>
      {/* <div>
        <button onClick={incereaseNum} className="btn btn-primary">
          Add Microsoft
        </button>
        <h1>{num}</h1>
        {num <= 0 ? (
          <p>out of stock</p>
        ) : (
          <button onClick={decereaseNum} className="btn btn-primary">
            Sub Microsoft{" "}
          </button>
        )}

        <h3 style={{ color: name ? "blue" : "red" }}>
          {name ? "Ahmed" : "Bashir"}
        </h3>
        <button onClick={changeName} className="btn btn-danger">
          Sub Microsoft
        </button>
      </div> */}
    </>
  );
}
