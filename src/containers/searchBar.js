import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../redux/actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { city: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ city: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.city);
		this.setState({ city: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.city}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
function bindActions(dispatch) {
	return {
		fetchWeather: city => dispatch(fetchWeather(city))
	};
}
export default connect(mapStateToProps, bindActions)(SearchBar);
