import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classes from './GifBox.module.scss';
import { dateFormat } from '../../lib/helper';

export default class GifBox extends Component {
  constructor(props) {
    super(props);
    this.imageWrapperRef = createRef();
    this.imageRef = createRef();

    this.imageWidth = Number(props.imageWidth);
    this.imageHeight = Number(props.imageHeight);

    this.state = {
      url: ''
    }
  }

  componentDidMount() {
    this.prepareWrapper();
    this.loadImage();
  }

  prepareWrapper() {
    const ref = this.imageWrapperRef.current;
    const rate = ref.offsetWidth / this.imageWidth;
    const targetHeight = this.imageHeight * rate;
    ref.style.height = `${targetHeight}px`;
  }

  loadImage() {
    const image = new Image();
    image.src = this.props.url;

    image.onload = () => {
      this.imageRef.current.src = this.props.url;

      setTimeout(() => {
        this.imageWrapperRef.current.style.height = null;
      }, 0);
    }
  }

  render() {
    return (
      <div className={classes.gifBox} ref={this.imageWrapperRef}>
        <img src={''} alt="" ref={this.imageRef} />
        <div className={classes.textWrapper}>
          <div>{this.props.title}</div>
          <div>{dateFormat(this.props.trendingDate)}</div>
        </div>
      </div>
    );
  }
}

GifBox.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trendingDate: PropTypes.string.isRequired,
};
