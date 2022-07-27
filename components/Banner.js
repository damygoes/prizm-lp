import Image from "next/image";
import PortraitOne from "../assets/Rectangle 2.png";
import PortraitTwo from "../assets/Rectangle 3.png";
import PortraitThree from "../assets/Rectangle 4.png";

const Banner = () => {
	return (
		<section className="grid place-items-center min-h-screen">
			<div className="grid gap-4 p-4 max-w-5xl sm:grid-cols-4 sm:mt-12">
				<h3 className="text-4xl font-extrabold sm:col-span-2 sm:place-self-end">
					Where creative process happens
				</h3>
				<p className="row-start-2 sm:col-span-2">
					Your creativity, our inspiration. Whatever your story, set it free
				</p>
				<div className="h-16 bg-red-500 sm:col-span-2 sm:h-auto sm:aspect-video"></div>
				<div className="h-16 bg-blue-500 sm:h-auto sm:aspect-square"></div>
				<div className="h-16 bg-gray-500 sm:h-auto sm:aspect-square"></div>
			</div>
			<div className="grid gap-4 p-4 max-w-5xl sm:grid-cols-4 sm:text-right sm:mt-1">
				<button className="capitalize text-md sm:col-start-3 sm:place-self-end sm:row-start-2 ">
					get to know us
				</button>
				<h3 className="text-4xl font-extrabold sm:col-span-2 sm:place-self-start sm:col-start-2 sm:row-start-2">
					Where creative process happens
				</h3>
				<p className="row-start-2 sm:col-span-2 sm:col-start-2 sm:row-start-2 sm:place-self-center">
					Your creativity, our inspiration. Whatever your story, set it free
				</p>
				<div className="h-16 bg-red-500 sm:col-span-2 sm:h-auto sm:aspect-video sm:row-start-1 sm:col-start-2"></div>
				<div className="h-16 bg-blue-500 sm:h-auto sm:aspect-square sm:row-start-1 sm:col-start-1"></div>
				<div className="h-16 bg-gray-500 sm:h-auto sm:aspect-square sm:row-start-2"></div>
			</div>
		</section>
	);
};

export default Banner;
