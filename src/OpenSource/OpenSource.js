import React from 'react';
import './OpenSource.scss';
import Sidebar from '../Sidebar/Sidebar';

export default class OpenSource extends React.Component {
	state = {
		loading: true,
		data: {}
	};

	componentDidMount() {
		this.setState({ loading: true });

		setTimeout(async () => {
			let response = await fetch(
				'https://api.github.com/users/ooade/repos?per_page=100'
			);
			let data = await response.json();
			data.sort((a, b) => b.stargazers_count - a.stargazers_count);
			data.length = 10;
			data = data.map(({ id, name, stargazers_count, description }) => ({
				id,
				name,
				stargazers_count,
				description
			}));
			this.setState({ data, loading: false });
		}, 1500);
	}

	render() {
		const { data, loading } = this.state;

		return (
			<div className="open-source page" id="open-source">
				<Sidebar page="Open Source Projects" />
				<main>
					{!loading ? (
						data.map(({ id, name, stargazers_count, description }) => (
							<div className="open-source__box" key={id}>
								<h3> {name} </h3>
								<p> ~ {stargazers_count} Stars </p>
								<p> {description.replace(/:.*:/, '').trim()} </p>
							</div>
						))
					) : (
						<div>Loading...</div>
					)}
					{!loading && (
						<div className="open-source--link__box">
							<a href="https://github.com/ooade?tab=repositories">View All.</a>
						</div>
					)}
				</main>
			</div>
		);
	}
}
