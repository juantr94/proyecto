import styles from './TextField.module.css'

function TextField(props){

    const valueChange = (e)=>{
        props.updateValue(e.target.value);
    }

    return <div className={styles.text_field}>  
                <label>{props.title}</label>      
                <input placeholder={props.placeholder} 
                       required={props.required} 
                       onChange={valueChange}
                       value={props.val}
                />
           </div>    
}
export default TextField;