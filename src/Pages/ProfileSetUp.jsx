import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserProfile from '../UserProfile';

export const ProfileSetUp = () => {
  let navigate = useNavigate();
  if (UserProfile.getUser("authorized") !== "true") {
    navigate({
      pathname: "/login",
    });
  }

  const [alertText, setAlert] = useState("");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [uni, setUni] = useState("");
  const [smer, setSmer] = useState("");
  const [god, setGodina] = useState("");
  const [stepen, setStepen] = useState("");
  const [pusac, setPusac] = useState("");
  const [muzika, setMuzika] = useState("");
  const [grupa, setGrupa] = useState("");
  const [pauza, setPauza] = useState("");
  const [mesto, setMesto] = useState("");
  const [online, setOnline] = useState("");
  const [pol, setPol] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  function getData() {
    const data = {
      KorisnickoIme: UserProfile.getUser("user_name"),
    };
    const url = "https://localhost:44357/api/Fin/ProfileSetUp";
    axios
      .post(url, data)
      .then((result) => {
        const userData = result.data.split(" ");
        setName(userData[3]);
        setLastname(userData[4]);
        setEmail(userData[5]);
        setPass(userData[6]);
        setCheckPass(userData[6]);
        if (userData[7] !== "") {
          setSmer(userData[7]);
        }
        if (userData[8] !== "") {
          setGodina(userData[8]);
        }
        if (userData[9] !== "") {
          setStepen(userData[9]);
        }
        if (userData[10] !== "") {
          setPol(userData[10]);
        }
        if (userData[11] !== "") {
          setImage(null);
          setPreview(userData[11]);
        }
        if (userData[12] !== "") {
          setPusac(userData[12]);
        }
        if (userData[13] !== "") {
          setMuzika(userData[13]);
        }
        if (userData[14] !== "") {
          setPauza(userData[14]);
        }
        if (userData[15] !== "") {
          setMesto(userData[15]);
        }
        if (userData[16] !== "") {
          setOnline(userData[16]);
        }
        if (userData[17] !== "") {
          setGrupa(userData[17]);
        }
        if (userData[19] !== "") {
          setUni(userData[19]);
        }
      })
      .catch((error) => {
        setAlert(error);
        var x = document.getElementById("myDIVe");
        x.style.display = "block";
      });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    if (pass === checkPass) {
      e.preventDefault();
      const data = {
        KorisnickoIme: UserProfile.getUser("user_name"),
        Ime: name,
        Prezime: lastname,
        Email: email,
        Lozinka: pass,
        IdSmera: parseInt(smer, 10),
        IdUniverziteta: parseInt(uni, 10),
        Godina: god,
        Pol: pol,
        Stepen: stepen,
        Slika: preview,
        Pusac: pusac,
        Muzika: muzika,
        Pauze: pauza,
        ObezbedjenoMesto: mesto,
        Online: online,
        ViseLjudi: grupa,
      };

      const url = "https://localhost:44357/api/Fin/ProfileSetUp2";
      axios
        .post(url, data)
        .then((result) => {
          if (result.data === "Унос успешан") {
            setAlert(result.data);
            var x = document.getElementById("myDIVs");
            x.style.display = "block";
          }
        })
        .catch((error) => {
          setAlert(error);
          var x = document.getElementById("myDIVe");
          x.style.display = "block";
        });
    } else {
      setAlert("Лозинке се не поклапају");
      var x = document.getElementById("myDIVe");
      x.style.display = "block";
    }
  };

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
    <div className="App">
      <div className="profil-main">
        <h2>Профил</h2>

        <div class="alert" id="myDIVe" style={{display: "none"}}>
          <span class="closebtn">&times;</span>  
          <strong>Упс!</strong> {alertText}
        </div>

        <div class="alert success" id="myDIVs" style={{display: "none"}}>
          <span class="closebtn">&times;</span>  
          <strong>Одлично!</strong> {alertText}
        </div>

        <form name="profil" className="profile-edit" id="profil" onSubmit={handleSubmit} >

          {preview ? (
            <img
              class="image-preview"
              onClick={() => {
                setImage(null);
              }}
              src={preview}
              alt={name}
            />
          ) : (
            <div class="image-upload">
              <label for="file-input">
                <img src="https://icons.iconarchive.com/icons/bokehlicia/captiva/128/multimedia-photo-manager-icon.png" alt="upload" />
              </label>
              <input
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substring(0, 5) === "image") {
                    setImage(file);
                  } else {
                    setImage(null);
                  }
                }}
                id="file-input"
                type="file"
              />
            </div>
          )}

          <div className="inputBox">
            <label htmlFor="name">Име</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Унесите Ваше име"
              id="name"
              name="name"
            />
          </div>

          <div className="inputBox">
            <label htmlFor="lastname">Презиме</label>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Унесите Ваше презиме"
              id="lastname"
              name="lastname"
            />
          </div>

          <div className="inputBox">
            <label htmlFor="pol">Пол</label>
            <select
              value={pol}
              onChange={(e) => setPol(e.target.value)}
              placeholder=""
              id="pol"
              name="pol"
            >
              <option value="" disabled selected hidden>
                Пол
              </option>
              <option value="M">Mушки</option>
              <option value="Z">Женски</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="email">Е-маил</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="vasmail@fink.com"
              id="email"
              name="email"
            />
          </div>

          <div className="inputBox">
            <label htmlFor="uni" className="labele">
              Универзитет
            </label>
            <select
              value={uni}
              onChange={(e) => setUni(e.target.value)}
              placeholder="Изаберите Ваш универзитет"
              id="uni"
              name="uni"
            >
              <option value="" disabled selected hidden>
                Изаберите Ваш универзитет
              </option>
              <option value="1">Универзитет у Крагујевцу</option>
              <option value="nes">Нешто друго из базе...</option>
              <option value="nes">Нешто друго из базе...</option>
              <option value="nes">Нешто друго из базе...</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="stepen">Степен</label>
            <select
              value={stepen}
              onChange={(e) => setStepen(e.target.value)}
              id="stepen"
              name="stepen"
            >
              <option value="" disabled selected hidden>
                Степен студија
              </option>
              <option value="vis">Високе струковне студије</option>
              <option value="oas">Основне академске студије</option>
              <option value="mas">Мастер студије</option>
              <option value="dok">Докторске студије</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="smer">Смер</label>
            <select
              input
              value={smer}
              onChange={(e) => setSmer(e.target.value)}
              placeholder="Изаберите Ваш смер"
              id="smer"
              name="smer"
            >
              <option value="" disabled selected hidden>
                Изаберите Ваш смер
              </option>
              <option value="1">
                Рачунарска техника и софтверско инжењерство
              </option>
              <option value="nes">Нешто друго из базе...</option>
              <option value="nes">Нешто друго из базе...</option>
              <option value="nes">Нешто друго из базе...</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="god">Година студија:</label>
            <input
              value={god}
              onChange={(e) => setGodina(e.target.value)}
              placeholder="Унесите годину"
              id="god"
              name="god"
            />
          </div>

          <div className="inputBox">
            <label htmlFor="pusac">Пушач</label>
            <select
              value={pusac}
              onChange={(e) => setPusac(e.target.value)}
              id="pusac"
              name="pusac"
            >
              <option value="" disabled selected hidden>
                Да ли вам смета дувански дим?
              </option>
              <option value="Ne">Не</option>
              <option value="Da">Да</option>
            </select>

            <label htmlFor="muzika">Музика</label>
            <select
              value={muzika}
              onChange={(e) => setMuzika(e.target.value)}
              id="muzika"
              name="muzika"
            >
              <option value="" disabled selected hidden>
                Да ли вам смета музика док учите?
              </option>
              <option value="Ne">Не</option>
              <option value="Da">Да</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="mesto">Место</label>
            <select
              value={mesto}
              onChange={(e) => setMesto(e.target.value)}
              id="mesto"
              name="mesto"
            >
              <option value="" disabled selected hidden>
                Да ли имате место за учење?
              </option>
              <option value="Ne">Не</option>
              <option value="Da">Да</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="online">Уживо или онлајн?</label>
            <select
              value={online}
              onChange={(e) => setOnline(e.target.value)}
              id="online"
              name="online"
            >
              <option value="" disabled selected hidden>
                Како преферирате да учите?
              </option>
              <option value="1">Уживо</option>
              <option value="2">Онлајн</option>
              <option value="3">Хибридно (уживо и онлајн)</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="pauza">Пауза</label>
            <select
              value={pauza}
              onChange={(e) => setPauza(e.target.value)}
              id="pauza"
              name="pauza"
            >
              <option value="" disabled selected hidden>
                Да ли правите паузе током учења?
              </option>
              <option value="Ne">Не</option>
              <option value="Da">Да</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="grupa">Група</label>
            <select
              value={grupa}
              onChange={(e) => setGrupa(e.target.value)}
              id="grupa"
              name="grupa"
            >
              <option value="" disabled selected hidden>
                Да ли учите у већим групама?
              </option>
              <option value="Ne">Не</option>
              <option value="Da">Да</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="password">Промените лозинку</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>

          <div className="inputBox">
            <label htmlFor="checkPass">Потврдите лозинку</label>
            <input
              value={checkPass}
              onChange={(e) => setCheckPass(e.target.value)}
              type="password"
              placeholder="********"
              id="checkPass"
              name="checkPass"
            />
          </div>
          
        </form>
        <button className="profil-dugme" type="submit" form="profil">
          Потврди
        </button>

        <button className="profil-dugme-nazad" onClick={() => navigate(-2)}>
          Назад
        </button>
      </div>
    </div>
  );
};
