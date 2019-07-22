import React from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
require('dotenv').config()


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: []
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.getMovies(this.state.query);

    this.setState({ query: "" });
  }

  getMovies = async (query) => {
    try {
      const result = await request.get('/movies').query({ data: query });

      this.setState({ results: result.body.results });
    } catch(err) {
      console.error('ERR: ', err);
    }
  }

  render() {
    return (
      <div className="review">
        <h1>Review page</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Enter a movie/tv show"
            required
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.results.map(data => {
            return <Link key={data.id} to={`/review/${data.id}`}>
                      <li>{data.title}</li>
                    </Link>
          })}
        </ul>
      </div>
    );
  }

}

export default Review;
