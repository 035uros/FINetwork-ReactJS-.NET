import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../src/Components/LandingPage.css";

export const LandingPage = (props) => {
  return (
    <div>
      <nav class="navbar nav-1">
        <section class="flex">
          <a href="ProfileSetUp" class="logo">
            <i class="fas fa-house"></i>Профил
          </a>
          <div className="searchbar">
            <input type="text" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

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
