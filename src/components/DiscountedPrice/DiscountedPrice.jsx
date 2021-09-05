import "./discountedPrice.css";

export const DiscountedPrice = ({ price, discount, currency }) => {
	let discountedPrice = Math.ceil(price - (discount / 100) * price);
	return (
		<div className="discounted-price">
			<div className="final-price">{currency.symbol} {discountedPrice}</div>
			<div className="line-through text-grey original-price">{currency.symbol} {price}</div>
			<div className="discount">{discount}% off</div>
		</div>
	)
}