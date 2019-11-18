import React from 'react'
import axios from 'axios'
import {
	Link
} from "react-router-dom";

class Booksdetail extends React.Component {

	state = {
		book: {},
		isLoaded: false,
		id: this.props.match.params.id
	}

	componentDidMount() {
		axios.get(`http://127.0.0.2:8080/demo/wp/wordpress-5.2.4/wordpress/wp-json/wp/v2/books/${this.state.id}`)
			//.then(res => console.log(res.data))
			.then(res => this.setState({
				book: res.data,
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}

	render() {

		const {
			id,
			book,
			isLoaded
		} = this.state;

		if (isLoaded) {
			return (
				<div className = " " >
							  {  id }
							  <h1>{  book.title.rendered  }</h1>
							 
							   <div   dangerouslySetInnerHTML= {{ __html:book.content.rendered }} />
						     

				<Link to = "/wpbooks" > back > </Link> 
				</div>
			);
		}

		return <h3>Loading......</h3>

	}
}



export default Booksdetail