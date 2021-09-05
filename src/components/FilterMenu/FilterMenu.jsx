import { useProducts } from "../../contexts";
import "./filterMenu.css";

export const FilterMenu = ({ sizes, brands, ideals }) => {
	const { sizeFilter, brandsFilter, idealsFilter, sortOrder, dispatch } = useProducts();

	const onInputChange = (e) => {
		const value = e.target.value;
		const isChecked = e.target.checked;
		const name = e.target.name;
		if (name === "size") {
			if (isChecked) {
				if (!sizeFilter.includes(value))
					dispatch({ type: "SET_SIZE_FILTER", payload: { sizeFilter: [...sizeFilter, value] } })
			} else {
				if (sizeFilter.includes(value)) {
					let filteredSizes = sizeFilter.filter(size => size !== value);
					dispatch({ type: "SET_SIZE_FILTER", payload: { sizeFilter: filteredSizes } })
				}
			}
		}
		if (name === "brand") {
			if (isChecked) {
				if (!brandsFilter.includes(value))
					dispatch({ type: "SET_BRANDS_FILTER", payload: { brandsFilter: [...brandsFilter, value] } })
			} else {
				if (brandsFilter.includes(value)) {
					let filteredBrands = brandsFilter.filter(brand => brand !== value);
					dispatch({ type: "SET_BRANDS_FILTER", payload: { brandsFilter: filteredBrands } })
				}
			}
		}
		if (name === "ideal") {
			if (isChecked) {
				if (!idealsFilter.includes(value))
					dispatch({ type: "SET_IDEALS_FILTER", payload: { idealsFilter: [...idealsFilter, value] } })
			} else {
				if (idealsFilter.includes(value)) {
					let filteredIdeals = idealsFilter.filter(ideal => ideal !== value);
					dispatch({ type: "SET_IDEALS_FILTER", payload: { idealsFilter: filteredIdeals } })
				}
			}
		}
	}

	const onSortChange = (e) => {
		dispatch({ type: "SET_SORT_ORDER", payload: { sortOrder: e.target.value } })
	}

	const clearFilters = () => {
		dispatch({ type: "CLEAR_ALL_FILTERS" })
	}

	return (
		<div className="container-filters">
			{(sizeFilter.length > 0 || brandsFilter.length > 0 || idealsFilter.length > 0 || sortOrder !== null) && <button onClick={clearFilters}>Clear All Filters</button>}

			<div className="filter-block">
				<div className="filter-heading">Sort</div>
				<label><input type="radio" value="htl" checked={sortOrder !== null && sortOrder === "htl"} onChange={onSortChange} />High to Low</label>
				<label><input type="radio" value="lth" checked={sortOrder !== null && sortOrder === "lth"} onChange={onSortChange} />Low to High</label>
			</div>

			<div className="filter-block">
				<div className="filter-heading">Size</div>
				{sizes.map(size =>
					<div key={size} className="checkbox-size">
						<input type="checkbox" name="size" checked={sizeFilter.includes(size)} value={size} onChange={onInputChange} />
						{size}
					</div>)}
			</div>

			<div className="filter-block">
				<div className="filter-heading">Brands</div>
				{brands.map(brand =>
					<div key={brand} className="checkbox-size">
						<input type="checkbox" name="brand" checked={brandsFilter.includes(brand)} value={brand} onChange={onInputChange} />
						{brand}
					</div>)}
			</div>

			<div className="filter-block">
				<div className="filter-heading">Ideal for</div>
				{ideals.map(ideal =>
					<div key={ideal} className="checkbox-size">
						<input type="checkbox" name="ideal" checked={idealsFilter.includes(ideal)} value={ideal} onChange={onInputChange} />
						{ideal}
					</div>)}
			</div>
		</div>
	)
}