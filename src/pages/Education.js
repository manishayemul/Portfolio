import React, { Component } from 'react';
import Widecard from '../pages/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic"><u>My Education</u></h1>
<Widecard title="BE in Information Technology" where="D. Y. Patil College of Engineering Akurdi, Pune" from="2018" to="2021" per="CGPA = 7.65"/>
<Widecard title="Diploma in Computer Science" where="Government Polytechnic, Solapur" from="2015" to="2018" per="Percentage = 83.12"/>
<Widecard title="SSC" where="Shri Siddheshwar English Medium High School, Solapur" from="2014" to="2015" per="Percentage = 80.80"/>
</div>
)
}
}
export default Education;