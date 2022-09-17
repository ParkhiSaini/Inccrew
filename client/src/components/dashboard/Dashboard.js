import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import "./dashboard.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { name,email} = this.props.auth.user;
    
    

    return (
      <header>
 
 <nav>
    <div class="nav-wrapper">
     
      <ul id="nav-mobile" class="#448aff blue accent-2right hide-on-med-and-down">
        <li onClick={this.onLogoutClick}>Sign Out</li>
        <li><a href="#">{name}</a></li>
        <li><a href="#">{email}</a></li>
        
      </ul>
    </div>
  </nav>
  </header>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);