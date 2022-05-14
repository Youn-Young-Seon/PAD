import styles from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {    
    console.log('헤더');

    return (
      <div className={ styles.header }>
        <div className={ styles.container }>
          <Link to="/">
            <h1>Stock</h1>
          </Link>
          <Link to="/login">
            <div className={styles.login}>Login</div>
          </Link>
        </div>
        <hr />        
      </div>
    )
}

export { Header }