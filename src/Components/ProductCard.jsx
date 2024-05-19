function ProductCard() {
	return (
		<div className="card w-80 bg-colors-secondaryshade text-colors-text shadow-xl rounded-none">
			<figure className="px-10 pt-10">
				<img
					src="https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg"
					alt="Shoes"
					className="rounded-xl h-64  w-10/112 sm:h-72"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">Harry Potter and the Philosophers Stone</h2>
				<p className="pb-1 text-2xl "> $19.99</p>
				<div className="card-actions">
					<button className="btn  bg-color-accent rounded-none">Buy Now</button>
				</div>
			</div>
		</div>
	);
    }

export default ProductCard;
