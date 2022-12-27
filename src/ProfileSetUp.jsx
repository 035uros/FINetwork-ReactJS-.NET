import React, {useState} from "react";

export const ProfileSetUp = (props) => {
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
    const [slika, setSlika] = useState('');

    const handleSubmit = (e) => {        
            e.preventDefault();
            console.log(email);
        }

    return(
        
        <div className="profil-main"> 
        <h2>Профил</h2> 
        <form name="profil" className="profile-edit" id="profil" onSubmit={handleSubmit}>

            
            {/*<label htmlFor="slika">Профилна слика</label>*/}
            <div class="image-upload">
                <label for="file-input">
                    <img src="https://icons.iconarchive.com/icons/bokehlicia/captiva/128/multimedia-photo-manager-icon.png"/>
                </label>
                <input value ={slika} onChange ={(e) => setSlika(e.target.value)} id="file-input" type="file" />
            </div>

            {/*<label htmlFor="name">Име</label>*/}
            <input value ={name} onChange ={(e) => setName(e.target.value)}placeholder="Унесите Ваше име" id="name" name="name"/>

            {/*<label htmlFor="lastname">Презиме</label>*/}
            <input value ={lastname} onChange ={(e) => setLastname(e.target.value)}placeholder="Унесите Ваше презиме" id="lastname" name="lastname"/>

            {/*<label htmlFor="pol">Пол</label>*/}
            <select  value ={pol} onChange ={(e) => setPol(e.target.value)}placeholder="" id="pol" name="pol">
                <option value="" disabled selected hidden>Пол</option>
                <option value="M">Mушки</option>
                <option value="Z">Женски</option>
            </select>

            {/*<label htmlFor="email">Е-маил</label>*/}
            <input value ={email} onChange ={(e) => setEmail(e.target.value)}type="email" placeholder="vasmail@fink.com" id="email" name="email"/>

            {/*<label htmlFor="uni">Универзитет</label>*/}
            <select value ={uni} onChange ={(e) => setUni(e.target.value)} placeholder="Изаберите Ваш универзитет" id="uni" name="uni">
                <option value="" disabled selected hidden>Изаберите Ваш универзитет</option>
                <option value="Kg">Универзитет у Крагујевцу</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
            </select>

            {/*<label htmlFor="stepen">Степен</label>*/}
            <select value ={stepen} onChange ={(e) => setStepen(e.target.value)} id="stepen" name="stepen">
                <option value="" disabled selected hidden>Степен студија</option>
                <option value="vis">Високе струковне студије</option>
                <option value="oas">Основне академске студије</option>
                <option value="mas">Мастер студије</option>
                <option value="dok">Докторске студије</option>
            </select>

            {/*<label htmlFor="smer">Смер</label>*/}
            <select input value ={smer} onChange ={(e) => setSmer(e.target.value)} placeholder="Изаберите Ваш смер" id="smer" name="smer">
                <option value="" disabled selected hidden>Изаберите Ваш смер</option>
                <option value="rtsi">Рачунарска техника и софтверско инжењерство</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
                <option value="nes">Нешто друго из базе...</option>
            </select>

            {/*<label htmlFor="god">Година студија:</label>*/}
            <input value ={god} onChange ={(e) => setGodina(e.target.value)} placeholder="Унесите годину" id="god" name="god"/>

            {/*<label htmlFor="pusac">Пушач</label>*/}
            <select  value ={pusac} onChange ={(e) => setPusac(e.target.value)} id="pusac" name="pusac">
                <option value="" disabled selected hidden>Да ли вам смета дувански дим?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            {/*<label htmlFor="muzika">Музика</label>*/}
            <select  value ={muzika} onChange ={(e) => setMuzika(e.target.value)} id="muzika" name="muzika">
                <option value="" disabled selected hidden>Да ли вам смета музика док учите?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            {/*<label htmlFor="mesto">Место</label>*/}
            <select  value ={mesto} onChange ={(e) => setMesto(e.target.value)} id="mesto" name="mesto">
                <option value="" disabled selected hidden>Да ли имате место за учење?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            {/*<label htmlFor="online">Уживо или онлајн?</label>*/}
            <select  value ={online} onChange ={(e) => setOnline(e.target.value)} id="online" name="online">
                <option value="" disabled selected hidden>Како преферирате да учите?</option>
                <option value="Uzivo">Уживо</option>
                <option value="Online">Онлајн</option>
                <option value="Svj">Хибридно (уживо и онлајн)</option>
            </select>

            {/*<label htmlFor="pauza">Пауза</label>*/}
            <select  value ={pauza} onChange ={(e) => setPauza(e.target.value)} id="pauza" name="pauza">
                <option value="" disabled selected hidden>Да ли правите паузе током учења?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>

            {/*<label htmlFor="grupa">Група</label>*/}
            <select  value ={grupa} onChange ={(e) => setGrupa(e.target.value)} id="grupa" name="grupa">
                <option value="" disabled selected hidden>Да ли учите у већим групама?</option>
                <option value="Ne">Не</option>
                <option value="Da">Да</option>
            </select>
            
            {/*<label htmlFor="password">Промените лозинку</label>*/}
            <input value ={pass} onChange ={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>

            {/*<label htmlFor="checkPass">Потврдите лозинку</label>*/}
            <input value ={checkPass} onChange ={(e) => setCheckPass(e.target.value)}type="password" placeholder="********" id="checkPass" name="checkPass"/>

            
        </form>
        <button className="profil-dugme" type="submit" form="profil">Потврди</button>
        </div>
    )
}

/*  <label htmlFor="uni">Универзитет</label>
            <input value ={uni} onChange ={(e) => setUni(e.target.value)} placeholder="Изаберите Ваш универзитет" id="uni" name="uni"/>

            <label htmlFor="smer">Смер</label>
            <input value ={smer} onChange ={(e) => setSmer(e.target.value)} placeholder="Изаберите Ваш смер" id="smer" name="smer"/>
             */