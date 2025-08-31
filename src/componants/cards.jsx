// import card1 from '../img/card-1.avif';
// import card2 from '../img/card-2.avif';
// import card3 from '../img/card-3.avif';
// import card4 from '../img/card-4.avif';

import { useState } from "react";

import { products } from "../deta";

export default function Cards() {
  const [prod, setProd] = useState(products);

  return (
    <>
      <div className="row container mx-auto">
        {prod.map((item) => (
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}Card title</h5>
                <p className="card-text">{item.description}
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
