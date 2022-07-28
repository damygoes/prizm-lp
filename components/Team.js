import Image from "next/image";

import Member1 from "../assets/photographer-white-background.png";
import Member2 from "../assets/Rectangle 28.png";
import Member3 from "../assets/Rectangle 29.png";

const Team = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-2 h-screen w-screen mt-24 md:justify-start md:p-12 lg:justify-start lg:p-12">
			<div className="flex flex-col justify-center items-start lg:mb-24">
				<span className="uppercase text-blue-700 font-medium text-base mb-1 ">
					our staff
				</span>
				<p className="capitalize text-blue-900 font-bold text-3xl">
					the best team ever
				</p>
			</div>
			<div className="flex flex-col justify-start items-center md:flex-row md:justify-evenly md:w-full md:gap-6 lg:flex-row lg:justify-evenly lg:w-full">
				<div className="relative text-center w-64 mb-4 mt-16 md:mt-60 lg:mt-56">
					<Image
						src={Member1}
						alt="photographer"
						className="w-full h-full bg-slate-400 rounded-tr-[100px] rounded-bl-3xl"
						layout="responsive"
					/>
					<div className="flex flex-col justify-center items-start mt-4">
						<p className="capitalize text-xl font-semibold text-blue-900">
							jake johnson
						</p>
						<p className="capitalize text-sm font-extralight">photographer</p>
					</div>
				</div>
				<div className="relative text-center w-64 my-8 md:mt-36 lg:mb-14">
					<Image
						src={Member2}
						alt="photographer"
						className="w-full h-full bg-yellow-100 rounded-tl-[100px] rounded-br-3xl"
						layout="responsive"
					/>
					<div className="flex flex-col justify-center items-start mt-4">
						<p className="capitalize text-xl font-semibold text-blue-900">
							nick trufello
						</p>
						<p className="capitalize text-sm font-extralight">photographer</p>
					</div>
				</div>
				<div className="relative text-center w-64 my-8 md:mt-0 lg:mb-12">
					<Image
						src={Member3}
						alt="photographer"
						className="w-full h-full bg-red-900 rounded-tl-[100px] rounded-tr-[100px]"
						layout="responsive"
					/>
					<div className="flex flex-col justify-center items-start mt-4">
						<p className="capitalize text-xl font-semibold text-blue-900">
							sierra gonzalez
						</p>
						<p className="capitalize text-sm font-extralight">photographer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
