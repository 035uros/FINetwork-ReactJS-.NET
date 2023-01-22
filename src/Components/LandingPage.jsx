import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/LandingPage.css";
import "../Components/Article.css";
import "../Components/chat.css";
import UserProfile from '../UserProfile';

export const LandingPage = (props) => {
  let navigate = useNavigate ();
  if (UserProfile.getUser("authorized") !== "true") {
    navigate({
      pathname: "/login",
    });
  }

  const translit = require('latin-to-cyrillic');

  const [searchValue, setSearchValue] = useState("");
  const [listaPredmeta, setlistaPredmeta] =useState([]);
  const [listaOglasa, setListaOglasa] =useState([]);
  const [article, setArticle] =useState([]);
  const [idOglasa, setIdOglasa] = useState("");
  const [idPrimaoca, setIdPrimaoca] = useState("");
  const [msgText, setMsgText] = useState("");

  const onChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);

    if(searchTerm === ''){
      getData();
    }else{
      const data = {
        NazivPredmeta: searchTerm
      };  
      const url2 = "https://localhost:44357/api/Fin/OglasSearch";
      axios
        .post(url2, data)
        .then((result) => {
          const oglasi= [];
          function oglasSet(item){
            const uniData2 = item.split("_");
            oglasi.push({
              label: uniData2[0],
              value: uniData2[1],
              oglasid: uniData2[2]
           })
          }
          const uniData = result.data.split(";");
          uniData.forEach(oglasSet);
          setListaOglasa(oglasi);
        });
    };
    }

  function getData() {

    const url = "https://localhost:44357/api/Fin/OglasLoad";
    axios
      .post(url)
      .then((result) => {
        const oglasi= [];
        function oglasSet(item){
          const uniData2 = item.split("_");
          oglasi.push({
            label: uniData2[0],
            value: uniData2[1],
            oglasid: uniData2[2]
         })
        }
        const uniData = result.data.split(";");
        uniData.forEach(oglasSet);
        setListaOglasa(oglasi);
      });

      const data = {
        IdSmera: parseInt(UserProfile.getUser("smer"), 10)
      };  

      const url3 = "https://localhost:44357/api/Fin/Predmet";
        axios
        .post(url3, data)
        .then((result) => {
          const predmeti= [];
          function predmetSet(item){
            const uniData2 = item.split("_");
            predmeti.push({
              value: uniData2[1]
           })
          }
          const predmetData = result.data.split(";");
          predmetData.forEach(predmetSet);
          setlistaPredmeta(predmeti);
        });

    }

    useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getArticle(idOglasa) {
      const data = {
        IdOglasa: idOglasa
      };
      const url = "https://localhost:44357/api/Fin/ArticleLoad";
      axios
        .post(url, data)
        .then((result) => {
          const items= [];
          function oglasSet(item){
            const uniData2 = item.split("_");
            setIdPrimaoca(uniData2[16]);
            items.push({
              naslov: uniData2[0],
              ime: uniData2[1],
              prezime: uniData2[2],
              nazivUniverziteta: uniData2[3],
              nazivSmera: uniData2[4],
              godina: uniData2[5],
              pol: uniData2[6],
              email: uniData2[7],
              pusac: uniData2[8],
              muzika: uniData2[9],
              mesto: uniData2[10],
              pauze: uniData2[11],
              grupa: uniData2[12],
              info: uniData2[13],
              stepen: uniData2[14],
              online: uniData2[15]
           })
          }
          const uniData = result.data.split(";");
          uniData.forEach(oglasSet);
          setArticle(items);
        });
  
      }

  function showArticle(oglasId) {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      getArticle(oglasId);
      setIdOglasa(oglasId)
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function openForm(idOglasa) {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const handleSubmitChat = (e) => {
    e.preventDefault();

    const data = {
      KorisnickoIme: UserProfile.getUser("user_name"),
      IdPrimaoca: idPrimaoca,
      IdOglasa: idOglasa,
      Info: msgText
    };  

    console.log(data);
    /*const url3 = "https://localhost:44357/api/Fin/Predmet";
      axios
      .post(url3, data)
      .then((result) => {
        const predmeti= [];
        function predmetSet(item){
          const uniData2 = item.split("_");
          predmeti.push({
            value: uniData2[1]
         })
        }
        const predmetData = result.data.split(";");
        predmetData.forEach(predmetSet);
        setlistaPredmeta(predmeti);
      });*/

  }
  return (
    <div>
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

      <div className="container">

      <div id="myDIV" style={{display: "none"}}>
      {article.map(({ naslov,  ime, prezime, nazivUniverziteta, nazivSmera, godina, pol, email, pusac, muzika, mesto, pauze, grupa, info, stepen, online }) => (
        <section class="article">
        <div class="details">
        <h3 class="name">{naslov}</h3>
          <p class="user">
            <span>{ime} {prezime}</span>
          </p>
          <h3 class="title">Детаљи</h3>
          <div class="flex">
            <div class="box">
            <p>
              <span>{nazivUniverziteta}</span>
            </p>
            <p>
              <i>Степен студија:</i>
              <span>{stepen}</span>
            </p>
            <p>
              <i>Смер:</i>
              <span>{nazivSmera}</span>
            </p>
            <p>
              <i>Година</i>
              <span>{godina}</span>
            </p>
            <p>
              <i>Пол:</i>
              <span>{pol}</span>
            </p>
            <p>
              <i>Е-маил:</i>
              <span>{email}</span>
            </p>
            </div>
            <div class="box">
            <p>
              <i>Дувански дим:</i>
              <span>{pusac}</span>
            </p>
            <p>
              <i>Музика:</i>
              <span>{muzika}</span>
            </p>
            <p>
              <i>Место за учење:</i>
              <span>{mesto}</span>
            </p>
            <p>
              <i>Тип учења:</i>
              <span>{online}</span>
            </p>
            <p>
              <i>Паузе:</i>
              <span>{pauze}</span>
            </p>
            <p>
              <i>Учење у већим групама:</i>
              <span>{grupa}</span>
            </p>
            </div>
          </div>
          <h3 class="title">Додатне информације:</h3>
          <p class="description"> {info} </p>
          <a href="#/" value={idOglasa} onClick={() => openForm(idOglasa)} className="btn"> Пошаљи поруку </a>
          <a href="#/" onClick={showArticle} className="btn"> Назад </a>
        </div>
        </section>
        ))}   
      </div>

        <form action="" class="search-bar-container">
          <input type="search" id="search-bar" placeholder="Смпремам испит из..." value={searchValue} onChange={onChange}/>
          <label onClick={() => onSearch(searchValue)} for="search-bar" class="fas fa-search"></label>
        <div className="dropdown">
          {listaPredmeta
            .filter((item) => {
              const searchTerm = translit(searchValue.toLowerCase());
              const predmet = item.value.toLowerCase();

              return (
                searchTerm &&
                predmet.startsWith(searchTerm) &&
                predmet !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.value)}
                className="dropdown-row"
                key={item.value}
              >
                {item.value}
              </div>
            ))}
        </div>
        </form>

        <div className="box-container">
          {listaOglasa.map(({ label, value, oglasid }) => (
            <div className="box"> <h3>{label}</h3> <p> {value} </p> <button value={oglasid} onClick={() => showArticle(oglasid)} className="btn"> Прикажи више </button> </div> 
        ))}        
        </div>

            <div>
            <button class="open-button" onClick={openForm}>Chat</button>

            <div class="chat-popup" id="myForm">
               <form onSubmit={handleSubmitChat} class="form-container">
               <h1>Ћаскање</h1>

               <div class="containerChat">
  <img src="/w3images/bandmember.jpg" alt="Avatar" style={{width: "100%"}}/> 
  <p>Hello. How are you today?</p>
</div>

<div class="containerChat darker">
  <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right" style={{width: "100%"}}/>
  <p>Hey! I'm fine. Thanks for asking!</p>
</div>

<div class="containerChat">
  <img src="/w3images/bandmember.jpg" alt="Avatar" style={{width: "100%"}}/>
  <p>Sweet! So, what do you wanna do today?</p>
</div>

<div class="containerChat darker">
  <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right" style={{width: "100%"}}/>
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
</div>

                <textarea placeholder="Унеси поруку.." name="msg" value={msgText} onChange ={(e) => setMsgText(e.target.value)} required></textarea>

                <button type="submit" class="btn">Пошаљи</button>
                <button type="button" class="btn cancel" onClick={closeForm}>Затвори</button>
              </form>
            </div>
            </div>
      </div>
    </div>
  );
};


export default LandingPage;
