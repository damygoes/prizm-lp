import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reason from "../components/Reason";
import Work from "../components/Work";

export default function Home() {
	return (
		<main>
			<Head>
				<title>PRIZM Photography</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Navbar />
				<Hero
					heading="Welcome to PRIZM Photography"
					subheading="You dream, We create. You live, We capture"
				/>
				<Banner />
				<Reason />
				<Work />
			</>
		</main>
	);
}
