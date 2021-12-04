import React , {Component}from 'react'
import styled from 'styled-components'
import './HomeStyle.css'
import { MainItem, ProductItemsData } from '../services/Data'
import adidas from '../images/Adidas.png'
import star from '../images/Star.png'
import unstar from '../images/Unstar.png'
import sample1 from '../images/Sample1.png'
import sample2 from '../images/Sample2.png'
import './IncrementItem'
import IncrementItem from './IncrementItem'
import './Carts'
import Calculations from './Carts'

const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0; 

productImages.forEach((item, i) => { 
    item.addEventListener('click', () => { 
        productImages[activeImageSlide].classList.remove('active'); 
        item.classList.add('active'); 
        productImageSlide.style.backgroundImage = `url('${item.src}')`; 
        activeImageSlide = i; 
    })
})

const sizeBtns = document.querySelectorAll('.size-radio-btn'); 
let checkedBtn = 0; 

sizeBtns.forEach((item, i) => { 
    item.addEventListener('click', () => { 
        sizeBtns[checkedBtn].classList.remove('check'); 
        item.classList.add('check'); 
        checkedBtn = i; 
    })
})


const Main = (props) => {
    return (
        <div className = "Container_Home">
        {MainItem.map((item) => ( 
        <section class="product-details" >
        
        <div class="image-slider"  >
        <div class="product-images" key = {item.id}>
        <img src = {item.img1}   class = "active" alt = ""/>
        <img  src = {item.img2} alt = ""/>
        <img  src = {item.img3} alt = ""/>
        <img  src = {item.img4} alt = ""/>
        
        </div>
        </div>
            
            <div class="details">
            <img src = {adidas} alt = "Adidas Logo"/>
            <p class="product-short-des"> {item.desc} </p>
            <p style = {{color: "gray"}}> {item.gender} </p>
            <div>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {unstar} alt = ""/></span>
            <span style = {{fontWeight: "bold" }}>  4.5 of 5 <span style = {{color: "grey"}}> 22 Rates </span>  </span>
            </div>

            <span class="product-price"> {item.price} </span>
            <span class="product-actual-price"> {item.actualPrice} </span>
            <span class="product-discount"> 30% off </span>
            <p class="product-sub-heading"> Size </p>
            <input type="radio" name="size" value="Small" checked hidden id="s-size"/>
            <label for="s-size" class="size-radio-btn check"> Small </label>
            <input type="radio" name="size" value="Medium" hidden id="m-size"/>
            <label for="m-size" class="size-radio-btn"> Medium </label>
            <input type="radio" name="size" value="Large" hidden id="l-size"/>
            <label for="l-size" class="size-radio-btn"> Large </label>
            <input type="radio" name="size" value="X Large" hidden id="xl-size"/>
            <label for="xl-size" class="size-radio-btn"> X Large </label>
            <input type="radio" name="size" value="XX Large" hidden id="xxl-size"/>
            <label for="xxl-size" class="size-radio-btn"> XX Large </label>

            <p class="product-sub-heading"> Color </p>
            
            <span><img src = {sample1} alt =""/></span>
            <span> <img src = {sample2} alt =""/> </span>

            <p class="product-sub-heading"> Quantity </p>
            <div class="Quantity">
            <IncrementItem/>
            </div>
            <div>
            <Calculations/>
            </div>
            </div>
            
        </section>
        ))}

        <section>
            <h1 className = "product-view" id = "product-view1"> Similar Products </h1>
            <h3 className = "product-view" id = "product-view2"> You may like these products also </h3>

            <div class="product-container">
            {ProductItemsData.map((item) => ( 
            <div class="product-card">
            <div class="product-image">
            <img src= {item.img} class="product-thumb" alt=""/>
                </div>
                <div class="product-info">
            <p class="product-short-des">{item.des}</p>
            <span class="price">{item.price}</span>
            <span class="actual-price" >{item.actualPrice}</span> 
            <span class="discount-tag" >50%</span>
            <span> <img src = {adidas} alt = "Adidas Logo"/> </span>
            
            <div style = {{paddingTop: "20px"}}>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {star} alt = ""/></span>
            <span> < img src = {unstar} alt = ""/></span>
            <span style = {{fontWeight: "bold" }}>  4.5 of 5 </span>
            </div>
            <p> Pickup From {item.place}</p>
                </div>
            </div>
            ))}     
        </div>
        </section>
        </div>
    )
}
export default Main