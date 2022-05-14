import styles from './ranking.module.css';
import { RankingChart } from './rankingChart';


export function Ranking(){
    return(
        <div>
            <div className={ styles.title }>배당 TOP 5</div>
            <div className={ styles.chartContainer }>
                <RankingChart/>
                <RankingChart/>
                <RankingChart/>
                <RankingChart/>
                <RankingChart/>
            </div>
        </div>
    )
}