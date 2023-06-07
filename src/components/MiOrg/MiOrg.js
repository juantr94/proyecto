import styles from './miorg.module.css';

const MiOrg = (props) => {
    return <section className={styles.miorg_section} >
        <h3 className={styles.miorg_title}>Mi Organización</h3>
        <img src='./img/addButton.png' alt='addButton' onClick={props.switchDisplay}/>
    </section>
}

export default MiOrg;