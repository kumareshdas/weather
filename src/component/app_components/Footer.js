import React, { Component } from 'react';
import logo from '../../images/logo.svg';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="App-footer">

        <footer className="mt-5">
      <div className="container-fluid bg-faded mt-5">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-4">
              <div className="row py-2">
                <div className="col-sm-3 hidden-md-down">
                  <a className="bg-circle bg-info" href="https://twitter.com/ ">
                    <i className="fa fa-2x fa-fw fa-twitter" aria-hidden="true "></i>
                  </a>
                </div>
                <div className="col-sm-9">
                  <h4>Tweets</h4>
                  Embed here?
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row py-2">
                <div className="col-sm-3 hidden-md-down">
                  <a className="bg-circle bg-info" href="#">
                    <i className="fa fa-2x fa-fw fa-address-card" aria-hidden="true "></i>
                  </a>
                </div>
                <div className="col-sm-9">
                  <h4>Contact us</h4>
                  <p>Why not?</p>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-3 hidden-md-down">
                  <a className="bg-circle bg-info" href="#">
                    <i className="fa fa-2x fa-fw fa-laptop" aria-hidden="true "></i>
                  </a>
                </div>
                <div className="col-sm-9">
                  <h4>Cookie policy</h4>
                  <p className=" ">We use <a className=" " href="/# ">cookies </a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row py-2">
                <div className="col-sm-3 hidden-md-down">
                  <a className="bg-circle bg-danger" href="# ">
                    <i className="fa fa-2x fa-fw fa-file-pdf-o" aria-hidden="true "></i>
                  </a>
                </div>
                <div className="col-sm-9">
                  <h4>Download pdf</h4>
                  <p> You like print?</p>

                </div>
              </div>
              <div className="row py-2">
                <div className="col-sm-3 hidden-md-down">
                  <a className="bg-circle bg-info" href="https://twitter.com/ ">
                    <i className="fa fa-2x fa-fw fa-info" aria-hidden="true "></i>
                  </a>
                </div>
                <div className="col-sm-9">
                  <h4>Info</h4>
                  About us.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid bg-primary py-3">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-9">
              <p className="text-white">Created By @Kumaresh Das.</p>
            </div>
            <div className="col-md-3">
              <div className="d-inline-block">
                <div className="bg-circle-outline d-inline-block">
                  <a href="https://www.facebook.com/" class="text-white"><i class="fa fa-2x fa-fw fa-facebook"></i>
    		</a>
                </div>

                <div className="bg-circle-outline d-inline-block">
                  <a href="https://twitter.com/" class="text-white">
                    <i className="fa fa-2x fa-fw fa-twitter"></i></a>
                </div>

                <div className="bg-circle-outline d-inline-block">
                  <a href="https://www.linkedin.com/company/" class="text-white">
                    <i className="fa fa-2x fa-fw fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
</div>





    );
  }

}
export default Footer;
