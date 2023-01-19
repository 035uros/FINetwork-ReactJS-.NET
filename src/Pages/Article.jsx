import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Components/Article.css";
import "../Components/LandingPage.css";
export const Article = (props) => {
  return (
    <div>
      <nav class="navbar nav-1">
        <section class="flex">
          <a href="ProfileSetUp" class="logo">
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
          <a href="LandingPage" className="btn">
            Назад
          </a>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Article;
