import React from 'react'
import styled from 'styled-components'
import './Style.css'
import logo from '../images/LogoBlack.png'
import phone from '../images/Phone.png'
import cart from '../images/Cart.png'
import location from '../images/Location.png'
import adidas from '../images/Adidas.png'
import cartt from '../images/Cartt.png'
import wishlist from '../images/Like.png'
import login from '../images/Login.png'



const Navbar = () => {

    return (    
    <div className = "Container">
        <div className = "Row" id = "Navbar1">
            <div className = "Left"> 
            <img src = {logo} alt = "Logo" className = "LogoBlack"/>
            </div>
            <div className = "Center"> 
            <p > Valentine’s Day Offers! Buy Two Get One Free <a href = "#" style = {{fontWeight: "bold", textDecoration: "underline"}}> Shop Now </a></p>
            </div>
            <div className = "Right"> 
            
            <span className = "Horizontal-items"> <img src = {phone} /> <a href = "#">Contact Us </a></span>
            <span className = "Horizontal-items"> <img src = {cart}/> <a href = "#">Track Order </a></span>
            <span className = "Horizontal-items"> <img src = {location}/><a href = "#"> Find A Store </a> </span>
            
            </div>
        </div>

        <div className ="Row" id = "Navbar2">
            <div className = "Left-navbar2">
        <div class="search">
            <input type="text" class="search-box" placeholder="Search for a product..."/>
            <button class="search-btn-navbar">Search</button>
        </div>
        </div>
        <div className = "Center-navbar2">
            <img src = {adidas} alt = "Adidas Logo" className =  "adidasLogo" />
            </div>

            <div className = "Right-navbar2">
            <span className = "Horizontal-items"> <img src = {cartt} /> <a href = "#">Cart </a></span>
            <span className = "Horizontal-items"> <img src = {wishlist}/><a href = "#"> Wishlist </a></span>
            <span className = "Horizontal-itemst"> <img src = {login}/> <a href = "#">Login </a></span>
            
            </div>
        </div>

        <div className ="Row" id = "Navbar3">
            
            <h4 ><a href = "#" className = "gender">Men</a> </h4>
            <h4><a href = "#" className = "gender" >Woman </a></h4>
            <h4> <a href = "#" className = "gender" >Unisex </a> </h4>
            <h4><a href = "#" className = "gender" >Kids </a></h4>
            <h4><a href = "#" className = "gender" >Best Seller</a> </h4>
            <h4><a href = "#" className = "gender" >New Arrivals </a></h4>
            <h4><a href = "#" className = "offer" >Offers </a></h4>  
            
            </div>

        <div className ="Row" id = "Navbar4">
            <p>
            <a href = "#" className = "category"> Men</a><span> / </span>
            <a href = "#" className = "category"> Clothing</a><span> / </span>
            <a href = "#" className = "category"> Tops</a><span> / </span>
            <a href = "#"className = "category"> Adidas</a><span> / </span>
            <a> Adidas Black T-shirt </a>
            </p>
        </div>
    </div>
    )
}

export default Navbar
