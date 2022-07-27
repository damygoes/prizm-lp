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
			<section className="flex flex-col gap-2 p-5 text-white z-[2] my-24 justify-evenly items-center h-3/6">
				<h2 className="text-5xl font-bold mt-24">Why Choose Us</h2>
				<div className="flex flex-col gap-4 my-16">
					<div className="flex flex-col gap-6 items-center justify-center">
						<div className="p-4 rounded-full bg-gray-900 h-20 ">
							<Image src={Gallery} />
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mb-8">
							<p className="capitalize font-normal text-xl">professional editing</p>
							<span className="font-thin text-xs">
								Your creativity, Our inspiration
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-6 items-center justify-center">
						<div className="p-4 rounded-full bg-gray-900 h-20">
							<Image src={Diaphragm} />
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mb-8">
							<p className="capitalize font-normal text-xl">long hour shoots</p>
							<span className="font-thin text-xs">
								Your creativity, Our inspiration
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-6 items-center justify-center">
						<div className="p-4 rounded-full bg-gray-900 h-20">
							<Image src={Camera} />
						</div>
						<div className="flex flex-col items-center justify-center gap-2 mb-8">
							<p className="capitalize font-normal text-xl">extensive equipment</p>
							<span className="font-thin text-xs">
								Your creativity, Our inspiration
							</span>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-1 p-0 text-white z-[2] mt-8 justify-evenly items-center h-3/6">
				<div className="flex justify-between items-center w-full">
					<div className="flex justify-start items-center w-3/4">
						<Image src={ImageGroup} alt="camera collage" />
					</div>
					<div className="flex flex-col justify-start items-start w-2/4 mx-2 mt-[-10rem]">
						<h4 className="font-semibold text-2xl mt-0 mb-8">
							Experiments and personal projects
						</h4>
						<p className="font-thin text-sm">
							Your ceremony and reception venues, your vision, your dress, your colours
							and anything else you would like to share with us. I am a Gold Coast and
							Brisbane.
						</p>
					</div>
				</div>
				<div className="flex justify-end items-center mt-[-8.4rem] bg-blue-50 w-full z-[-1] h-36 gap-8 text-black px-6">
					<div></div>
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
