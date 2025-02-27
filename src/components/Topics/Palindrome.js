import React, { Component } from 'react';

export default class Palindrome extends Component {

    constructor () {
        super ();

        this.state = {
            userInput: '',
            Palindrome: ''
        };
    }

    handleChange(val) {
        this.setState({ userInput: val});
    }

    isPalindrome(userInput) {
        let forward = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if( forward === backwards) {
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: 'false'});
        }
    }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}>Check</button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome }</span>
      </div>
    )
  }
}