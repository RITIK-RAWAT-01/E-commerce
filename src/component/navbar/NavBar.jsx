import React, { useContext, useState } from "react";
import './NavBar.css'
import { images } from "../assets/Assets";
import { Link, NavLink } from "react-router-dom";
import { Shop_Context } from "../context/Shop_Context";

function NavBar(){

    const {getTotalCardItems} = useContext(Shop_Context)

    return(
        <div className="navigationbaar">
            <div className="navbar">
                <section className="logo" id="img_logo">
                    <img src={images.Logo} alt="" />
                    <h1>SHOPPER</h1>
                </section>
                <section className="toggle_menu">
                    <input type="checkbox" id="toggle" />
                    <label for="toggle" class="sidebar-toggle">
                        <div class="spinner top"></div>
                        <div class="spinner middle"></div>
                        <div class="spinner bottum"></div> 
                    </label>
                </section>
                <ul id="navlink">
                    <NavLink to='/'><li>Shop</li></NavLink>
                    <NavLink to='/mens'><li>Men</li></NavLink>
                    <NavLink to='/womens'><li>Women</li></NavLink>
                    <NavLink to='./kids'><li>Kids</li></NavLink>
                </ul>
                <section className="btn" id="Card_img">
                    <NavLink to='/login'><button type="Button">Login</button></NavLink>
                    <NavLink to='./cart'><img src={images.Shop} alt="" /></NavLink>
                    <div className="card-counter">{getTotalCardItems()}</div>
                </section>
            </div>
        </div>
    )
}

export default NavBar