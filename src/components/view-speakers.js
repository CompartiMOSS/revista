import React, { PureComponent } from 'react';
import SpeakerItem from './speaker-item'
import styled from "styled-components";

const AuthorsStyled = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: top;
  margin: 0;
  padding: 0;
  list-style: none;
  
  li {
    margin: 12px;
    padding: 0;
    box-shadow: 0px 0px 15px rgba(0,0,0, 0.45);
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 15px rgba(255,255,255, 0.45);
    }
  }
`;

class ViewSpeakers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      speakers: []
    }
  }

  componentDidMount() {
    let url = "https://sessionize.com/api/v2/8whxxz3c/view/Speakers"
    if (this.props.month !== "enero") {
      url = "https://sessionize.com/api/v2/933gflec/view/Speakers";
    }

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          speakers: response
        })
      })
  }

  render() {
    return (
      <AuthorsStyled>
        {this.state.speakers.map((speaker) => (
          <SpeakerItem current={speaker.fullName} photo={speaker.profilePicture} session={speaker.sessions[0].name} key={speaker.id} />
        ))}
      </AuthorsStyled>
    );
  }
}
  
export default ViewSpeakers;