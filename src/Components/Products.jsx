import ProductCard from "./ProductCard";

function Products() {
	return (
		<div className="py-20 bg-slate-800">
			<div className="grid grid-cols-4 px-6 ">
				<div className="px-6 py-6 ">
					<ProductCard />
				</div>

				<div className="px-6 py-6">
					<ProductCard />
				</div>

				<div className="px-6 py-6">
					<ProductCard />
				</div>

				<div className="px-6 py-6">
					<ProductCard />
				</div>
			</div>

			<div className="grid grid-cols-4  px-6">
				<div className="px-6 py-6 ">
					<ProductCard />
				</div>

				<div className="px-6 py-6">
					<ProductCard />
				</div>

				<div className="px-6 py-6">
					<ProductCard />
				</div>

				<div className="px-6 py-6">
					<ProductCard />
				</div>
			</div>

			<div className="card-actions justify-end mr-12">
				<button className="btn btn-primary">View More</button>
			</div>
		</div>
	);
}

export default Products;
