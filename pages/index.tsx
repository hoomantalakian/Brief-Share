/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { links } from "../data/links";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Brief</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="card-container">
				<ul>
					{links.map((link) => (
						<li key={link.id} className="card-item">
							<img
								src={link.imageUrl}
								alt={link.imageUrl}
							/>
							{/* <Image
								src={link.imageUrl}
								alt="Landscape picture"
								width={500}
								height={500}
							/> */}
							<div>
								<p>{link.category}</p>
								<p>{link.title}</p>
								<p>{link.description}</p>
								<a href={link.url}>
									{link.url.replace(/(^\w+:|^)\/\//, "")}
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
