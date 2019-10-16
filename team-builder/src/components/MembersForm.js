import React, {useState} from 'react';

const MembersForm = props => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: ''
  });
const handleChanges = e => {
  setMember({ ...member, [e.target.name]: e.target.value });
  console.log(e.target.name);
}

const submitForm = e => {
  e.preventDefault();
  props.addMember(member);
  setMember({ name: '', email: '', role: '' })
};

return (
  <form onSubmit={submitForm}>
    <label htmlFor='name'>Name</label>
    <input
      name='name'
      type='text'
      id='name'
      placeholder='name'
      value={member.name}
      onChange={handleChanges}
    />
    <label htmlFor='email'>E-mail</label>
    <input
      name='email'
      type='text'
      id='email'
      placeholder='email'
      value={member.email}
      onChange={handleChanges}
    />
    <label htmlFor='role'>Role</label>
    <input
      name='role'
      type='text'
      id='role'
      placeholder='role'
      value={member.role}
      onChange={handleChanges}
    />
    <button type='submit'>Add Member</button>
  </form>
  )
}

export default MembersForm;