import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Admin.css";
import "../Components/LandingPage.css";

export const Admin = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <nav class="navbar nav-1">
        <section class="flex">
          <a
            href="#/"
            onClick={() => {
              navigate({ pathname: "/" });
            }}
            class="logo"
          >
            {" "}
            <i class="fas fa-house"></i>Почетна{" "}
          </a>

          <ul>
            <li>
              {" "}
              <a
                href="#/"
                onClick={() => {
                  navigate({ pathname: "/post" });
                }}
              >
                {" "}
                <i class="fas fa-paper-plane"></i> Постави оглас
              </a>{" "}
            </li>
            <li>
              <a
                href="#/"
                onClick={() => {
                  navigate({ pathname: "/profilesetup" });
                }}
              >
                {" "}
                Профил{" "}
              </a>
            </li>
            <li>
              <a
                href="#/"
                /*onClick={() => {
                  UserProfile.unsetAuth();
                  navigate({ pathname: "/login" });
                }}*/
              >
                {" "}
                Одјави се{" "}
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <div class="container">
        <table>
          <tr>
            <th>Име</th>

            <th>Презиме</th>

            <th>Е-маил</th>

            <th>Одобри/Одбиј</th>
          </tr>

          <tr>
            <td>Милан</td>

            <td>Маринковић</td>

            <td>mm94261@gmail.com</td>

            <td>
              <button>
                <i class="fa-solid fa-check"></i>
              </button>
              /
              <button>
                <i class="fa-solid fa-x"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td>Милан</td>

            <td>Маринковић</td>

            <td>mm94261@gmail.com</td>

            <td>
              <button>
                <i class="fa-solid fa-check"></i>
              </button>
              /
              <button>
                <i class="fa-solid fa-x"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td>Милан</td>

            <td>Маринковић</td>

            <td>mm94261@gmail.com</td>

            <td>
              <button>
                <i class="fa-solid fa-check"></i>
              </button>
              /
              <button>
                <i class="fa-solid fa-x"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Admin;
