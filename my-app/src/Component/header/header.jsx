import styles from './header.module.css';

function Header({ setLoginCheck }) {
  
    const onClick = (path) => () => setLoginCheck(path);
    console.log('헤더');

    return (
      <div className={ styles.header }>
        <div className={ styles.container }>
          <h1 onClick={ onClick('/') }>Stock</h1>
          <div onClick={ onClick('/login') } className={styles.login}>
            Login
          </div>
        </div>
        <hr />
      </div>
    )
}

export { Header }