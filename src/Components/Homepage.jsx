function Homepage () {
    return (
					<div className="flex">
						<div className="grid grid-cols-12 w-full">
							<div className="col-span-6 py-5 pl-20 mt-8 mb-96">
								<h1 className="text-8xl font-bold  ">
									Discover Your Next Favorite Book
								</h1>
                                <br />
								<p className="mt-5 text-4xl leading-10">
									Explore a wide range of genres and find books that inspire,
									entertain, and educate.
									<br />
									Join our community of book lovers today!
								</p>
							</div>

							<div className="col-span-6 ml-32 pt-16 mt-4 w-96 h-96 ">
								<img
									src="https://source.unsplash.com/1600x900/?books"
									alt="books"
								/>
							</div>
						</div>
					</div>
				);
}

export default Homepage;