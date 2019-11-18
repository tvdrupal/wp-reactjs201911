import React, {
	Component
} from 'react';
import axios from 'axios'

import BookItem from './BookItem';

export class Books extends Component {

	state = {
		books: [],
		isLoaded: false
	}

	componentDidMount() {
		axios.get('http://127.0.0.2:8080/demo/wp/wordpress-5.2.4/wordpress/wp-json/wp/v2/books')
			.then(
				res => this.setState({
					books: res.data,
					isLoaded: true
				})
			)
			.catch(err => console.log(err));
	}

	render() {
		//console.log(this.state)
		const {
			books,
			isLoaded
		} = this.state;
		return (

			<div>
				{
					books.map(book=>(
						//<h4 key={book.id}>{ book.title.rendered }</h4>

						<BookItem key={book.id} book={book} />
						))
				}

				</div>
		)
	}
}

export default Books