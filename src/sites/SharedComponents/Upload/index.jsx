import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import * as imageActions from '../../../actions/image';
import * as selectors from '../../../reducers';

import './styles.css';

const FileInput = ({
  input,
  meta,
  image,
  addImage,
}) => {
  return (
    <Dropzone
      onDrop={ImageToUpload => input.onChange(addImage(ImageToUpload[0]))}
      className="drop-zone"
      accept="image/jpeg, image/png, image/jpg"
    >
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt="uploadImage"
        />
      ) : (
        <p>
          Agregue una imagen
        </p>
      )}
      { meta.touched && meta.error && (
        <span className="error">
          { meta.error }
        </span>
      )}
    </Dropzone>
  );
};

FileInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  image: PropTypes.object,
  addImage: PropTypes.func.isRequired,
};

FileInput.defaultProps = {
  image: undefined,
};

export default connect(
  state => ({
    image: selectors.getImage(state),
  }),
  dispatch => ({
    addImage(image) {
      dispatch(imageActions.addImage(image));
    },
  }),
)(FileInput);
