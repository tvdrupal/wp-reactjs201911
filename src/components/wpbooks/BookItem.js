import React, {
	Component
} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import {
	Link
} from "react-router-dom";

export class BookItem extends Component {

	state = {
		imgUrl: '',
		author: '',
		isLoaded: false
	}

	static propTypes = {
		book: PropTypes.object.isRequired

	}

	componentDidMount() {
		const {
			featured_media,
			author
		} = this.props.book;

		const getImageurl = axios.get(`http://127.0.0.2:8080/demo/wp/wordpress-5.2.4/wordpress/wp-json/wp/v2/media/${featured_media}`)
		const getAuthor = axios.get(`http://127.0.0.2:8080/demo/wp/wordpress-5.2.4/wordpress/wp-json/wp/v2/users/${author}`)

		Promise.all([getImageurl, getAuthor]).then(res => {
			this.setState({
				imgUrl: res[0].data.media_details.sizes.full.source_url,
				author: res[1].data.name,
				isLoaded: true

			})
		})



	}


	render() {

		const {
			id,
			title,
			acf,
			excerpt
		} = this.props.book;
		const {
			imgUrl,
			author,
			isLoaded
		} = this.state;
		//console.log(this.props.book);

		return (

			<div >
				<h2 style={{ color:"red",background:"blue" }}>{title.rendered}</h2>
				<div>{acf.publisher}</div>	
				<div >author: { author }</div>	
				<div>
				<Link to={`/wpbooksdetail/${id}`}><img src={imgUrl} /><br/>detail ></Link>
				</div>
				<div   dangerouslySetInnerHTML= {{ __html:excerpt.rendered }} />
			 </div>
		)
	}
}

export default BookItem