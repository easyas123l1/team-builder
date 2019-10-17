import React from 'react';

const Member = props => {
  return (
    <div>
      {props.memberList.map((member, index) => {
        return (
          <div key={index}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Member;