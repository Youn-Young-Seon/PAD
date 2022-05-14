import styles from './menu.module.css';

export function Menu(){

    return(
        <div className={styles.menu}>
            <div className={styles.label}>Label</div>
            <div className={styles.list}>menu_list</div>
            <div className={styles.list}>menu_list</div>
            <div className={styles.list}>menu_list</div>
            <div className={styles.list}>menu_list</div>
            <div className={styles.list}>menu_list</div>        
            <hr />
        </div>
    )
}