import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic" alt="my profile"></img>
            <ReactTypingEffect className="typingeffect" text={['My name is Nereida Rodriguez','I am a web designer & developer']} speed={150} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    