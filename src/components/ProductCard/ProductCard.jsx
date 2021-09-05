import { DiscountedPrice } from "..";
import "./productCard.css";

export const ProductCard = ({ _id, name, brand, price, discount, sizes, ideal, images, currency }) => {
	return (
		<div className="card-product">
			<div className="container-product-img">
				<img src={images[0]} alt={name} />
			</div>
			<div className="product-details">
				<div className="brand-name text-grey weight500">{brand}</div>
				<div className="product-name">{name}</div>
				<DiscountedPrice currency={currency} price={price} discount={discount} />
				<div>
					<span className="text-grey weight500">Size </span>
					{sizes.join(",")}
				</div>
			</div>
		</div>
	)
}