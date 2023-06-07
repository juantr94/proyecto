import styles from './OptionList.module.css';

function OptionList(props){

    const valueChange = (e) =>{
      props.updateValue(e.target.value);
    }

    const teams=[
        "Programación",
        "Frontend",
        "UX y Diseño",
        "Data Science",
        "DevOps"
    ]

    return <section className={styles.option_list}>
            <label>Especialidad</label>
                <select value={props.val} onChange={valueChange} >
                  <option value="" disabled defaultValue="" hidden>Selecciona un equipo</option>
                  {teams.map((team, index)=> <option key={index} >{team}</option>)}        
                </select>
           </section>
}

export default OptionList;