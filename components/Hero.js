import Link from "next/link";
import { FaMouse } from "react-icons/fa";

const Hero = ({ heading, subheading }) => {
	return (
		<section
			id="home"
			className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img text-center lg:text-right"
		>
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
			<div className="p-5 text-white z-[2] mt-[-10rem]">
				<h2 className="text-3xl font-bold lg:text-4xl">{heading}</h2>
				<p className="py-5 text-lg font-thin mb-12">{subheading}</p>

				<button className="flex justify-end items-center w-full gap-4 px-8 py-4 cursor-s-resize border-none text-sm lg:text-lg">
					<span className="animate-pulse">scroll down</span>
					<FaMouse size={25} className="animate-bounce" />
				</button>
			</div>
		</section>
	);
};

export default Hero;
