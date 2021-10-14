import react from "react";
import './card.css'

const Card = (props) =>{
    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} className='robo' alt='monster'/>
         <h4 style={{textAlign:'center',color:'black'}}>{props.monster.name}</h4>
         <p style={{textAlign:'center',color:'black'}}>{props.monster.email}</p>
        </div>
    )
}

export default Card