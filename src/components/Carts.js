import React from "react";
import './HomeStyle.css'
import './IncrementItem'
import {QuantityCounter} from './IncrementItem'


class Calculation extends React.Component
{
   
    constructor()
    {
        super()
        this.state = 
        {
            count: 0
        }
        this.Calc = this.Calc.bind(this)
    } 
    Calc()
    {
       
        this.setState(prev => 
            {
            return {
                count: prev.count + 1
            } 
            }
            
            )}
            render()
            {
                return(
                    <div>
                    <button class="btn cart-btn" onClick = {this.Calc}> Add To Cart  </button>
                    <span class="CartQuantity"> {this.state.count} </span> 
                    <button class="btn"> Pickup From Store </button>
                    </div>
                )
            }
}
export default Calculation


