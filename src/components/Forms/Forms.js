import styles from './Forms.module.css';
import TextField from '../TextField/TextField';
import OptionList from '../OptionList/OptionList';

function Forms(){
    return <section className={styles.forms_container}>
                <form>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <TextField title='Nombre' placeholder='Ingresa tu nombre'/>
                    <TextField title='Cargo' placeholder='Ingresa tu cargo'/>
                    <TextField title='Foto' placeholder='Ingresa tu foto'/>
                    <OptionList/>
                    
                </form>
           </section>
}

export default Forms