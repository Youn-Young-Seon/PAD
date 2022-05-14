import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from './join.module.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { ValidationCheck } from "./validationCheck";
// import { go } from "fxjs";
// import * as L from "fxjs/Lazy";


export function Join(){
    
    const [idValid, setIdValid] = useState([]);
    const [validIdIcon, setValidIdIcon] = useState();
    const [validEmailIcon, setValidEmailIcon] = useState();

    useEffect(() => {
        const getAlluser = async () => {
            const response = await axios.get('/api/allUser');
            setIdValid(response.data);            
        }
        getAlluser();
    }, [])

    
    const idCheck = (e) => {        
        const inputText = e.target.value;
        if(inputText.length < 4) return setValidIdIcon('moreThanThree')
        for(const userId of idValid){
            if(inputText === userId){
                return setValidIdIcon('overlapping')
            }
        }
        return setValidIdIcon('valid');
    }    

    const emailCheck = (e) => {        
        const inputText = e.target.value;
        if(inputText.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)){
            return setValidEmailIcon('valid');
        }
        return setValidEmailIcon('notEmail');
    }

    const submitCheck = (e) => {        
        return (validIdIcon === 'valid' && validEmailIcon === 'valid') ? 
        true : 
        e.preventDefault();
    }

    return(
        <div className={ styles.join }>
            <div className={ styles.title }>
                <h1>J O I N</h1>
            </div>
            <div className={ styles.container }>
                <div className={ styles.loginContainer }>
                    <form onSubmit={ submitCheck } action="/api/join" method="POST">
                        <div className={ styles.inputBox }>
                            <span className={ styles.fontSpan }><FontAwesomeIcon icon={ faUser } /></span>
                            <input type="text" name="userId" onChange={ idCheck } placeholder='ID' />
                        </div>
                        <ValidationCheck 
                            vaildIcon={ validIdIcon } 
                            validText={{ 'moreThanThree': 'ID는 4자 이상이여야 합니다.', 'overlapping': '아이디 중복입니다.' }}
                        />
                        <div className={ styles.inputBox }>
                            <span className={ styles.fontSpan }><FontAwesomeIcon icon={ faKey } /></span>
                            <input type="password" name="password" placeholder='PW' />
                        </div>
                        {/* <ValidationCheck /> */}
                        <div className={ styles.inputBox }>
                            <span className={ styles.fontSpan }><FontAwesomeIcon icon={ faEnvelope } /></span>
                            <input type="email" name="eMail" onChange={ emailCheck } placeholder='e-mail' />
                        </div>
                        <ValidationCheck 
                            vaildIcon={ validEmailIcon }
                            validText={{ 'notEmail': '이메일 형식에 맞지 않습니다.' }}
                        />
                        <div className={ styles.btnBox }>
                            <button type="submit" className={ styles.joinBtn }>SIGN UP</button>
                            <Link to="/login">
                                <button 
                                    type="button"
                                    className={ styles.loginBtn }>LOGIN
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}