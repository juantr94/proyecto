import styles from './Forms.module.css';
import TextField from '../TextField/TextField';
import OptionList from '../OptionList/OptionList';
import Button from '../Button/Button';
import { useState } from 'react';

function Forms(){

    const eventHandler = (event) => {
        event.preventDefault();
        let newUser ={
            username,
            userpost,
            userpic,
            userteam
        }
        console.log(newUser);
    }

    const [username, setUsername]=useState("");
    const [userpost, setUserpost]=useState("");
    const [userpic, setUserpic]=useState("");
    const [userteam, setUserteam]=useState("");    

    return <section className={styles.forms_container}>
                <form onSubmit={eventHandler} >
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <TextField title='Nombre' 
                               placeholder='Ingresa tu nombre' 
                               required
                               val={username}
                               updateValue={setUsername}                               
                    />
                    <TextField title='Cargo' 
                               placeholder='Ingresa tu cargo'  
                               required
                               val={userpost}
                               updateValue={setUserpost} 
                    />
                    <TextField title='Foto' 
                               placeholder='Ingresa tu foto' 
                               required
                               val={userpic}
                               updateValue={setUserpic} 
                    />
                    <OptionList val={userteam}
                                updateValue={setUserteam}
                    />
                    <Button text='Crear' />                    
                </form>
           </section>
}

export default Forms;