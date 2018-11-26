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
}) => (
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

FileInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  addImage: PropTypes.func.isRequired,
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
