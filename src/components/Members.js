import React, { Component } from 'react';

class Members extends Component {
  constructor(props) {
    super(props);
    // 초기 상태 설정
    this.state = {
      members: [
        { name: 'Dr. Alice Smith', role: 'Principal Investigator' },
        { name: 'John Doe', role: 'Postdoctoral Fellow' },
        { name: 'Jane Roe', role: 'PhD Student' },
      ],
    };
  }

  render() {
    return (
      <section id="members">
        <h2>Our Team</h2>
        <ul>
          {this.state.members.map((member, index) => (
            <li key={index}>
              <strong>{member.name}</strong> - {member.role}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Members;
