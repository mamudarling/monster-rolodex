import react from "react";

import './search.css'

const Search = ({placeholder,handleChange}) =>{
    return(
        <div>
            <input 
         className='text'
       onChange={handleChange} 
       type='search'
        placeholder={placeholder}/>
      
        </div>
    )
}

export default Search