import React, { Component } from 'react'
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'myskills':['C','C++','CORE JAVA','MYSQL','HTML','CSS','JAVASCRIPT','REACT JS']
};
}
render() {
return (
<div className="condiv skills">
<h1 className="subtopic"><u>My Skills</u></h1>
<ul>
{this.state.myskills.map((value)=>{
return <li>{value}</li>
})}
</ul>
</div>
)
}
}
export default Skills