import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserProfile from '../UserProfile';
import "../Components/Post.css";
import "../Components/LandingPage.css";
import "../Components/Article.css";

export const Post = (props) => {
  let navigate = useNavigate ();
  if (UserProfile.getUser("authorized") !== "true") {
    navigate({
      pathname: "/login",
    });
  }

  const [listaUniverziteta, setListaUniverziteta] =useState([]);
  const [listaSmerova, setListaSmerova] =useState([]);
  const [listaPredmeta, setlistaPredmeta] =useState([]);
  const [predmet, setPredmet] = useState("");
  const [date, setDate] = useState(new Date());
  const [info, setInfo] = useState("");

  function getData() {

    const data = {
      IdUniverziteta: parseInt(UserProfile.getUser("uni"), 10),
      IdSmera: parseInt(UserProfile.getUser("smer"), 10)
    };
    

    const url = "https://localhost:44357/api/Fin/Univerzitet";
    axios
      .post(url)
      .then((result) => {
        const univerziteti= [];
        function uniSet(item){
          const uniData2 = item.split("-");
          univerziteti.push({
            label: uniData2[0],
            value: uniData2[1]
         })
        }
        const uniData = result.data.split(";");
        uniData.forEach(uniSet);
        setListaUniverziteta(univerziteti);
      });

      const url2 = "https://localhost:44357/api/Fin/Smer";
      axios
        .post(url2, data)
        .then((result) => {
          const smerovi= [];
          function smerSet(item){
            const uniData2 = item.split("-");
            smerovi.push({
              label: uniData2[1],
              value: uniData2[0]
           })
          }
          const smerData = result.data.split(";");
          smerData.forEach(smerSet);
          setListaSmerova(smerovi);
        });

        const url3 = "https://localhost:44357/api/Fin/Predmet";
        axios
        .post(url3, data)
        .then((result) => {
          const predmeti= [];
          function predmetSet(item){
            const uniData2 = item.split("_");
            predmeti.push({
              label: uniData2[1],
              value: uniData2[0]
           })
          }
          const predmetData = result.data.split(";");
          predmetData.forEach(predmetSet);
          setlistaPredmeta(predmeti);
        });
        setPredmet(1);

    }

    useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          KorisnickoIme: UserProfile.getUser("user_name"),
          IdPredmeta: predmet,
          Rok: date,
          Info: info
        };

        const url = "https://localhost:44357/api/Fin/Oglas";
        axios
        .post(url, data)
        .then((result) => {
          if (result.data === "Унос успешан") {
            alert(result.data);
          }
        })
        .catch((error) => {
          alert(error);
        });
        
      }

  return (
    <div className="post">

      <nav class="navbar nav-1">
        <section class="flex">
          <a href="#/"onClick={() => { navigate({ pathname: "/" }); }} class="logo"> <i class="fas fa-house"></i>Почетна </a>
          
          <ul> 
            <li> <a href="#/" onClick={() => { navigate({ pathname: "/post" }); }}> <i class="fas fa-paper-plane"></i> Постави оглас</a> </li>
            <li><a href="#/"onClick={() => { navigate({ pathname: "/profilesetup" }); }}> Профил </a></li>
            <li><a href="#/"onClick={() => { UserProfile.unsetAuth(); navigate({ pathname: "/login" }); }}> Одјави се </a></li>
          </ul>
        </section>
      </nav>
      
      <section className="articlePost">
        <h3>Постави оглас</h3>
        <form name="oglas" class="post-name-container" onSubmit={handleSubmit}>
        <select id="post-name" name="name" value={UserProfile.getUser("uni")}>
        {listaUniverziteta.map(({ label, value }) => (
          <option  id={value} value={value}>
            {label}
          </option >
        ))}
          </select>

          <select id="post-name" name="name" value={UserProfile.getUser("smer")}>
        {listaSmerova.map(({ label, value }) => (
          <option  id={value} value={value}>
            {label}
          </option >
        ))}
          </select>

          <select value={predmet} onChange={(e) => {setPredmet(e.target.value)}}  id="post-name" name="predmet" >
        {listaPredmeta.map(({ label, value }) => (
          <option  id={value} value={value}>
            {label}
          </option >
        ))}
          </select>

        

          <input type="date" id="post-date" value={date} onChange={(e) => setDate(e.target.value)} required/>
          <textarea
            name="Text1"
            cols="40"
            rows="5"
            id="post-info"
            placeholder="Додатне информације"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
          <button type="submit">Унеси</button>
        </form>
      </section>
    </div>
  );
};

export default Post;
