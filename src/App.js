import './App.css';
import axios from "axios";
import React, {useState} from 'react'
import User from './components/User';
import Repositories from './components/Repositories';

function App() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState('');


  function handleForm(e){
    e.preventDefault()

    axios.get(`https://api.github.com/users/${search}?client_id=b80b67be6bc8a01deaa0&client_secret=2d3c0aa04015dda9b4a3acafe607ddf04ed2d956&sort=created`)
      .then(result => {
        setUser(result.data)

      })
      .catch(err => console.log(err))    
  }

  return (
    <div className="App">
      <h5>Github Profiles</h5>
      <form onSubmit={handleForm}>
        <input type='text' onChange={e=> setSearch(e.target.value)} value={search}/>
        <button type='submit'>Search User</button>
      </form>
      {user !== '' ?
      <div>
        <User user={user}/>
        <Repositories search={search}/>
      </div> 
      : null }
    </div>
  );
}

export default App;
