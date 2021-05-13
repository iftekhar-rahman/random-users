import { useEffect, useState } from 'react';
import './App.css';
import User from './User/User';
import UserDetail from './UserDetail/UserDetail';

function App() {

  const [users, setUsers] = useState([]);
  // console.log(users);

  useEffect(() => {
    const url = `https://randomuser.me/api/?results=15`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data.results));
  },[])

  const [teams, setTeams] = useState([]);
  const addMember = (name) => {
    setTeams([...teams, name]);
  }

  return (
    <div className="content-area">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
              <h2>Team Builder</h2>
              <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 pt-5 pb-5">
            {
              users.map(user => <User user={user} addMember={addMember}></User>)
            }
          </div>
          <div className="col-lg-4 offset-lg-1  pt-5 pb-5">
            {
              teams.map(team => <UserDetail team={team}></UserDetail>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
