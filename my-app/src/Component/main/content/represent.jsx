import styles from './represent.module.css';
import { Ranking } from './ranking/ranking';

export function Represent(){
    return(
        <div className={ styles.container }>
            <Ranking/>            
        </div>
    )
}