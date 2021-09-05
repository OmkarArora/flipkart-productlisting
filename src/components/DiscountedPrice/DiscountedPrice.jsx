import "./discountedPrice.css";

export const getDiscountedPrice = (price, discount) => Math.ceil(price - (discount / 100) * price);

export const DiscountedPrice = ({ price, discount, currency }) => {
	return (
		<div className="discounted-price">
			<div className="final-price">{currency.symbol} {getDiscountedPrice(price, discount)}</div>
			<div className="line-through text-grey original-price">{currency.symbol} {price}</div>
			<div className="discount">{discount}% off</div>
		</div>
	)
}