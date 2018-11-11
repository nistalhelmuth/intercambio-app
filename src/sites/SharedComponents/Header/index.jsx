import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../reducers';
import './styles.css';

const Header = ({
  userId,
}) => (
  <div className="header">
    <Link className="new-post-button" to="/newPost">Crear Post</Link>
    <Link to={`/users/${userId}`}>Perfil</Link>
  </div>
);

Header.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default connect(
  state => ({
    userId: selectors.getLoggedUser(state).id,
  }),
)(Header);
