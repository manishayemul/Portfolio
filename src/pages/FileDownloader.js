import React, { Component } from 'react';
import PDF from '../img/Manisha.Yemul.pdf';
import { Button } from 'reactstrap';
class FileDownloader extends Component{
  render(){
    return (
      <Button variant="btn" >
       <a href = {PDF} target= "_blank" rel="noopener noreferrer" > RESUME</a>
    </Button>

    );
  }
}
export default FileDownloader;