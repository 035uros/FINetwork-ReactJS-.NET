import React, {useState, useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export const ProfileSetUp = () => {
    const [searchparam] = useSearchParams();
    let navigate = useNavigate ();
    if(searchparam.get("authorized") != "true"){
        navigate({
            pathname: "/login"
          });
    }
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [checkPass, setCheckPass] = useState('');
    const [uni, setUni] = useState('');
    const [smer, setSmer] = useState('');
    const [god, setGodina] = useState('');
    const [stepen, setStepen] = useState('');
    const [pusac, setPusac] = useState('');
    const [muzika, setMuzika] = useState('');
    const [grupa, setGrupa] = useState('');
    const [pauza, setPauza] = useState('');
    const [mesto, setMesto] = useState('');
    const [online, setOnline] = useState('');
    const [pol, setPol] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(()=> {
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        }else{
            setPreview(null);
        }
    }, [image]);

    function getData() {
        const data = {
            KorisnickoIme: searchparam.get("kime")
        };
        const url ='https://localhost:44357/api/Fin/ProfileSetUp';
            axios.post(url, data).then((result)=>{
                const userData = result.data.split(" ");
                setName(userData[3]);
                setLastname(userData[4]);
                setEmail(userData[5]);
                setPass(userData[6]);
                setCheckPass(userData[6]);
                if(userData[7] != ''){
                    setSmer(userData[7]);
                }
                if(userData[8] != ''){
                    setGodina(userData[8]);
                }
                if(userData[9] != ''){
                    setStepen(userData[9]);
                }
                if(userData[10] != ''){
                    setPol(userData[10]);
                }
                if(userData[11] != ''){
                    setImage(null);
                    setPreview(userData[11]);
                }
                if(userData[12] != ''){
                    setPusac(userData[12]);
                }
                if(userData[13] != ''){
                    setMuzika(userData[13]);
                }
                if(userData[14] != ''){
                    setPauza(userData[14]);
                }
                if(userData[15] != ''){
                    setMesto(userData[15]);
                }
                if(userData[16] != ''){
                    setOnline(userData[16]);
                }
                if(userData[17] != ''){
                    setGrupa(userData[17]);
                }
                if(userData[19] != ''){
                    setUni(userData[19]);
                }

            }).catch((error)=>{
                alert(error);
            })
        }
    
        useEffect(() => {
            getData();
          }, []);


    const handleSubmit = (e) => { 
        if(pass==checkPass){
            e.preventDefault();
            console.log(uni);
            const data = {
                KorisnickoIme:searchparam.get("kime"),
                Ime: name,
                Prezime: lastname,
                Email: email,
                Lozinka: pass,
                IdSmera: smer,
                IdUniverziteta: parseInt(uni, 10),
                Godina: parseInt(god, 10),
                Pol: pol,
                Stepen: stepen,
                Slika: preview,
                Pusac: pusac,
                Muzika: muzika,
                Pauze: pauza,
                ObezbedjenoMesto: mesto,
                Online: parseInt(online, 10),
                ViseLjudi: grupa

            };

            const url ='https://localhost:44357/api/Fin/ProfileSetUp2';
            axios.post(url, data).then((result)=>{
                if(result.data == 'Унос успешан'){
                    alert(result.data);
                }
            }).catch((error)=>{
                alert(error);
            })
        }else{
            alert("Лозинке се не поклапају");
            }   
        }

    return(
        <div className="App">
        <div className="profil-main"> 
        <h2>Профил</h2> 
        <form name="profil" className="profile-edit" id="profil" onSubmit={handleSubmit}>
        
        {preview ? (<img class="image-preview" onClick={() => {setImage(null)}} src={preview} />) :(
            <div class="image-upload">
                <label for="file-input">
                    <img src="https://icons.iconarchive.com/icons/bokehlicia/captiva/128/multimedia-photo-manager-icon.png"/>
                </label>
                <input accept="image/*" onChange ={(e) =>{
                    const file = e.target.files[0];
                    if(file && file.type.substring(0, 5) === "image"){
                        setImage(file);
                    } else{setImage(null);}
                    }} id="file-input" type="file" />
            </div>)}

            <label htmlFor="name">Име</label>
            <input value ={name} onChange ={(e) => setName(e.target.value)}placeholder="Унесите Ваше име" id="name" name="name"/>

            <label htmlFor="lastname">Презиме</label>
            <input value ={lastname} onChange ={(e) => setLastname(e.target.value)}placeholder="Унесите Ваше презиме" id="lastname" name="lastname"/>

            <label htmlFor="pol">Пол</label>
            <select  value ={pol} onChange ={(e) => setPol(e.target.value)}placeholder="" id="pol" name="pol">
                <option value="" disabled selected hidden>Пол</option>
                <option value="M">Mушки</option>
                <option value="Z">Женски</option>
            </select>

            <label htmlFor="email">Е-маил</label>
            <input value ={email} onChange ={(e) => setEmail(e.target.value)}type="email" placeholder="vasmail@fink.com" id="email" name="email"/>


            <label htmlFor="uni" className="labele">Универзитет</label><br/><br/><br/><br/>
            <select value ={uni} onChange ={(e) => setUni(e.target.value)} placeholder="Изаберите Ваш универзитет" id="uni" name="uni">
                <option value="" disabled selected hidden>Изаберите Ваш универзитет</option>
                <option value="1">Универзитет у Крагујевцу</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
            </select>

            <label htmlFor="stepen">Степен</label>
            <select value ={stepen} onChange ={(e) => setStepen(e.target.value)} id="stepen" name="stepen">
                <option value="" disabled selected hidden>Степен студија</option>
                <option value="vis">Високе струковне студије</option>
                <option value="oas">Основне академске студије</option>
                <option value="mas">Мастер студије</option>
                <option value="dok">Докторске студије</option>
            </select>

            <label htmlFor="smer">Смер</label>
            <select input value ={smer} onChange ={(e) => setSmer(e.target.value)} placeholder="Изаберите Ваш смер" id="smer" name="smer">
                <option value="" disabled selected hidden>Изаберите Ваш смер</option>
                <option value="rtsi">Рачунарска техника и софтверско инжењерство</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
            </select>

            <label htmlFor="god">Година студија:</label>
            <input value ={god} onChange ={(e) => setGodina(e.target.value)} placeholder="Унесите годину" id="god" name="god"/>

            <label htmlFor="pusac">Пушач</label>
            <select  value ={pusac} onChange ={(e) => setPusac(e.target.value)} id="pusac" name="pusac">
                <option value="" disabled selected hidden>Да ли вам смета дувански дим?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            <label htmlFor="muzika">Музика</label>
            <select  value ={muzika} onChange ={(e) => setMuzika(e.target.value)} id="muzika" name="muzika">
                <option value="" disabled selected hidden>Да ли вам смета музика док учите?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            
            <label htmlFor="mesto">Место</label>
            <select  value ={mesto} onChange ={(e) => setMesto(e.target.value)} id="mesto" name="mesto">
                <option value="" disabled selected hidden>Да ли имате место за учење?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            <label htmlFor="online">Уживо или онлајн?</label>
            <select  value ={online} onChange ={(e) => setOnline(e.target.value)} id="online" name="online">
                <option value="" disabled selected hidden>Како преферирате да учите?</option>
                <option value="1">Уживо</option>
                <option value="2">Онлајн</option>
                <option value="3">Хибридно (уживо и онлајн)</option>
            </select>

            <label htmlFor="pauza">Пауза</label>
            <select  value ={pauza} onChange ={(e) => setPauza(e.target.value)} id="pauza" name="pauza">
                <option value="" disabled selected hidden>Да ли правите паузе током учења?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            <label htmlFor="grupa">Група</label>
            <select  value ={grupa} onChange ={(e) => setGrupa(e.target.value)} id="grupa" name="grupa">
                <option value="" disabled selected hidden>Да ли учите у већим групама?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>
            
            <label htmlFor="password">Промените лозинку</label>
            <input value ={pass} onChange ={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>

            <label htmlFor="checkPass">Потврдите лозинку</label>
            <input value ={checkPass} onChange ={(e) => setCheckPass(e.target.value)}type="password" placeholder="********" id="checkPass" name="checkPass"/>

            
            
            
        </form>
        <button className="profil-dugme" type="submit" form="profil">Потврди</button>
        </div>
        </div>
    )
}

/*  <label htmlFor="uni">Универзитет</label>
            <input value ={uni} onChange ={(e) => setUni(e.target.value)} placeholder="Изаберите Ваш универзитет" id="uni" name="uni"/>

            <label htmlFor="smer">Смер</label>
            <input value ={smer} onChange ={(e) => setSmer(e.target.value)} placeholder="Изаберите Ваш смер" id="smer" name="smer"/>





<img src="https://icons.iconarchive.com/icons/bokehlicia/captiva/128/multimedia-photo-manager-icon.png"/>
            
             */