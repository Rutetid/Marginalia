import React, { useState } from "react";
import book from "../assets/book.svg";
function Home() {
    const [show, setShow] = useState(false);

    return (
					<>
						<div className="lg:px-6 xl:px-0">
							<div className="container mx-auto relative z-20">
								<div className="mx-auto container relative z-0 px-4 xl:px-0">
									<div className="flex flex-col-reverse md:flex-row xl:mt-5">
										<div className="md:w-3/5 md:pt-24 pb-10  lg:py-32 xl:py-16 xl:ml-16 xl:pl-8">
											<h1 className="text-3xl lg:text-6xl xl:text-7xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i  leading-tight text-heading-color">
												Discover Your Next Favorite Book
											</h1>
											<h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl xl:text-2xl">
												Explore a wide range of genres and find books that
												inspire, entertain, and educate. Join our community of
												book lovers today!{" "}
											</h2>
											<div className="w-full flex justify-center md:block">
												<button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-3 lg:mt-3 lg:px-10 rounded-full text-white text-sm md:text-lg f-f-p">
													Sign Up
												</button>
												
											</div>
										</div>
										<div className="w-10/12 sm:w-full md:h-auto m-auto flex items-center overflow-hidden lg:w-1/2">
											<img
												className="md:absolute md:w-1/2 md:-ml-28"
												src={book}
												alt="book"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				);
}

export default Home;
