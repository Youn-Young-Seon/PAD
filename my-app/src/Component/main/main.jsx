import styles from './main.module.css';
import { Menu } from './menu/menu';
import { Represent } from './content/represent'

export function Main() {
  console.log('메인');
    return (
      <div className={styles.main}>
        <div className={styles.nav}>
          <Menu/>          
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <Represent/>
          </div>
        </div>
      </div>
    )
}