import Image from "next/image";
import PortraitOne from "../assets/Rectangle 2.png";
import PortraitTwo from "../assets/Rectangle 3.png";
import PortraitThree from "../assets/Rectangle 4.png";
import PictureOne from "../assets/Rectangle 10.png";
import PictureTwo from "../assets/Rectangle 11.png";
import PictureThree from "../assets/Rectangle 12.png";

const Banner = () => {
	return (
		<section
			id="home"
			className="grid place-items-center min-h-screen sm:p-12 xl:p-0"
		>
			<div className="grid gap-4 p-4 max-w-5xl sm:grid-cols-4 sm:mt-12 xl:p-0">
				<h3 className="text-3xl font-extrabold sm:col-span-2 sm:place-self-end">
					Where creative process happens
				</h3>
				<p className="row-start-2 text-sm sm:col-span-2">
					Your creativity, our inspiration. Whatever your story, set it free
				</p>
				<div className="relative h-32 bg-red-500 sm:col-span-2 sm:h-auto sm:aspect-video">
					<Image
						src={PortraitOne}
						alt="photographer holding a camera"
						layout="fill"
						objectFit="cover"
						className="object-top"
					/>
				</div>
				<div className="relative h-32 bg-blue-500 sm:h-auto sm:aspect-square">
					<Image
						src={PortraitTwo}
						alt="photographer holding a camera"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative h-32 bg-yellow-500 sm:h-auto sm:aspect-square">
					<Image
						src={PortraitThree}
						alt="photographer holding a camera"
						layout="fill"
						objectFit="cover"
						className="object-top"
					/>
				</div>
			</div>
			<div className="grid gap-4 p-4 max-w-5xl sm:grid-cols-4 sm:text-right sm:mt-1 lg:grid-cols-5 xl:p-0 xl:ml-24 xl:mt-[-8rem]">
				{/* <button className="px-8 py-4 border rounded-lg capitalize text-md w-1/2 place-self-center sm:col-start-3 sm:col-span-2 sm:place-self-end sm:row-start-2">
					get to know us
				</button> */}
				<h3 className="text-3xl font-extrabold sm:col-span-3 sm:place-self-start sm:col-start-2 sm:row-start-2 sm:ml-10 lg:col-start-3 lg:place-self-center lg:mb-12">
					Where creative process happens
				</h3>
				<p className="row-start-2 text-sm sm:col-span-3 sm:col-start-2 sm:row-start-2 sm:place-self-center sm:mt-24 sm:mb-12 sm:pl-32 lg:col-start-3">
					Your creativity, our inspiration. Whatever your story, set it free
				</p>
				<div className="relative h-32 bg-zinc-500 sm:col-span-3 sm:h-auto sm:aspect-video sm:row-start-1 sm:col-start-2 lg:col-start-3 lg:mr-0">
					<Image
						src={PictureOne}
						alt="photographer holding a camera"
						layout="fill"
						// objectFit="cover"
						className="object-contain sm:object-cover sm:object-top md:object-top lg:object-top"
					/>
				</div>
				<div className="relative h-32 bg-red-500 sm:h-auto sm:aspect-auto sm:row-start-1 sm:col-start-1 lg:col-span-2">
					<Image
						src={PictureTwo}
						alt="photographer holding a camera"
						layout="fill"
						objectFit="cover"
						className="sm:object-left-bottom"
					/>
				</div>
				<div className="relative h-32 bg-orange-100 sm:h-auto sm:aspect-square sm:row-start-2 lg:col-span-2 lg:aspect-video">
					<Image
						src={PictureThree}
						alt="photographer holding a camera"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
