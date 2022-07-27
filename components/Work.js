import Image from "next/image";

import FlowerOne from "../assets/image 864.png";
import FlowerTwo from "../assets/image 865.png";
import FlowerThree from "../assets/image 866.png";

const Work = () => {
	return (
		<section className="grid place-items-center min-h-screen mt-32 mb-12">
			<h4 className="font-bold text-3xl px-24 mb-4">
				Floral Design is an event planning company
			</h4>
			<p className="font-thin text-sm px-24">
				Your creativity, our inspiration. Whatever your story, set it free. Your
				creativity, our inspiration. Whatever your story, set it free. Your
				creativity, our inspiration.
			</p>
			<button className="mt-8 place-self-start ml-24">Get in Touch</button>
			<div className="relative h-64 w-1/2 mt-12 bg-blue-50 rounded-xl">
				<Image
					src={FlowerOne}
					alt="flower"
					layout="fill"
					objectFit="cover"
					className="object-top"
				/>
			</div>
			<div className="relative h-64 w-2/3 mt-12 bg-blue-50 rounded-xl">
				<Image
					src={FlowerTwo}
					alt="flower"
					layout="fill"
					objectFit="cover"
					className="object-top"
				/>
			</div>
			<div className="relative h-64 w-3/4 mt-12 bg-blue-50 rounded-xl">
				<Image
					src={FlowerThree}
					alt="flower"
					layout="fill"
					objectFit="cover"
					className="object-top"
				/>
			</div>
		</section>
	);
};

export default Work;
