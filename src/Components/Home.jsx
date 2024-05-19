import React, { useState } from "react";
import book from "../assets/book.svg";
function Home() {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className="lg:px-6 xl:px-0 xl:pb-24  bg-background text-colors-text">
				<div className="container mx-auto relative z-20">
					<div className="mx-auto container relative z-0 px-4 xl:px-0">
						<div className="flex flex-col-reverse md:flex-row xl:py-5">
							<div className="md:w-3/5 md:pt-24 pb-10  lg:py-32 xl:py-16 xl:ml-16 xl:pl-7">
								<h1 className="text-3xl lg:text-6xl xl:text-7xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i  leading-tight text-heading-color">
									Discover Your Next Favorite Book
								</h1>
								<h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl xl:text-2xl">
									Explore a wide range of genres and find books that inspire,
									entertain, and educate. Join our community of book lovers
									today!{" "}
								</h2>

								<button
									type="button"
									className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
								>
									Button
								</button>
								
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
