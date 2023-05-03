
import { useState } from 'react';
import './App.css';
import Wellcome from './Wellcome';
import Login from './Login';
import { users } from './users';

function App() {
  let[isLoggodIn,setIsLoggedIn] = useState(false);
  let[user,setUser] = useState({});
 
  let[newUser,setNewUser] = useState({name:'',username:''});
  function handleChange(e) {
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
          {isLoggodIn ? <Wellcome fullname={user.fullName}/> : <Login user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} users={users}/>}
    </div>
  )

}

export default App;
