import React from 'react'
import {
	createStore
} from 'redux'

class Redux extends React.Component {

	//https://segmentfault.com/a/1190000015684895

	render() {

		const tiger = 0;

		const increase = () => {
			return {
				type: 'INCREASE'
			}
		}

		const decrease = () => {
			return {
				type: 'DECREASE'
			}
		}

		//这是reducer
		const reducer = (state = tiger, action) => {
			switch (action.type) {
				case 'INCREASE':
					return state += 100;
				case 'DECREASE':
					return state -= 100;
				default:
					return state;
			}
		}

		//创建store
		let store = createStore(reducer);

		//console.log(store.getState())

		//订阅事件
		store.subscribe(() =>
			console.log(store.getState())
		);

		//派发事件
		store.dispatch(increase());
		store.dispatch(increase());
		store.dispatch(decrease());
		store.dispatch(decrease());
		store.dispatch(decrease());


		return (
			<div className = "post" >
		        redux
		      </div>


		);
	}
}



export default Redux