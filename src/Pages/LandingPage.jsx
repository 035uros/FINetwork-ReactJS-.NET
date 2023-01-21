import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Components/LandingPage.css";
import "../Components/Article.css";
import UserProfile from '../UserProfile';

export const LandingPage = (props) => {
  let navigate = useNavigate ();
  if (UserProfile.getUser("authorized") !== "true") {
    navigate({
      pathname: "/login",
    });
  }

  let menu = document.querySelector("#menu-btn");
  let navbar = document.querySelector(".header .navbar");

  let searchBtn = document.querySelector("#search-btn");
  let searchBar = document.querySelector(".search-bar-container");

  function showArticle() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
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
              <a onClick={() => {
            navigate({ pathname: "/post" });
            }}>
                Постави оглас<i class="fas fa-paper-plane"></i>
              </a>
            </li>
          </ul>
        </section>
      </nav>

      <div className="container">

      <div id="myDIV" style={{display: "none"}}>
        <section class="article">
        <div class="details">
          <h3 class="name">Математика</h3>
          <p class="user">
            <span>Милан Маринковић</span>
          </p>
          <h3 class="title">Детаљи</h3>
          <div class="flex">
            <div class="box">
              <p>
                <i>Универзитет:</i>
                <span>Крагујевац</span>
              </p>
              <p>
                <i>Степен студија:</i>
                <span>4</span>
              </p>
              <p>
                <i>Смер:</i>
                <span>Рачунарска техника и софтверско инжењерство</span>
              </p>
              <p>
                <i>Година</i>
                <span>4</span>
              </p>
              <p>
                <i>Пол:</i>
                <span>Мушки</span>
              </p>
              <p>
                <i>Е-маил:</i>
                <span>mm94261@gmail.com</span>
              </p>
            </div>
            <div class="box">
              <p>
                <i>Дувански дим:</i>
                <span>Не</span>
              </p>
              <p>
                <i>Музика:</i>
                <span>Не</span>
              </p>
              <p>
                <i>Место за учење:</i>
                <span>Не</span>
              </p>
              <p>
                <i>Тип учења:</i>
                <span>Уживо</span>
              </p>
              <p>
                <i>Паузе:</i>
                <span>Да</span>
              </p>
              <p>
                <i>Учење у већим групама:</i>
                <span>Да</span>
              </p>
            </div>
          </div>
          <h3 class="title">Додатне информације:</h3>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            cupiditate aliquid ipsum recusandae maxime nisi, velit eaque,
            libero, exercitationem culpa accusamus. Neque dolor quaerat modi
            saepe facere dignissimos temporibus molestias.
          </p>
          <a href="#" className="btn">
            Пошаљи поруку
          </a>
          <a onClick={showArticle} className="btn">
            Назад
          </a>
        </div>
        </section>
        </div>

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
            <button onClick={showArticle} className="btn">
              Прикажи више
            </button>
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
