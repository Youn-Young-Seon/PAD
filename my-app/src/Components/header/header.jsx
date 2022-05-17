import styles from './header.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MyPage } from './myPage/myPage';


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
            <MyPage logout={ logout }/> :
            <Link to="/login">
              <div className={ styles.login }>Login</div>
            </Link>
          }
        </div>
        <hr />        
      </div>
    )
}

export { Header }