/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

const AllLinksQuery = gql`
	query {
		links {
			id
			title
			url
			description
			imageUrl
			category
		}
	}
`;

export default function Home() {
	const { data, error, loading } = useQuery(AllLinksQuery);

	if (loading) {
		return <p>Loading ...</p>;
	}
	if (error) {
		return <p>Somthing went wrong, {error.message}</p>;
	}
	return (
		<div>
			<Head>
				<title>Brief Share</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<ul className="card-container">
					{data?.links.map((link) => (
						<li key={link.id} className="card-item">
							<img src={link.imageUrl} alt={link.imageUrl} />
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
