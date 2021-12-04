import React from 'react'
import './HomeStyle.css'


class IncrementItem extends React.Component 
{

    constructor()
    {
        super()
        this.state = 
        {
            count: 0
        }
        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)
    }
    Increment()
    {
        this.setState(prev => 
            {
            return {
                count: prev.count + 1
            } 
            }
            )
    }
    Decrement()
    {
        this.setState(prev => 
            {
            return {
                count: prev.count - 1
            } 
            }
            )
    }
    render()
    {
       
        return(
            <div>
                <button class="minus-btn" onClick = {this.Decrement}>-</button>
                <input type="text" class="Quantity-box" placeholder = {this.state.count}/>
                <button class="plus-btn" onClick = {this.Increment}>+</button>
            </div>
        )
    }

}

export default IncrementItem
