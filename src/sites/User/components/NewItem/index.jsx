import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const NewItem = () => (
  <Link
    style={{ textDecoration: 'none', color: 'black' }}
    to="/newItem"
  >
    <div className="new-item">
      <img src="/tools/addIcon.png" alt="add" />
    </div>
  </Link>
);

export default NewItem;
