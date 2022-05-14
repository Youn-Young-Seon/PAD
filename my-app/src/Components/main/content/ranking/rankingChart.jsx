import styles from './ranking.module.css';

export function RankingChart() {
    return(
        <div className={ styles.chartBox }>
            <div className={ styles.chart }>
                <div className={ styles.chartTitle }>주식 이름</div>
                <div className={ styles.chartContent }>
                    <div className={ styles.chartSVG }>                                
                        <svg width="150" height="150">
                            <circle fill='#282e39' cx='75' cy="75" r="75"></circle>
                            <circle className={ styles.chartGauge } fill='#2f3542' cx='75' cy="75" r="60"
                                stroke='teal'
                                strokeWidth='30'
                                strokeDasharray='377'
                                strokeDashoffset='377'                                        
                            />
                            <circle fill='#2f3542' cx='75' cy="75" r="60"></circle>
                            <text x='75' y='55%' textAnchor='middle' fontSize='32' fill='teal'>100%</text>
                        </svg>                                
                    </div>
                    <div className={ styles.chartDetail }>
                        <div className={ styles.chartPrice }>1주 가격</div>
                        <div className={ styles.chartDvdn }>1주당 배당금</div>
                        <div className={ styles.chartTerm }>배당 주기</div>
                        <div className={ styles.chartKcd }>증권종목종류(우선, 보통 등)</div>
                    </div>
                </div>
            </div>     
        </div>
    )
}