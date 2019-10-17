import React, {useState} from 'react';
import MembersForm from './components/MembersForm';
import Member from './components/Member';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  const addMember = member => {
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <h1>Members</h1>
      <MembersForm addMember={addMember}/>
      <Member memberList={members}/>
    </div>
  );
}

export default App;
