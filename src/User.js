import React, {useEffect, useState} from "react";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash} from 'react-icons/fa';

export default function User(props) {
    const [repeatPassword, setRepeatPassword] = useState(true);
    const [choosePassword, setchoosePassword] = useState(true);
    const [inputEmail, setInputEmail] = useState("");
    const [inputEmailBool, setInputEmailBool] = useState(null);
    const [checkChoosePassword, setCheckChoosePassword] = useState("");
    const [checkChoosePasswordBool, setCheckChoosePasswordBool] = useState(null);
    const [checkRepeatPassword, setCheckRepeatPassword] = useState("");
    const [checkRepeatPasswordBool, setCheckRepeatPasswordBool] = useState(null);
    const [checkedConsent, setCheckedConsent] = useState(false);
    const [checkedNews, setCheckedNews] = useState(false);

    function handleChangeNews(e) {
        let checked = e.target.checked;
        if (checked === true) {
            setCheckedConsent(true);
        } else {
            setCheckedConsent(false);
        }
    }

    function handleChangeConsent(e) {
        let checked = e.target.checked;
        if (checked === true) {
            setCheckedNews(true);
        } else {
            setCheckedNews(false);
        }    
    }

    function toggleChoosePassword() {
        setchoosePassword(!choosePassword);
    }
    
    function toggleRepeatPassword() {
        setRepeatPassword(!repeatPassword);
    }

    if (inputEmailBool === true && checkRepeatPasswordBool === true && checkChoosePasswordBool === true 
        && checkedConsent === true && checkedNews === true) {
        props.setWelcomeToDistancify(true);
    } else {
        props.setWelcomeToDistancify(false);
    }
    
    useEffect(() => {
        if (inputEmail.includes("@gmail.com") && inputEmail.length > 10 
            || inputEmail.includes("@yahoo.com") && inputEmail.length > 10) {
            setInputEmailBool(true);
        } else {
            setInputEmailBool(false);
        }
    }, [inputEmail]);

    useEffect(() => {
        if (checkChoosePassword !== "" && checkChoosePassword.length > 4) {
            setCheckChoosePasswordBool(true);
            setCheckRepeatPasswordBool(false);
        } else {
            setCheckChoosePasswordBool(false);
        }
    }, [checkChoosePassword]);

    useEffect(() => {
        if (checkRepeatPassword === checkChoosePassword && checkChoosePassword !== "") {
            setCheckRepeatPasswordBool(true);
        } else {
            setCheckRepeatPasswordBool(false);
        }
    }, [checkRepeatPassword, checkChoosePassword]);

    return (
        <div>
            <div className="user">
                <p>E-mail</p>
                <input
                    onChange={e => setInputEmail(e.target.value)}
                    value={inputEmail} 
                    className={inputEmailBool ? "checkedField" : "emailField"}
                    type="text"
                />
                <div>
                <p>
                    Choose password
                    <span className="passwordEye">
                        {choosePassword ? 
                            <FaEyeSlash onClick={toggleChoosePassword}/> : 
                            <FaEye onClick={toggleChoosePassword}/>
                        }
                    </span>
                </p>
                <input  
                    onChange={e => setCheckChoosePassword(e.target.value)}
                    type={choosePassword ? "password" : "text"} 
                    className={checkChoosePasswordBool ? "checkedField" : "passwordField"} 
                    placeholder="It'll be our secret" 
                    required
                />
                </div>
                <p>
                    Repeat password
                    <span className="passwordEye">
                        {repeatPassword ? 
                            <FaEyeSlash onClick={toggleRepeatPassword}/> : 
                            <FaEye onClick={toggleRepeatPassword}/>
                        }
                    </span>
                </p>
                <input 
                    onChange={e => setCheckRepeatPassword(e.target.value)}
                    type={repeatPassword ? "password" : "text"} 
                    className={checkRepeatPasswordBool ? "checkedField" : "passwordField"} 
                />
            </div>
            <div className="checkBox">
                <div>
                    <label className="checkBox"> 
                        <input  type="checkbox" onChange={handleChangeConsent} />
                        I consent to the <a href="#">Privacy Policy</a> & <a href="#">Terms and Service</a>.
                    </label>
                </div>
                <div>
                    <label className="checkBox"> 
                        <input  type="checkbox" onChange={handleChangeNews} />
                        I want to receive stories for trends, inspiration, interior design tips and to be the first to learn about new products & campaigns.
                    </label>
                </div>
            </div>
            <div>
                <button>Sign up</button>
            </div>
        </div>
    )
}