
import React from 'react';
import Axios from 'axios';


export default class QuestionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }

  
  componentDidMount() {
    Axios.get("http://anapioficeandfire.com/api/characters/16")
    .then(response => {
      this.setState({ info: response.data });
    })
    .catch(error => {
      console.log(error);
    });

  }
  render() {
    const { info } =this.state;
    return (

      <div>
        <h1>Where was Margaery Tyrell born? </h1>
        <h3> Answer : {info.born} </h3>
      </div>
    )
  }
}
