import { useState } from "react";



export default function State(props) {
  console.log(props);

  

  const [num, setNum] = useState("");

  const [r, setR] = useState("");

  const handlchange = (info) => {
    setNum(info.target.value);
  };

  const handlclick = () => {
    let r = num;
    setR(r);
  };

  return (
    <>
      <input type="text" onChange={handlchange} />
      <input type="password" onChange={handlchange} />
      <input type="tel" onChange={handlchange} />
      <h1>result:{r}</h1>
      <button onClick={handlclick}>click</button>
      <h1>{props.name}</h1>
    </>
  );
}
