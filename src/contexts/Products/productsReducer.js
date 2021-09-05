export const productsReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return { ...state, products: action.payload.products }
		case "SET_APP_STATE":
			return { ...state, appState: action.payload.appState }
		case "SET_SIZE_FILTER":
			return { ...state, sizeFilter: action.payload.sizeFilter }
		case "SET_BRANDS_FILTER":
			return { ...state, brandsFilter: action.payload.brandsFilter }
		case "SET_IDEALS_FILTER":
			return { ...state, idealsFilter: action.payload.idealsFilter }
		case "SET_SORT_ORDER":
			return { ...state, sortOrder: action.payload.sortOrder }
		case "CLEAR_ALL_FILTERS":
			return { ...state, sizeFilter: [], brandsFilter: [], idealsFilter: [], sortOrder: null }
		default: return state;
	}
}