import React ,{Component} from 'react';
import CardList from './components/card/card-list.components';
import Search from './components/search-box.component/search'
import './App.css'


class App extends Component{
  constructor(){
    super();
    this.state = {
     monsters:[],
     searchField:''
    }
    // this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
 
  handleChange = e =>{
  this.setState({searchField:e.target.value})
  }


render(){
  const {monsters,searchField} =this.state;
  const filterMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
  return(
    <div className='main'>
      <h2 className='textarea'>Monsters Rolodex</h2>
       <Search placeholder={'serach Monsters'} 
       handleChange={this.handleChange}/>
        <CardList monsters={filterMonsters}/>
     
    
    </div>
  )
}
}

export default App;