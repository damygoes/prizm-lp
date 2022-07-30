import Image from "next/image";

import Member1 from "../assets/photographer-white-background.png";
import Member2 from "../assets/Rectangle 28.png";
import Member3 from "../assets/Rectangle 29.png";

const Team = () => {
	return (
		<div
			id="team"
			className="flex flex-col justify-start items-center gap-2 mb-24 min-h-screen w-screen md:justify-start md:p-12 lg:justify-start lg:p-24"
		>
			<div className="flex flex-col justify-center items-start mt-32 sm:mt-40 md:mt-16 lg:mb-16 lg:mt-44">
				<span className="uppercase text-blue-700 font-medium mb-1 text-sm sm:text-base md:text-semibold md:text-xl">
					our staff
				</span>
				<p className="capitalize text-blue-900 font-bold text-2xl sm:text-3xl md:text-4xl">
					the best team ever
				</p>
			</div>
			<div className="gap-16 mt-0 flex flex-col justify-start items-center sm:gap-4 md:justify-evenly md:w-full md:gap-16 lg:grid lg:grid-cols-3 lg:place-items-center xl:p-12">
				<div className="relative text-center w-48 h-48 mt-16 mb-8 sm:h-64 sm:w-64 sm:mt-10 md:mt-16 lg:col-start-1 lg:mt-96 xl:h-72 xl:w-72">
					<Image
						src={Member1}
						alt="photographer"
						className="w-full h-full bg-slate-400 rounded-tr-[50px] rounded-bl-xl sm:rounded-tr-[100px] sm:rounded-bl-3xl"
						layout="responsive"
					/>
					<div className="flex flex-col justify-center items-start mt-2">
						<p className="capitalize text-base font-semibold text-blue-900 sm:text-xl ">
							jake johnson
						</p>
						<p className="capitalize text-xs font-extralight sm:text-sm">
							photographer
						</p>
					</div>
				</div>
				<div className="relative text-center w-48 h-48 mb-4 sm:h-64 sm:w-64 md:mt-0 md:mb-8 lg:col-start-2 lg:mb-14 xl:h-72 xl:w-72">
					<Image
						src={Member2}
						alt="photographer"
						className="w-full h-full bg-yellow-100 rounded-tl-[50px] rounded-br-xl sm:rounded-tl-[100px] sm:rounded-br-3xl"
						layout="responsive"
					/>
					<div className="flex flex-col justify-center items-start mt-2">
						<p className="capitalize text-base font-semibold text-blue-900 sm:text-xl ">
							nick trufello
						</p>
						<p className="capitalize text-xs font-extralight sm:text-sm">
							photographer
						</p>
					</div>
				</div>
				<div className="relative text-center w-48 h-48 sm:h-64 sm:w-64 md:mt-0 lg:col-start-3 lg:mb-96 xl:h-72 xl:w-72">
					<Image
						src={Member3}
						alt="photographer"
						className="w-full h-full bg-red-900 rounded-tl-[50px] rounded-tr-[50px] sm:rounded-tl-[100px] sm:rounded-tr-[100px]"
						layout="responsive"
					/>
					<div className="flex flex-col justify-center items-start mt-2">
						<p className="capitalize text-base font-semibold text-blue-900 sm:text-xl">
							sierra jones
						</p>
						<p className="capitalize text-xs font-extralight sm:text-sm">
							photographer
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
