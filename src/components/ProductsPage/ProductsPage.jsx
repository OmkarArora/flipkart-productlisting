import { FilterMenu } from "..";
import { ProductCard } from "../ProductCard/ProductCard";
import "./productsPage.css";

export const ProductsPage = () => {
	return (
		<div className="page-products">
			<main className="container-listing">
				<FilterMenu />
				<div className="container-products list-products">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</main>
		</div>
	)
}