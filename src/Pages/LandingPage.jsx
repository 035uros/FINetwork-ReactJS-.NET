import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Components/LandingPage.css";

export const LandingPage = (props) => {
  let navigate = useNavigate ();
  let menu = document.querySelector("#menu-btn");
  let navbar = document.querySelector(".header .navbar");

  let searchBtn = document.querySelector("#search-btn");
  let searchBar = document.querySelector(".search-bar-container");
  return (
    <div>
      <nav class="navbar nav-1">
        <section class="flex">
          <a onClick={() => {
            navigate({ pathname: "/profilesetup" });
            }} class="logo">
            <i class="fas fa-house"></i>Профил
          </a>
          <ul>
            <li>
              <a href="#">
                Постави оглас<i class="fas fa-paper-plane"></i>
              </a>
            </li>
          </ul>
        </section>
      </nav>

      <div className="container">
        <form action="" class="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label for="search-bar" class="fas fa-search"></label>
        </form>

        <div className="box-container">
          <div className="box">
            <h3>Математика 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="#" className="btn">
              Прикажи више
            </a>
          </div>

          <div className="box">
            <h3>Електроника</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="#" className="btn">
              Прикажи више
            </a>
          </div>

          <div className="box">
            <h3>Е-пословање</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="#" className="btn">
              Прикажи више
            </a>
          </div>

          <div className="box">
            <h3>Базе података</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="#" className="btn">
              Прикажи више
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default LandingPage;
