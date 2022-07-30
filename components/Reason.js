import Image from "next/image";

import Gallery from "../assets/006-gallery.png";
import Diaphragm from "../assets/003-diaphragm.png";
import Camera from "../assets/001-dslr-camera.png";
import ImageGroup from "../assets/Group 17390.png";

const Reason = () => {
	return (
		<section
			id="services"
			className="relative flex flex-col items-center justify-start min-h-screen mb-12 px-8 bg-fixed bg-center bg-cover custom-img2"
		>
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" />
			<section className="flex flex-col gap-2 text-white z-[2] mt-4 justify-evenly items-center w-full lg:mb-0">
				<h2 className="text-4xl font-bold mt-24 sm:mt-48 lg:mt-42">
					Why Choose Us
				</h2>
				<div className="flex flex-col gap-4 justify-evenly items-center mt-10 mb:4 w-full sm:mt-44 sm:flex-row lg:flex-row lg:justify-between lg:w-full lg:items-center lg:px-24 xl:justify-evenly xl:gap-16">
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="relative p-4 rounded-full h-8 w-8 sm:h-16 sm:w-16">
							<Image src={Gallery} alt="/" layout="fill" />
						</div>
						<div className="flex flex-col flex-wrap items-center justify-center gap-1 mb-6 xl:gap-2">
							<p className="capitalize font-normal text-base xl:text-2xl">
								professional editing
							</p>
							<span className="font-thin text-sm xl:text-lg">Our speciality</span>
						</div>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="relative p-4 rounded-full h-8 w-8 sm:h-16 sm:w-16">
							<Image src={Diaphragm} alt="/" layout="fill" />
						</div>
						<div className="flex flex-col flex-wrap items-center justify-center gap-1 mb-6 xl:gap-2">
							<p className="capitalize font-normal text-base xl:text-2xl">
								long hour shoots
							</p>
							<span className="font-thin text-sm xl:text-lg ">Our speciality</span>
						</div>
					</div>
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="relative p-4 rounded-full h-8 w-8 sm:h-16 sm:w-16">
							<Image src={Camera} alt="/" layout="fill" />
						</div>
						<div className="flex flex-col flex-wrap items-center justify-center gap-1 mb-6 xl:gap-2">
							<p className="capitalize font-normal text-base xl:text-2xl">
								extensive equipment
							</p>
							<span className="font-thin text-sm xl:text-lg ">Our speciality</span>
						</div>
					</div>
				</div>
			</section>
			<section className="relative flex flex-col gap-1 text-white z-[2] mt-[1.2rem] justify-evenly items-center h-3/6 sm:mt-24 md:mt-32 xl:mt-72">
				<div className="relative hidden sm:flex sm:justify-between sm:items-center sm:w-full sm:h-1/2 sm:mt-16 lg:flex-row xl:mt-[-12rem]">
					<div className="relative sm:flex sm:justify-center sm:items-center sm:w-full sm:h-96 sm:self-start sm:ml-[-2rem] md:w-1/2 lg:w-1/2 lg:mt-2 xl:w-11/12 xl:h-[600px]">
						<Image
							src={ImageGroup}
							alt="camera collage"
							layout="fill"
							className="w-full h-full"
						/>
					</div>
					<div className="sm:flex sm:flex-col sm:justify-start sm:items-center sm:w-1/2 md:items-start lg:mt-0 lg:p-0 lg:ml-12 lg:mr-4 lg:text-right lg:items-end xl:ml-28">
						<h4 className="sm:font-semibold mb-6 sm:text-2xl lg:text-3xl lg:mt-0">
							Experiments and personal projects
						</h4>
						<p className="font-thin text-xs sm:text-sm lg:text-base">
							Your ceremony and reception venues, your vision, your dress, your colours
							and anything else you would like to share with us. I am a Gold Coast and
							Brisbane.
						</p>
					</div>
				</div>
				<div className="absolute top-0 flex justify-center items-center gap-16 w-screen h-auto text-black py-4 bg-blue-50 md:top-[81.2%] md:h-1/4 md:z-[-1] md:justify-end md:pr-20 xl:top-[66.8%] xl:h-1/3">
					<div className="hidden sm:flex"></div>
					<div className="flex flex-col justify-center items-start">
						<p className="font-semibold text-2xl mb-0 lg:text-3xl">45+</p>
						<span className="text-xs font-light capitalize lg:text-sm">costumes</span>
					</div>
					<div className="flex flex-col justify-center items-start">
						<p className="font-semibold text-2xl mb-0 lg:text-3xl">56k</p>
						<span className="text-xs font-light capitalize lg:text-sm">
							occasions
						</span>
					</div>
					<div className="flex flex-col justify-center items-start">
						<p className="font-semibold text-2xl mb-0 lg:text-3xl">56+</p>
						<span className="text-xs font-light capitalize lg:text-sm">
							publications
						</span>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Reason;
