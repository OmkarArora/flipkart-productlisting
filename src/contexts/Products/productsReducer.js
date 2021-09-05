export const productsReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return { ...state, products: action.payload.products }
		case "SET_APP_STATE":
			return { ...state, appState: action.payload.appState }
		default: return state;
	}
}