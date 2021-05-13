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

  const [userInfo, setUserInfo] = useState([]);
  const addMember = (name) => {
    setUserInfo(name);
  }

  return (
    <div className="content-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 pt-5 pb-5">
            {
              users.map(user => <User user={user} addMember={addMember}></User>)
            }
          </div>
          <div className="col-lg-4 offset-lg-1">
            {
              userInfo.map(userIn => <UserDetail userIn={userIn}></UserDetail>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
