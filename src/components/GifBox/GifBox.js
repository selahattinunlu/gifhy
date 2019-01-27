import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import classes from './GifBox.module.scss';

const GifBox = (props) => {
  const imageWidth = Number(props.imageWidth);
  const imageHeight = Number(props.imageHeight);

  const imageRef = createRef();
  let wrapperRef = null;

  const prepareWrapper = (ref) => {
    const rate = ref.offsetWidth / imageWidth;
    const targetHeight = imageHeight * rate;
    ref.style.height = `${targetHeight}px`;
    wrapperRef = ref;
  }

  let url = '';
  const image = new Image();
  image.src = props.url;

  image.onload = () => {
    imageRef.current.src = props.url;

    setTimeout(() => {
      wrapperRef.style.height = null;
    }, 0);
  }

  return (
    <div className={classes.gifBox} ref={ref => prepareWrapper(ref)}>
      <img src={url} alt="" ref={imageRef} />
      <div className={classes.textWrapper}>
        <div>{props.title}</div>
        <div>{props.trendingDate}</div>
      </div>
    </div>
  );
};

GifBox.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trendingDate: PropTypes.string.isRequired,
};

export default GifBox;
