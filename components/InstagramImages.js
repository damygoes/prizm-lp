import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImages = ({ igImage }) => {
	return (
		<div className="relative w-28 h-28 sm:w-32 sm:h-32">
			<Image src={igImage} alt="/" className="w-full h-full" layout="responsive" />
			{/* Overlay */}
			<div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
				<p className="text-gray-300 hidden group-hover:block">
					<FaInstagram size={30} className="z-10 fill-blue-500" />
				</p>
			</div>
		</div>
	);
};

export default InstagramImages;
