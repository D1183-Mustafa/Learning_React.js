// import React from 'react'
// import ReactStars from "react-rating-stars-component";
// import "./App.css"
// // import {MdStarBorder,
// // MdStarHalf,MdStar} from "react-icons/md"
// const App = () => {

//   const secondExample = {
//     size: 50,
//   count: 5,
//   color: "black",
//   activeColor: "green",
 
//   // value: 7.5,
//   // a11y: true,
//   isHalf: true,
//   emptyIcon: <i className="far fa-star icon" />,
//   halfIcon: <i className="fa fa-star-half-alt icon" />,
//   filledIcon: <i className="fa fa-star icon" />,
//   onChange: newValue => {
//     console.log(`Example 2: new value is ${newValue}`);
//   }};
//   return (
//     <div className="App">
//       <h1>Star Rating</h1>
//      <ReactStars 
//      {...secondExample}

//      />

//      </div>
//   )
// }

// export default App


import React, { useState } from "react";
import "./App.css";


const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating >=starId) {
    styleClass = "star-rating-filled";
  }


  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
    
        height="25px"
        width="25px"
        className={styleClass}
        viewBox="-2 0 25 23"
        data-rating="1"
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function App() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
console.log(rating)
  return (
    <div className="App">
      <div className="header">
        <h1>Star Rating</h1>
        
      </div>
      <div className="flex-container">
        {stars.map((star, i) => (
          <Star
         
            key={i+1}
            starId={i+1}
            rating={hoverRating || rating}
            onMouseEnter={() => setHoverRating(i+1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(i+1)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



