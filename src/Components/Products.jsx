import ProductCard from "./ProductCard";

function Products() {
	return (
		<div className="py-20 bg-colors-background text-colors-text">
			<div className="grid grid-cols-1 md:grid-cols-4 md:px-2 ">
				<div className="py-5 xl:ml-14 md:px-6 md:py-6">
					<ProductCard />
				</div>

				<div className="py-5 ml-8 md:pl-6 md:py-6 md:ml-8">
					<ProductCard />
				</div>

				<div className="py-5 ml-8 md:py-6 md:ml-7">
					<ProductCard />
				</div>

				<div className="py-5 ml-8 md:py-6 md:ml-0">
					<ProductCard />
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-4 md:px-2 ">
				<div className="py-5 xl:ml-14 md:px-6 md:py-6">
					<ProductCard />
				</div>

				<div className="py-5 ml-8 md:pl-6 md:py-6 md:ml-8">
					<ProductCard />
				</div>

				<div className="py-5 ml-8 md:py-6 md:ml-7">
					<ProductCard />
				</div>

				<div className="py-5 ml-8 md:py-6 md:ml-0">
					<ProductCard />
				</div>
			</div>

			<div className="card-actions justify-end mr-16">
				<button className="btn btn-primary">View More</button>
				
			</div>
		</div>
	);
}

export default Products;
