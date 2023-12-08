// import { useState } from "react";
import React from "react";
// import Input from "./Input";
import productData from "../Product-Data";

function Product() {
    const products = productData();
  
    return (
      <div>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button className="bnt" onClick={() => {
                    console.log('you are going to buy ', product.title , product.price)
                }}> buy </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Product;

// function Product() {
//     const products = productData.map((product) => {
//         return(
//             <Input key={product.__id} product={product}/>
//         )
//     })
//     return <div> {products} </div>
//     // return (
//     // <div className='product-card'>
//     //     <h2> {props.title} </h2>
//     //     <p> {props.description} </p>
//     //     <span> Price : {props.price} L.E </span>
//     //     <h6> 
//     //         <button onClick={() => {setCounter(--counter)}} > - </button> 
//     //         {"  "}{counter}{"  "}
//     //         <button onClick={() => {setCounter(++counter)}} > + </button>
//     //     </h6>
//     // </div>
//     // );
//   }
  
//   export default Product;
  