import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import styles from './login.module.css';
import { Link } from "react-router-dom";

export function Login(){    

    console.log('로그인');
    return(
        <div className={ styles.login }>
            <div className={ styles.title }>
                <h1>S T O C K</h1>
            </div>
            <div className={ styles.container }>
                <div className={ styles.loginContainer }>
                    <form action="/login" method="POST">
                        <div className={ styles.inputBox }>
                            <span className={ styles.fontSpan }><FontAwesomeIcon icon={faUser} /></span>
                            <input type="text" placeholder='ID' />
                        </div>
                        <div className={ styles.inputBox }>
                            <span className={ styles.fontSpan }><FontAwesomeIcon icon={faKey} /></span>
                            <input type="password" placeholder='PW' />
                        </div>
                        <div className={ styles.btnBox }>
                            <button type="submit" className={ styles.loginBtn }>SIGN IN</button>
                            <Link to="/join">
                                <button 
                                    type="button"
                                    className={ styles.joinBtn }>JOIN
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}