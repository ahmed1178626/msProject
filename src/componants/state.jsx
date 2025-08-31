import { useState } from "react";

export default function State() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState([]);
  const [color, setIsColor] = useState(true);

  

  const handleEmail = (dtl) => {
    setEmail(dtl.target.value);
  };
  const handlePassword = (dtl) => {
    setPassword(dtl.target.value);
  };
  const handlePhone = (dtl) => {
    setPhone(dtl.target.value);
  };

  const handleclick = () => {
    if (color) {
      setIsColor(false);
    } else {
      setIsColor(true);
    }
    const item = {
      email: email,
      password: password,
      phone: phone,
    };
    setItems([...items, item]);
  };



  return (
    <>
      <div className="d-flex">
        <div className="input-dtl">
          <h3>
            Enter Email :
            <input type="text" onChange={handleEmail} placeholder=" @gmail.com" />
          </h3>
          <h3>
            Enter Password :
            <input type="password" onChange={handlePassword} placeholder=" Password..." />
          </h3>
          <h3>
            Enter Phone number :
            <input type="tel" onChange={handlePhone} placeholder=" Phone..." />
          </h3>
          <button style={{ backgroundColor: color ? "blue" : "green" }} className="btn btn-primary" onClick={handleclick}>
            {color ? "Submit" : "Save Info"}
          </button>
          
        </div>
      </div>
      <div className="container">
        <div className="row  ">
          {items.map((info) => (
            <div className="card m-3 col-md-3">
              <div className="card-body">
                <h2 className="card-email">Email: {info.email}</h2>
                <h5 className="card-password">Password: {info.password}</h5>
                <p className="card-phone">Phone: {info.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");

//   const [items, setItems] = useState("");

//   const handleTitle = (a) => {
//     setTitle(a.target.value);
//   };
//   const handlePrice = (a) => {
//     setPrice(a.target.value);
//   };
//   const handleStock = (a) => {
//     setStock(a.target.value);
//   };

//   const handleClick = () => {
//     const item = {
//       title: title,
//       price: price,
//       stock: stock,
//     };

//     setItems([...items, item]);
//   };

// <>
//   <input type="text" onChange={handleTitle} />
//   <input type="tel" onChange={handlePrice} />
//   <input type="number" onChange={handleStock} />
//   <button className="btn btn-primary" onClick={handleClick}>
//     Save Info
//   </button>

//   {items.map((item) => (
//     <div>
//       <h1>{item.title}</h1>
//       <p>{item.price}</p>
//       <p>{item.stock}</p>
//     </div>
//   ))}
// </>
