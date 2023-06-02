import styles from './TextField.module.css'

function TextField(props){
    return <div className={styles.text_field}>  
                <label>{props.title}</label>      
                <input placeholder={props.placeholder}/>
           </div>    
}
export default TextField;