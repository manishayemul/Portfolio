import React, { Component } from 'react';
import Social from '../pages/Social';
import FileDownloader from '../pages/FileDownloader';
class Contact extends Component {
render() {
return (
<div className="condiv ">
<h1 className="subtopic"><u>Contact Me</u></h1>
<h2>Email : <a className="mailcolor" href="mailto:manishayemul13@gmail.com.com">manishayemul13@gmail.com</a></h2>

 <FileDownloader/>

<Social />

</div>
)
}
}
export default Contact;
