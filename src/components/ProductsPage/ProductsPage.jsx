import { useProducts } from "../../contexts";
import { ProductCard, FilterMenu, getDiscountedPrice } from ".."
import "./productsPage.css";

export const ProductsPage = () => {
	const { products, sizeFilter, brandsFilter, idealsFilter, sortOrder } = useProducts();
	const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

	const brands = products.map(item => item.brand);
	const ideals = [...new Set((products.map(item => item.ideal).flat()))];

	const filterData = (sizeFilter, brandsFilter, idealsFilter) => {
		let data = [...products];
		if (sizeFilter.length > 0) {
			let sizedData = [];
			for (let i = 0; i < sizeFilter.length; i++) {
				for (let j = 0; j < data.length; j++) {
					if (data[j].sizes.includes(sizeFilter[i])) {
						// eslint-disable-next-line
						if (!sizedData.find(item => item._id === data[j]._id)) {
							sizedData.push(data[j]);
							continue;
						}
					}
				}
			}
			data = sizedData;
		}
		if (brandsFilter.length > 0) {
			let brandedData = [];
			for (let i = 0; i < brandsFilter.length; i++) {
				for (let j = 0; j < data.length; j++) {
					if (brandsFilter.includes(data[j].brand)) {
						// eslint-disable-next-line
						if (!brandedData.find(item => item._id === data[j]._id)) {
							brandedData.push(data[j]);
							continue;
						}
					}
				}
			}
			data = brandedData;
		}
		if (idealsFilter.length > 0) {
			let idealsData = [];
			for (let i = 0; i < idealsFilter.length; i++) {
				for (let j = 0; j < data.length; j++) {
					if (data[j].ideal.includes(idealsFilter[i])) {
						// eslint-disable-next-line
						if (!idealsData.find(item => item._id === data[j]._id)) {
							idealsData.push(data[j]);
							continue;
						}
					}
				}
			}
			data = idealsData;
		}
		return data;
	}

	const sortData = (data, sortOrder) => {
		let sortedData = [...data];
		if (sortOrder === "lth") {
			sortedData = sortedData.sort((item1, item2) => getDiscountedPrice(item1.price, item1.discount) - getDiscountedPrice(item2.price, item2.discount))
		} else if (sortOrder === "htl") {
			sortedData = sortedData.sort((item1, item2) => getDiscountedPrice(item2.price, item2.discount) - getDiscountedPrice(item1.price, item1.discount))
		} else return data;
		return sortedData;
	}

	let filteredData = filterData(sizeFilter, brandsFilter, idealsFilter);
	filteredData = sortData(filteredData, sortOrder);
	return (
		<div className="page-products">
			<main className="container-listing">
				<FilterMenu sizes={sizes} brands={brands} ideals={ideals} />
				{filteredData.length === 0 ? <div className="container-products">No products match the criteria</div> : <div className="container-products list-products">
					{filteredData && filteredData.length > 0 && filteredData.map(item => <ProductCard key={item._id} {...item} />)}
				</div>}

			</main>
		</div>
	)
}