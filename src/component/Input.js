import React from "react";
import "../Input.css";

function Input(props){
    return(
        <div className="container">
            <div className="card">
                <img src={props.product.image} alt=""/>
                <h2>{props.product.title}</h2>
                <p> {props.product.description} </p>
                <p> price : {props.product.price} </p>
                <button className="bnt" onClick={() => {
                    console.log('you are going to buy ', props.product.title , props.product.price)
                }}> buy </button>
            </div>
        </div>
    );
}
  
export default Input;