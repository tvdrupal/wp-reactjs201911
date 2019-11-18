import React from 'react'

import {
	useSelector,
	useDispatch
} from 'react-redux'
import {
	increase,
	decrease
} from '../actions'



function Redux() {


	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (

		<div className = "post" >
					        redux2

					        <br />

						  <h1>counter { counter } </h1>
						  <button onClick ={  ()=>dispatch(increase(500))} >+</button>
						  <button onClick ={  ()=>dispatch(decrease())} >-</button>

					      </div>



	);
}


export default Redux