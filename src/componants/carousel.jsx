import img1 from "../img/carousel1.webp";
import img2 from "../img/carousel2.webp";
import img3 from "../img/carousel3.jpg";
import { useState } from "react";

export default function Carousel() {
  const [num, setNum] = useState(5);
  const [name, setName] = useState(true);

  const changeName = () => {
    if (name) {
      setName(false);
    } else {
      setName(true);
    }
  };
  const incereaseNum = () => {
    if (num >= 10) return;
    setNum((preState) => preState + 1);
  };
  const decereaseNum = () => {
    if (num <= 1) return;
    setNum((preState) => preState - 1);
  };

  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={img1}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            <button onClick={incereaseNum} className="btn btn-primary">
              Add Microsoft
            </button>
            <h1>{num}</h1>
            {num<=0?(<p>out of stock</p>):(<button onClick={decereaseNum} className="btn btn-primary">
              Sub Microsoft{" "}
            </button>)}

            <h3 style={{ color: name ? "blue" : "red" }}>
              {name ? "Ahmed" : "Bashir"}
            </h3>
            <button onClick={changeName} className="btn btn-danger">
              Sub Microsoft
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <button onClick={incereaseNum} className="btn btn-primary">
              Add Microsoft{" "}
            </button>
            <h1>{num}</h1>
            <button onClick={decereaseNum} className="btn btn-primary">
              Sub Microsoft{" "}
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
            <button onClick={incereaseNum} className="btn btn-primary">
              Add Microsoft{" "}
            </button>
            <h1>{num}</h1>
            <button onClick={decereaseNum} className="btn btn-primary">
              Sub Microsoft{" "}
            </button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
