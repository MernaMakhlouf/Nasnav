import React from 'react'
import styled from 'styled-components'
import './Style.css'
import logo from '../images/Logo.png'
import Cash from'../images/Cash.png'
import Visa from'../images/Visa.png'
import Master from'../images/MasterCard.png'
import nasnavLogo from'../images/NasnavLogo.png'
import facebook from '../images/Facebook.png'
import linkedin from '../images/LinkedIn.png'
import instagram from '../images/Instagram.png'
import twitter from '../images/Twitter.png'

const Footer = props => {
    return (
      <div className = "Container_Footer">
        <div className = "Row_Footer">
          
            <div className = "Column_Footer">
              <span style = {{paddingTop: "65px"}}> 
            <img src = {logo} alt = "logo"/>
            <p style = {{ width: "450px"}} > Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit</p>
            </span>
            </div>
            
          <div className = "Column_Footer">
            <span style = {{paddingLeft: "50px"}}>
          <h2>Subscribe to our newsletter</h2>
          <div class="search2">
            <input type="text" class="search-box2" placeholder="Enter Your Mail"/>
            <button class="search-btn">Subscribe</button>
        </div>
            </span>
           
            <ul  style = {{listStyleType: "none"}}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Terms And Conditions</li>
            <li>Privacy Policy</li>
            <li>Sell With Us</li>
            <li>Shipping And Returns</li>
            </ul>

            </div>
            <div className = "Column_Footer" style ={{paddingTop: "120px", paddingRight: "150px"}}>
            <ul  style = {{listStyleType: "none"}}>
            <li> <img src = {facebook} alt = "Facebook"/> /YESHTERY </li>
            <li> <img src = {linkedin} alt = "LinkedIn"/> /YESHTERY</li>
            <li> <img src = {instagram} alt = "Instagram"/> /YESHTERY</li>
            <li> <img src = {twitter} alt = "Twitter"/> /YESHTERY</li>
            </ul>
            </div>
        </div>
        
        <div className = "Row_Footer" >
        <p> © 2021 yeshtery, all rights reserved. </p>
        <span>
          <img src = {Cash} alt = "Cash on delivery"/>
          <img src = {Visa} alt = "Visa" />
          <img src = {Master} alt = "Master"/>
        </span>
        <p> Powered By <img src = {nasnavLogo} alt = "nasnav logo"/></p>
        </div>
      </div>
        
    )
}
export default Footer