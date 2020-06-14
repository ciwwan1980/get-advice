import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {

state={
advice:""
}

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const advice = response.data.slip.advice;
        console.log(advice)
   
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {

    return (
      <div>
        <h1>get advice</h1>
      </div>
    )
  }
}
