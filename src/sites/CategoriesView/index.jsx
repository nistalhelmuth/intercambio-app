import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryPreview from './components/CategoryPreview';
import * as actions from '../../actions/categories';

import './styles.css';

class CategoriesView extends Component {
  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    return (
      <div className="categories-view">
        <div className="header">
          <Link to="/newPost">Crear Post</Link>
          <Link to={`/users/${'username'}`}>Perfil</Link>
        </div>
        <CategoryPreview />
        <div className="footer">
          <button>
            {'prev'}
          </button>
          <button>
            {'next'}
          </button>
        </div>
      </div>
    );
  }
}

CategoriesView.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  dispatch => ({
    fetchCategories() {
      dispatch(actions.fetchCategories());
    },
  }),
)(CategoriesView);
