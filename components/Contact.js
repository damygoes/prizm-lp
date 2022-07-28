import { useState } from "react";
import { useRouter } from "next/router";
import { FaCamera } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert(
			`Thank you for your message ${username}. We will get back to you shortly!`
		);
		setTimeout(() => {
			router.push("/");
			router.reload();
		}, 200);
	};

	return (
		<section
			id="contact"
			className="flex flex-col justify-start items-center min-h-screen mt-26 mb-12 gap-4 relative px-12 custom-img4 sm:px-16 md:px-20 lg:px-48 xl:px-60"
		>
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
			<div className="flex mt-32 z-[2] text-white text-4xl font-semibold mb-12">
				<span>CONTACT</span>
				<span className="text-blue-900 ml-2">US</span>
			</div>
			<div className=" flex flex-col w-full z-[2] text-white">
				<div className="mb-4 w-full ">
					<input
						className="w-full border border-white rounded-md p-3 bg-transparent outline-none transition-all duration-200 placeholder-slate-200 text-white focus:placeholder:text-blue-900 focus:border-blue-900"
						placeholder="NAME"
						type="text"
						required
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div className="mb-4">
					<input
						className="w-full border border-white rounded-md p-3 bg-transparent outline-none transition-all duration-200 placeholder-slate-200 text-white focus:placeholder:text-blue-900 focus:border-blue-900"
						placeholder="EMAIL"
						type="email"
						required
					/>
				</div>
				<div className="mb-4">
					<input
						className="w-full border border-white rounded-md p-3 bg-transparent outline-none transition-all duration-200 placeholder-slate-200 text-white focus:placeholder:text-blue-900 focus:border-blue-900"
						placeholder="CONTACT NO"
						type="tel"
					/>
				</div>
				<div className="mb-24">
					<input
						className="w-full border border-white rounded-md p-3 bg-transparent outline-none transition-all duration-200 placeholder-slate-200 text-white focus:placeholder:text-blue-900 focus:border-blue-900 h-80"
						placeholder="MESSAGE"
						type="text"
						required
					/>
				</div>
				<div className="mb-0 text-left">
					<button
						type="submit"
						onClick={handleFormSubmit}
						className="flex justify-center items-centerbg-transparent border border-white rounded-md py-4 px-8 outline-none text-xl cursor-pointer hover:bg-blue-500 hover:border-none"
					>
						SEND
						<FaCamera className="ml-2 align-text-bottom text-2xl text-blue-900 hover:text-white" />
					</button>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
