import Link from "next/link";
import One from "../public/1.jpg";
import Two from "../public/2.jpg";
import Three from "../public/3.jpg";
import Four from "../public/4.jpg";
import Five from "../public/5.jpg";
import Six from "../public/6.jpg";
import Seven from "../public/7.jpg";
import Eight from "../public/8.jpg";
import InstagramImages from "./InstagramImages";

const Instagram = () => {
	return (
		<div className="flex flex-col justify-start items-center text-center mb-0 mt-0 sm:w-1/2 sm:mt-0 md:w-2/3 lg:w-full ">
			<div className="text-sm font-light w-full lg:text-xl">
				see more on Instagram
				<Link href="https://www.instagram.com/damy.goes/">
					<a target="_blank">
						<span className="text-base font-semibold text-blue-500 italic cursor-pointer">
							@prizmfotos
						</span>
					</a>
				</Link>
				<div className="grid grid-cols-2 mt-8 px-8 gap-2 place-items-center sm:grid-cols-2 sm:gap-4 sm:p-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-8">
					<InstagramImages igImage={One} />
					<InstagramImages igImage={Two} />
					<InstagramImages igImage={Three} />
					<InstagramImages igImage={Four} />
					<InstagramImages igImage={Five} />
					<InstagramImages igImage={Six} />
					<InstagramImages igImage={Seven} />
					<InstagramImages igImage={Eight} />
				</div>
			</div>
		</div>
	);
};

export default Instagram;
