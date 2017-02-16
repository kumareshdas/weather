import React, { Component } from 'react';
class Form extends Component {

//   collectResult(results){
// //alert("It's okk");
//   this.props.loader("search");
//   }
  render() {
    var {onload}=this.props;
    return (
      <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <button type="button" className="btn btn-primary btn-lg" onClick={()=>{onload("search")}}>SEARCH</button>
        <button type="button" className="btn btn-secondary btn-lg"onClick={()=>{onload("cancel")}}>CANCEL</button>
    </div>
    </div>
  );
}
}
export default Form;
