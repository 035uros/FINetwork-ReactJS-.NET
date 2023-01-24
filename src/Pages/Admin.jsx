import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Admin.css";
import "../Components/LandingPage.css";
import UserProfile from '../UserProfile';

export const Admin = (props) => {
  let navigate = useNavigate();
  if (UserProfile.getUser("authorized") !== "true") {
    navigate({
      pathname: "/login",
    });
  }

  const [alertText, setAlert] = useState("");
  const [listaKorisnika, setKorisnici] =useState([]);

  function getData() {

    const url = "https://localhost:44357/api/Fin/Korisnici";
    axios
      .post(url)
      .then((result) => {
        const korisnici= [];
        function korisnikSet(item){
          const uniData2 = item.split("-");
          korisnici.push({
            ime: uniData2[0],
            prezime: uniData2[1],
            email: uniData2[2],
            id: uniData2[3]
         })
        }
        const uniData = result.data.split(";");
        uniData.forEach(korisnikSet);
        setKorisnici(korisnici);
      });

    }

    useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function odobri(id){
        const data = {
            IdKorisnika: id
          };

        const url ='https://localhost:44357/api/Fin/Odobri';
        axios.post(url, data).then((result)=>{
          if(result.data === 'Унос успешан'){
            setAlert(result.data);
            var x = document.getElementById("myDIVs");
            x.style.display = "block";
            getData();
          }else{
            setAlert(result.data);
            var o = document.getElementById("myDIVe");
            o.style.display = "block";
          }
        }).catch((error)=>{
          setAlert(error);
          var k = document.getElementById("myDIVe");
          k.style.display = "block";
        })
    }

    function obrisi(id){
        const data = {
            IdKorisnika: id
          };
        const url ='https://localhost:44357/api/Fin/Obrisi';
        axios.post(url, data).then((result)=>{
          if(result.data === 'Унос успешан'){
            setAlert(result.data);
            var x = document.getElementById("myDIVs");
            x.style.display = "block";
            getData();
          }else{
            setAlert(result.data);
            var o = document.getElementById("myDIVe");
            o.style.display = "block";
          }
        }).catch((error)=>{
          setAlert(error);
          var k = document.getElementById("myDIVe");
          k.style.display = "block";
        })
    }

    var close = document.getElementsByClassName("closebtn");
    var i;

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; }, 600);
        }
      }
  return (
    <div>
        <nav class="navbar nav-1">
        <section class="flex">
          <a href="#/"onClick={() => { navigate({ pathname: "/" }); }} class="logo"> <i class="fas fa-house"></i>Почетна </a>
          
          <ul> 
            <li> <a href="#/" onClick={() => { navigate({ pathname: "/post" }); }}> <i class="fas fa-paper-plane"></i> Постави оглас</a> </li>
            <li><a href="#/"onClick={() => { navigate({ pathname: "/profilesetup" }); }}> Профил </a></li>
            {UserProfile.getUser("rola") === "1" ? (<li> <a href="#/" onClick={() => { navigate({ pathname: "/admin" }); }}>Контролна табла</a> </li>) : (<li></li>)}
            <li><a href="#/"onClick={() => { UserProfile.unsetAuth(); navigate({ pathname: "/login" }); }}> Одјави се </a></li>
          </ul>
        </section>
      </nav>




      <div class="container">
      <div class="alert" id="myDIVe" style={{display: "none"}}>
          <span class="closebtn">&times;</span>  
          <strong>Упс!</strong> {alertText}
        </div>

        <div class="alert success" id="myDIVs" style={{display: "none"}}>
          <span class="closebtn">&times;</span>  
          <strong>Одлично!</strong> {alertText}
        </div>
        <table>
          <tr>
            <th>Име</th>

            <th>Презиме</th>

            <th>Е-маил</th>

            <th>Одобри/Одбиј</th>
          </tr>

          {listaKorisnika.map(({ ime, prezime, email, id }) => (
            <tr>
                <td>{ime}</td>
                <td>{prezime}</td>
                <td>{email}</td>
                <td>
              <button value={id} onClick={() => odobri(id)}>
                <i class="fa-solid fa-check"></i>
              </button>
              /
              <button value={id} onClick={() => obrisi(id)}>
                <i class="fa-solid fa-x"></i>
              </button>
            </td>
            </tr>
        ))}   


          
        </table>
      </div>
    </div>
  );
};

export default Admin;
