import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Manisha.jpg';
import Social from '../pages/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Manisha Yemul','I am a Web Developer']} speed={80} eraseDelay={800}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home