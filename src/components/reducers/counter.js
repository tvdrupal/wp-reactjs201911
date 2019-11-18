	const countReducer = (state = 0, action) => {
		switch (action.type) {
			case 'INCREASE':
				return state + action.payload;
			case 'DECREASE':
				return state - 100;
			default:
				return state;
		}
	}
	export default countReducer;