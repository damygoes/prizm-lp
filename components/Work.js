import Image from "next/image";

import FlowerOne from "../assets/image 864.png";
import FlowerTwo from "../assets/image 865.png";
import FlowerThree from "../assets/image 866.png";

const Work = () => {
	return (
		<section className="grid place-items-center min-h-screen mt-26 mb-12 md:grid-cols-4 md:gap-1">
			<h4 className="font-bold text-2xl px-12 place-self-end col-span-2 sm:px-0 sm:mr-24 md:col-start-1 md:row-start-1 md:col-span-4 md:place-self-start md:mt-12 md:text-3xl md:mx-auto md:px-24">
				Floral Design is an event planning company
			</h4>
			<p className="font-thin text-sm px-12 col-span-2 place-self-start mt-8 mb-12  md:row-start-1 md:col-span-2 md:place-self-center md:col-start-1 md:mt-96">
				Your creativity, our inspiration. Whatever your story, set it free. Your
				creativity, our inspiration. Whatever your story, set it free. Your
				creativity, our inspiration.
			</p>
			<button className="mt-[-48rem] place-self-start ml-12 px-8 py-4 border rounded-lg md:col-start-2 md:row-start-2 md:place-self-center md:col-span-2 ">
				Get in Touch
			</button>
			<div className="relative h-64 w-11/12 mt-12 bg-blue-50 rounded-xl col-start-1 row-start-3 col-span-2 place-self-start sm:aspect-square md:col-start-4 md:row-start-1 md:w-full md:place-self-end">
				{/* red */}
				<Image
					src={FlowerOne}
					alt="flower"
					layout="fill"
					objectFit="cover"
					className="object-top"
				/>
			</div>
			<div className="relative h-64 w-11/12 col-start-1 row-start-4 place-self-start mt-[-5rem] bg-blue-50 rounded-xl sm:aspect-square md:col-start-1 md:row-start-1 md:col-span-3 md:w-full md:place-self-center">
				{/* pink */}
				<Image
					src={FlowerTwo}
					alt="flower"
					layout="fill"
					objectFit="cover"
					className="object-top"
				/>
			</div>
			<div className="relative h-64 w-full col-start-2 row-start-4 place-self-start mt-[-5rem] bg-blue-50 rounded-xl sm:aspect-square md:col-start-1 md:row-start-2 md:col-span-3 md:w-full md:place-self-start">
				<Image
					src={FlowerThree}
					alt="flower"
					layout="fill"
					objectFit="cover "
					className="object-top md:object-top"
				/>
			</div>
		</section>
	);
};

export default Work;
