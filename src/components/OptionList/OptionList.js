import styles from './OptionList.module.css';

function OptionList(props){

    const valueChange = (e) =>{
      props.updateValue(e.target.value);
    }


    return <section className={styles.option_list}>
            <label>Especialidad</label>
                <select value={props.val} onChange={valueChange} >
                  <option value="" disabled defaultValue="" hidden>Selecciona un equipo</option>
                  {props.teams.map((equip, index) => <option key={index} >{equip}</option>)}        
                </select>
           </section>
}

export default OptionList;