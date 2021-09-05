import { createContext, useContext, useEffect, useReducer } from "react";
import { productsReducer } from "./productsReducer";
import SampleData from "./productsData.json";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
	const [{ products, appState }, dispatch] = useReducer(productsReducer, { products: [], appState: "success" })

	const value = { products, appState, dispatch };

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
