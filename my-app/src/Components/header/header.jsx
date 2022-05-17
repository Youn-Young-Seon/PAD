import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Header({ loginData, setLoginData }) {
  
  const logout = (e) => {    
    axios.post('/api/logout').then(() => setLoginData({}));
  }

    return (
      <div className={ styles.header }>
        <div className={ styles.container }>
          <Link to="/">
            <h1>Stock</h1>
          </Link>
          { loginData.success ?             
            <div className={styles.login}><FontAwesomeIcon icon={ faCircleInfo }/>{ loginData.user }님 환영해요. 
              <div onClick={ logout }>Logout</div>
            </div> :
            <Link to="/login">
              <div className={styles.login}>Login</div>
            </Link>
          }
        </div>
        <hr />        
      </div>
    )
}

export { Header }