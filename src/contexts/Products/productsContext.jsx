import { createContext, useContext, useEffect, useReducer } from "react";
import { productsReducer } from "./productsReducer";
import SampleData from "./productsData.json";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
	const [{ products, appState, sizeFilter, brandsFilter, idealsFilter, sortOrder }, dispatch] = useReducer(productsReducer, { products: [], appState: "success", sizeFilter: [], brandsFilter: [], idealsFilter: [], sortOrder: null })

	const value = { products, appState, sizeFilter, brandsFilter, idealsFilter, sortOrder, dispatch };

	const fetchProducts = () => {
		const products = SampleData.products;
		dispatch({ type: "SET_PRODUCTS", payload: { products } })
	}

	useEffect(() => fetchProducts(), [])

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}
