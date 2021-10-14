import react from "react";
import Card from '../cardcomponent/card.component'
import './cardlist.css'

const CardList = (props) =>{
    return(
    <div className='card-list'>
         {/* {
         props.monsters.map(monster => (
         <Card key={monster.id} monster={monster}></Card>
       ))
     } */}
     {
       props.monsters.map(monster =>(
         <Card key={monster.id} monster={monster}/>
       ))
     }
    </div>
    )
}

export default CardList