import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import styles from './validationCheck.module.css';

export function ValidationCheck({ vaildIcon, validText }){
    return(
        <div className={ styles.validCheck }>
            {
                (vaildIcon === undefined) ? 
                    <div></div> : 
                (vaildIcon === 'moreThanThree') ?
                    <div> <FontAwesomeIcon className={ styles.red } icon={ faCircleCheck } /> { validText.moreThanThree } </div> :
                (vaildIcon === 'overlapping') ?
                    <div> <FontAwesomeIcon className={ styles.red } icon={ faCircleCheck } /> { validText.overlapping } </div> :
                (vaildIcon === 'notEmail') ?                    
                    <div> <FontAwesomeIcon className={ styles.red } icon={ faCircleCheck } /> { validText.notEmail } </div> :
                    <div> <FontAwesomeIcon className={ styles.teal } icon={ faCircleCheck } /> 체크 완료. </div> 
            }
        </div>
    )    
}