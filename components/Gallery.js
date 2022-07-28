import Image from "next/image";
import { useState } from "react";
import { GalleryData } from "./GalleryData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Instagram from "./Instagram";

const Gallery = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const galleryLength = GalleryData.length;

	const handleNextImage = () => {
		setCurrentImage(currentImage === galleryLength - 1 ? 0 : currentImage + 1);
	};
	const handlePreviousImage = () => {
		setCurrentImage(currentImage === 0 ? galleryLength - 1 : currentImage - 1);
	};

	if (!Array.isArray(GalleryData) || galleryLength <= 0) {
		return null;
	}

	return (
		<section
			id="gallery"
			className="flex flex-col justify-center items-center gap-8 max-w-[1240px] h-screen mx-auto p-2 sm:p-10 sm:gap-12 md:p-20 md:gap-16 lg:gap-8"
		>
			<h1 className="self-start text-2xl capitalize font-bold p-4 mt-24 lg:mt-48">
				gallery
			</h1>
			<div className="relative flex justify-center items-center mb-24 p-8 sm:p-4 sm:mb-4 md:8 lg:p-10 ">
				{GalleryData.map((slide, index) => {
					return (
						<div
							key={index}
							className={
								index === currentImage
									? "opacity-[1] ease-in duration-1000"
									: "opacity-0"
							}
						>
							<FaArrowCircleLeft
								onClick={handlePreviousImage}
								className="absolute top-[40%] right-[82%] text-gray-600/70 cursor-pointer select-none z-[2] w-20 h-10 animate-pulse sm:text-white/70 md:top-[50%] lg:right-[85%] lg:top-[50%] xl:right-[82%]"
							/>
							{index === currentImage && (
								<Image
									src={slide.image}
									alt="gallery-image"
									width="1920"
									height="1200"
									objectFit="cover"
								/>
							)}
							<FaArrowCircleRight
								onClick={handleNextImage}
								className="absolute top-[40%] left-[82%] text-gray-600/70 cursor-pointer select-none z-[2] w-20 h-10 animate-pulse sm:text-white/70 md:top-[50%] lg:left-[85%] lg:top-[50%] xl:left-[82%]"
							/>
						</div>
					);
				})}
			</div>
			<Instagram />
		</section>
	);
};

export default Gallery;
