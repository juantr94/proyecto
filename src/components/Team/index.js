import styles from './Team.module.css'

function Team(props) {
    
     const {title, primaryColor, secondaryColor} = props.dat;

     const bgColor={
        backgroundColor:secondaryColor
     }

    return <section className={styles.team_section} style={bgColor}>
        <h3 style={{borderColor: primaryColor}} >{title}</h3> 
    </section>
}

export default Team;