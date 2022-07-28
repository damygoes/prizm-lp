import Image from "next/image";
import Link from "next/link";

import FlowerOne from "../assets/image 864.png";
import FlowerTwo from "../assets/image 865.png";
import FlowerThree from "../assets/image 866.png";

const Work = () => {
	return (
		<section
			id="work"
			className="relative flex flex-col justify-center items-center min-h-screen mt-26 mb-12 gap-4 pb-10 custom-img3 sm:grid sm:place-items-center sm:px-24 sm:mt-50 md:grid-cols-4 md:gap-1 md:px-24 md:mt-52 lg:mt-56 lg:px-24 lg:py-20 xl:px-40"
		>
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
			<h4 className="font-bold text-2xl px-12 mt-32 z-[2] text-white sm:place-self-end sm:col-span-2 sm:px-0 sm:mr-0 sm:ml-12 md:col-start-1 md:row-start-1 md:col-span-4 md:place-self-start md:mt-12 md:text-3xl md:mx-auto md:pr-48 md:ml-0 lg:text-3xl lg:px-0 lg:col-start-1 lg:col-span-3">
				Floral Design -{" "}
				<span className="italic font-thin text-blue-300">
					an event planning company
				</span>
			</h4>
			<p className="font-thin text-sm px-12 sm:col-span-2 z-[2] text-white sm:place-self-start sm:mt-8 sm:mb-12  md:row-start-1 md:col-span-2 md:place-self-center md:col-start-1 md:mt-96 md:p-0 lg:text-lg lg:place-self-start lg:mt-40 lg:col-start-1 lg:col-span-2 lg:px-2">
				Your creativity, our inspiration. Whatever your story, set it free. Your
				creativity, our inspiration. Whatever your story, set it free. Your
				creativity, our inspiration.
			</p>
			<Link href="/#contact">
				<button className="px-8 py-4 border rounded-lg mt-8 z-[2] text-white cursor-pointer hover:bg-blue-500 hover:border-none sm:mt-[-52rem] sm:place-self-start sm:ml-12 md:col-start-1 md:row-start-2 md:place-self-start md:mt-[-10rem] md:ml-0 md:col-span-2 lg:place-self-start lg:ml-[-24rem] lg:mt-[-62rem]">
					Get in Touch
				</button>
			</Link>
			<div className="relative h-64 bg-blue-50 rounded-xl w-3/4 mt-24 z-[2] sm:w-full sm:mt-12 sm:col-start-1 sm:row-start-3 sm:col-span-2 sm:place-self-start sm:aspect-square md:col-start-4 md:row-start-1 md:w-full md:place-self-end lg:place-self-center xl:place-self-end">
				{/* red */}
				<Image
					src={FlowerOne}
					alt="flower"
					layout="fill"
					// objectFit="contain"
					className="object-contain sm:object-cover sm:object-top"
				/>
			</div>
			<div className="relative h-64 bg-blue-50 rounded-xl w-3/4 z-[2] sm:w-11/12 sm:col-start-1 sm:row-start-4 sm:place-self-start sm:mt-[-5rem] sm:aspect-square md:col-start-1 md:row-start-1 md:col-span-3 md:w-full md:place-self-center lg:row-start-1 lg:mt-24 lg:col-span-3 lg:place-self-start xl:place-self-center">
				{/* pink */}
				<Image
					src={FlowerTwo}
					alt="flower"
					layout="fill"
					// objectFit="cover"
					className="object-contain sm:object-cover sm:object-top md:object-top"
				/>
			</div>
			<div className="relative h-64 w-3/4 bg-blue-50 rounded-xl z-[2]  sm:w-full sm:col-start-2 sm:row-start-4 sm:place-self-start sm:mt-[-5rem] sm:aspect-square md:col-start-1 md:row-start-2 md:col-span-3 md:w-full md:place-self-start lg:mt-[-12rem] xl:h-96 xl:aspect-square xl:place-self-center">
				<Image
					src={FlowerThree}
					alt="flower"
					layout="fill"
					// objectFit="cover "
					className="object-contain sm:object-cover sm:object-top md:object-left xl:object-contain"
				/>
			</div>
		</section>
	);
};

export default Work;
