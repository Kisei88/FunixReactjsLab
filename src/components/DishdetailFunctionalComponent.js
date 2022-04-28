import React, { Component, useState, useEffect } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

function DishDetail(dish) {
    const renderDish = function(dish) {
        if (dish != null) {
            return(
                <div key = {dish.id} className = 'col-12 col-md-5 m-1'>
                    <Card onClick = {() => this.onDishSelected(dish)}>
                       <CardImg width='100%' src = {dish.image} alt = {dish.name}/>
                             <CardTitle>{dish.name}</CardTitle>
                             <CardTitle>{dish.description}</CardTitle>
                    </Card>
                </div>
            )}else  ()=> <div></div>;
        };
        const [comment] = useState(comments.map) (()=> {
        if (comment != null) {
            return (
                <div key = {comment.id} className = 'col-12 col-md-5 m-1'>
                    <h3>Comments</h3>
                    <p>{comment.comment}</p>
                    <p>{comment.author}, {comment.date}</p>
                </div>
            )
        }else {
            return (
            <div></div>
            )
        };
        )};

return (
    <div className = 'container'>
        <div className = 'row'>
            {renderDish}
            {comment}
        </div>
    </div>
        ) 

        
    };

export default DishDetail