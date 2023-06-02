import styles from './OptionList.module.css';

function OptionList(){

    const teams=[
        "Programación",
        "Frontend",
        "Backend",
        "Data Science",
        "DevOps"
    ]

    return <section className={styles.option_list}>
            <label>Especialidad</label>
                <select>
                  {teams.map((team, index)=> <option key={index} >{team}</option>)}        
                </select>
           </section>
}

export default OptionList;