import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from './myPage.module.css';
import { useState } from "react";

export function MyPage(logout){

    const [myPageDisp, setMyPageDisp] = useState(false);
    const myPageModal = () => setMyPageDisp(!myPageDisp);

    return(
            <div className={ styles.myPage }>
                <div className={ styles.myPageIcon }>
                    <FontAwesomeIcon icon={ faCircleInfo } onClick={ myPageModal }/>
                </div>
                { myPageDisp ? 
                    <div className={ styles.myPageBox } >
                        <div className={ styles.logout } onClick={ logout }>
                            <FontAwesomeIcon icon={ faArrowRightFromBracket } /> Logout
                        </div>
                    </div> : 
                    <div></div>
                }
            </div> 
    )    
}