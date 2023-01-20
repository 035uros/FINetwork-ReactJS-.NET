import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Components/Post.css";
import "../Components/LandingPage.css";
import "../Components/Article.css";

export const Post = (props) => {
  return (
    <div className="post">
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
      <section className="article">
        <h3>Postavi oglas</h3>
        <form action="" class="post-name-container">
          <select placeholder="Име предмета" id="post-name" name="name">
            <option value="" disabled selected hidden>
              Име предмета
            </option>
            <option value="1">Математика 3</option>
            <option value="nes">Нешто друго из базе...</option>
            <option value="nes">Нешто друго из базе...</option>
            <option value="nes">Нешто друго из базе...</option>
          </select>

          <input type="date" id="post-date" />
          <textarea
            name="Text1"
            cols="40"
            rows="5"
            id="post-info"
            placeholder="Додатне информације"
          ></textarea>
        </form>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Post;
