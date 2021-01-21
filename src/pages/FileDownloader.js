import React, { Component } from 'react';
import PDF from '../img/DYPCOE_Manisha_Yemul.pdf';
import { Button } from 'reactstrap';
class FileDownloader extends Component{
  render(){
    return (
      <Button variant="btn-flat" size="xxl">
       <a href = {PDF} target= "_blank" rel="noopener noreferrer" > RESUME</a>
    </Button>

    );
  }
}
export default FileDownloader;