const Hero = ({ heading, subheading }) => {
	return (
		<section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img text-center">
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
			<div className="p-5 text-white z-[2] mt-[-10rem]">
				<h2 className="text-3xl font-bold">{heading}</h2>
				<p className="py-5 text-lg font-thin mb-12">{subheading}</p>
				<button className="px-8 py-4 border rounded-lg">Get in Touch</button>
			</div>
		</section>
	);
};

export default Hero;
