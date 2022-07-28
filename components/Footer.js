import Link from "next/link";
import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaTiktok,
	FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="flex flex-col justify-evenly items-center w-full mt-36 z-[2] text-white text-center">
			<div className="mb-12">
				<h4 className="text-2xl font-bold mb-2">PRIZM</h4>
				<p className="font-light text-sm px-8">
					Moon Street Light Avenue, 14/05 Jupiter, JP 80630
				</p>
			</div>
			<div className="flex justify-center items-center gap-6 w-full">
				<Link href="https://www.instagram.com/damy.goes/">
					<a target="_blank">
						<FaInstagram size={30} />
					</a>
				</Link>
				<Link href="https://www.facebook.com/profile.php?id=100010462448195">
					<a target="_blank">
						<FaFacebook size={30} />
					</a>
				</Link>
				<Link href="https://twitter.com/damy_goes">
					<a target="_blank">
						<FaTwitter size={30} />
					</a>
				</Link>
				<Link href="https://www.linkedin.com/in/damilolabada/">
					<a target="_blank">
						<FaLinkedin size={30} />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
