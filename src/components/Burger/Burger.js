import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'
const burger = (props) => {
    //obtain an array of keys ie: meat, salad, cheese
    let transformedIngredients = Object.keys(props.ingredients)
    //for each key
        .map(keyName => {
            //return am new Arraym size is obtained by the value of the key
            return [...Array(props.ingredients[keyName])].map((_,index) => {
                //loop through newly created array and return ingredients
                return <BurgerIngredient key={keyName + index} type={keyName} />
            }); 

        })
        //pull values from the inner arrays and create a new array
        // reduce methods accepts a function with two parametrs, the previious array and current array. It also accepts an initial array.
        .reduce((arr,el) => {
            //takes given elmenet "el" and adds to arr.
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients!</p>

        }
        
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        
        </div>

    );
}

export default burger;