import React from 'react';
import request from 'superagent';

class ReviewDetail extends React.Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      review: "",
      movieId: id,
      movie: {}
    };
  }

  componentWillMount() {
    this.getMovieDetails();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ review: "" });
  }

  getMovieDetails = () => {
    return request
      .get('/movie')
      .query({ data: this.state.movieId })
      .then(res => {
        console.log('RES_BODY: ', res.body);
        this.setState({ movie: res.body });
      })
      .catch(err => {
        console.error('ERR: ', err);
      })
  }

  render() {
    let { title, overview, popularity, poster_path, release_date } = this.state.movie;
    poster_path = `https://image.tmdb.org/t/p/w342${poster_path}`;

    return (
      <div className="search">
        <h1>Review Detail page</h1>

        <h3>Movie ID: {this.state.movieId}</h3>

        <ul>
          <li><img src={ poster_path } alt="" /></li>
          <li>Title: { title }</li>
          <li>Overview: { overview }</li>
          <li>Popularity: { popularity }</li>
          <li>Released: { release_date }</li>
        </ul>

        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea
              type="text"
              name="review"
              value={this.state.review}
              onChange={this.handleChange}
              placeholder="Share your review"
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

}

export default ReviewDetail;
