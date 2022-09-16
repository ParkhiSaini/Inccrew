import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
   
  const { name, email } = this.props.auth.user;
return (
  <header>
 
  <ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">Logout</a></li>
  </ul>
  <div class="navbar-fixed">
    <nav class="red darken-1">
      <div class="container">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Inncrew</a>
          
          <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right">
          
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Hello {email}<i class="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </div>  
    </nav>
  </div>

  <ul id="nav-mobile" class="sidenav sidenav-fixed">
      <li class="bold">
        <a href="#" class="waves-effect waves-teal">Dashboard</a>
      </li>
      <li class="bold">
        <a href="#" class="waves-effect waves-teal">My Events</a>
      </li>
      <li class="bold">
        <a href="#" class="waves-effect waves-teal">Joined Events</a>
      </li>
      <li class="bold">
        <a href="#" class="waves-effect waves-teal">My Schedule</a>
      </li>
      <li class="bold">
        <a class="waves-effect waves-teal modal-trigger" href="#calendar">Calendar</a>
      </li>
      <li class="bold">
        <a class="waves-effect waves-teal modal-trigger" href="#event-today">Events Today</a>
      </li>
      <div class="logo"><h3>Logo</h3></div>
    </ul>
  
  
  
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