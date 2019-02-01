import React, { Component } from 'react';
import { getTrends } from '../../actions/trends';
import { connect } from 'react-redux';

import GifBox from '../../components/GifBox/GifBox';
import Button from '../../components/Button/Button';

class Home extends Component {
  async componentDidMount() {
    await this.props.getTrends();
  }

  renderTrends() {
    return this.props.trends.data.map(trend => {
      return (
        <GifBox
          key={trend.id}
          url={trend.images.original.url}
          imageWidth={trend.images.original.width}
          imageHeight={trend.images.original.height}
          title={trend.title}
          trendingDate={trend.trending_datetime}
        />
      )
    });
  }

  async loadMore() {
    console.log('clicked load more!');
    const newOffset = this.props.trends.offset + 25;
    await this.props.getTrends(newOffset);
  }

  render() {
    return (
      <div className="layout-wrapper">
        <header>
          <div id="logo">
            <a href="#">
              Gifhy
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">TEAM</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="hero">
          <h1>Your gif center <span>Funny</span> and <span>Creative</span></h1>
        </section>
        <main>
          <div id="filter-buttons">
            <button className="active">Trending</button>
            <button>Recent</button>
            <button>Most viewed</button>
          </div>
          <div className="masonry-wrapper">
            {this.renderTrends()}
          </div>
          <Button
            text="Load more"
            onClick={this.loadMore.bind(this)}
            disabled={this.props.trends.loading}/>
        </main>
        <footer></footer>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    trends: state.trends,
  }
};

export default connect(mapStateToProps, {
  getTrends
})(Home);
