import React, { Component } from 'react';
class Result extends Component {
  render() {
    var upres=this.props.loader;
    return (


<form className="form-inline">
<div className="form-group">
  <label className="sr-only" for="result">Result:</label>
      <div className="row">
          <div className="col-sm-4 col-md-offset-4"> <h1>{upres}</h1></div>
    </div>
  </div>
</form>
)
}
}
export default Result;
