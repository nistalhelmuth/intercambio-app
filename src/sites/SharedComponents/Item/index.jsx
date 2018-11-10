import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../reducers';

import Stars from '../Stars';

import './styles.css';

const Item = ({
  id,
  name,
  usedState,
  propietaryId,
}) => (
  <Link
    to={`/users/${propietaryId}/${id}`}
    style={{ textDecoration: 'none', color: 'black' }}
  >
    <div className="item-card">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAeFBMVEX///8AAAD7+/vx8fH29vYHBwcLCwvf39/u7u4aGhrp6en4+PgYGBhDQ0NYWFikpKSKioolJSUrKyuqqqp7e3swMDDl5eVeXl6YmJjKyspKSkoSEhKPj48/Pz+/v7/V1dWwsLBra2t/f39zc3NSUlJmZmbPz881NTUjk9hkAAAC6ElEQVR4nO2a63aqMBBGHRUiqHhD24o3tJ6+/xserMotV0MyXaud/RPRb6sZJoT0egRBEARBEBWbyzIA7wTLdCPOn4X+0++EK1H+Civ+hsAgRvv+N8KYE0gx8wHOnMASV2DNCSCM/zoBJ4CbDyAXkFWpCzYXvUDqL/5GrhXw+P1vHLUCfvN7MQn8tMDozwiw83QCMJnO2Y8IsKS65CUNBRyB5tQmnGELzKHFHFdg1s4HqH4DBAEmmFqF5ThAEEj4/GIk4gkwUT7A8yfwL3AWCzzHoX+BqVhgiiYwEQtEaALi/HISOvj9Apq/wL+AZhD6F+AawZ1nGfoX0FyI/AtoLsUIAupm5ERgOFa+rGzH3QUGaVTcXM9Up6gmJJ0F2OLxp/YVJymmZF0FBuU6xptSUzop7SqwrT74ojyRzadREETctLyjQHV73/xnzRl2EmiN73dsgY/2OpJwvdGfAOMaXXDAFBiu2/lFhX0gCnzy+QDZEU1AspIaMdkbHAtIl7IX/KpvzB/qLMAVQMV60Dz18FUck45OS4FNJM0H2Dea4+77WHByKjD8UuQDfFaNqX99HJNV6NhKQDjJqVE2plE1JZVUqJWA5HavRn4/kdXX/MUVaiNw0uYXv8FtJK6yxjFhhVoI/DN6lpMlV+5KKahQC4FYVQAa2hVqIzBWF4CG/bCzwFuXfIBte+r4qoDkRsucpBXzooBJAWjImzH9lwSOLh5mNp8QviQQLxzkA+xsBfp7J/n1G7PXBK7ij7PgZCWwc5Zfb43mAgd3+fXWaCxwzMQfZUnZGk0FRm4KoOLZGg0F+pK1rg48WqOhQO48v2yNRgLvHvKfrdFE4OBpM8N3azQQYG4LoEZiJDDwuJskNxHYit/rhlQvcBG/0xXlDEcqgAUJkAAJkAAJkAAngLylM+QEBGvhPuE3terX4pzCb+uNvc0ERWSCBTTUrd0nPr8wQNvcnUkeNsUpyvb+dap4nkAQBEEQxB/kP6zfLXqaD72vAAAAAElFTkSuQmCC" alt="icon"/>
      <p>
        {name}
      </p>
      <Stars num={usedState} />
    </div>
  </Link>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  propietaryId: PropTypes.number.isRequired,
  usedState: PropTypes.number.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getBelonging(state, id),
  }),
  undefined,
)(Item);
