import Image from "next/image";

import Gallery from "../assets/006-gallery.png";
import Diaphragm from "../assets/003-diaphragm.png";
import Camera from "../assets/001-dslr-camera.png";
import ImageGroup from "../assets/Group 17390.png";

const Reason = () => {
	return (
		<section className="flex flex-col items-center justify-start h-screen mb-12 bg-fixed bg-center bg-cover custom-img2 ">
			{/* Overlay */}
			<div className="absolute top-[203.5%] left-0 right-0 bottom-[-203.8%] bg-black/80 z-[2]" />
			<section className="flex flex-col gap-2 p-5 text-white z-[2] my-12 justify-evenly items-center h-3/6">
				<h2 className="text-4xl font-bold mt-24 sm:mt-48">Why Choose Us</h2>
				<div className="flex flex-col gap-2 my-12">
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="p-4 rounded-full bg-gray-900 h-20 ">
							<Image src={Gallery} />
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mb-6">
							<p className="capitalize font-normal text-xl">professional editing</p>
							<span className="font-thin text-xs">
								Your creativity, Our inspiration
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="p-4 rounded-full bg-gray-900 h-20">
							<Image src={Diaphragm} />
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mb-6">
							<p className="capitalize font-normal text-xl">long hour shoots</p>
							<span className="font-thin text-xs">
								Your creativity, Our inspiration
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="p-4 rounded-full bg-gray-900 h-20">
							<Image src={Camera} />
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mb-6">
							<p className="capitalize font-normal text-xl">extensive equipment</p>
							<span className="font-thin text-xs">
								Your creativity, Our inspiration
							</span>
						</div>
					</div>
				</div>
			</section>
			<section className="relative flex flex-col gap-1 p-0 text-white z-[2] mt-0 justify-evenly items-center h-3/6">
				<div className="flex flex-col justify-between items-center w-full sm:mt-[-12rem]">
					<div className="hidden sm:flex justify-start items-center w-1/2 mt-40 self-start">
						<Image src={ImageGroup} alt="camera collage" />
					</div>
					<div className="flex flex-col justify-start items-center w-full p-10 mt-[-22rem] sm:w-1/2 text-right sm:mt-[-30rem] sm:ml-72 md:ml-96">
						<h4 className="font-semibold text-lg mt-32 mb-6 sm:text-2xl">
							Experiments and personal projects
						</h4>
						<p className="font-thin text-xs sm:text-sm">
							Your ceremony and reception venues, your vision, your dress, your colours
							and anything else you would like to share with us. I am a Gold Coast and
							Brisbane.
						</p>
					</div>
				</div>
				<div className="absolute top-[73%] flex justify-evenly items-center bg-blue-50 w-full z-[-1] h-36 gap-8 text-black px-6  sm:justify-end sm:gap-14">
					<div className="hidden sm:flex"></div>
					<div className="flex flex-col justify-center items-start">
						<p className="font-semibold text-4xl mb-2">45+</p>
						<span className="text-xs font-light capitalize">costumes</span>
					</div>
					<div className="flex flex-col justify-center items-start">
						<p className="font-semibold text-4xl mb-2">56k</p>
						<span className="text-xs font-light capitalize">occasions</span>
					</div>
					<div className="flex flex-col justify-center items-start">
						<p className="font-semibold text-4xl mb-2">56+</p>
						<span className="text-xs font-light capitalize">publications</span>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Reason;
