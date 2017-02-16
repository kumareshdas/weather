import React, { Component } from 'react';


class Search extends Component {
  myFunction(e)
  {
    //  console.log(e.target.value);
    this.props.onUpdateHandeler(e.target.value);
  };
  render() {
    //get props current text
    var {currentText}=this.props;
    return (
 <div className="row">
 <div className="col-md-10 col-md-offset-5">
 <div className="input-group">
      <input type="text" className="form-control" value={currentText} placeholder="Enter The Area Name" id="txtSearch" onChange={this.myFunction.bind(this)} />

   </div>
  </div>
  </div>
 )
 }
 }


 export default Search;
