	export const increase = (nr) => {
		return {
			type: 'INCREASE',
			payload: nr
		}
	}

	export const decrease = () => {
		return {
			type: 'DECREASE'
		}
	}