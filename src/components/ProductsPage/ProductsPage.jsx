import { useProducts } from "../../contexts";
import { ProductCard, FilterMenu } from ".."
import "./productsPage.css";

export const ProductsPage = () => {
	const { products } = useProducts();
	return (
		<div className="page-products">
			<main className="container-listing">
				<FilterMenu />
				<div className="container-products list-products">
					{products && products.length > 0 && products.map(item => <ProductCard key={item._id} {...item} />)}
				</div>
			</main>
		</div>
	)
}