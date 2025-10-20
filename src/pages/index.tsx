import type { PageProps } from "@parcel/rsc";
import "../page.css";
import "../reset.css";
import "../client";
import ProjectListing from "../components/Project";

const projects: any[] = [
	{
		name: "CS:GO Web Radar",
		description: `Reads game memory using Linux syscalls to grab player positions and
			displayed it on a web front-end for others to see.`,
	},
	{
		name: "Bike Geometry Visualizer",
		description: `Allows the user to input bike geometry values (angles, lengths) and
			renders it on an SVG. Has the option to render two bikes to compare geometries.`,
	},
	{
		name: "Wireless Raspberry Pi Rover",
		description: `A wireless 4-wheeled rovor controlled using a Raspberry Pi.
			Web front-end created with React to easily control it from anywhere.`,
	},
	{
		name: "Ensemble",
		description: `A website to allow users to watch videos in-sync with each other. Created during the
			COVID pandemic for me and my friends to watch videos together.`,
	},
	{
		name: "Ubique",
		description: `Created during a hackathon. Allows users to access Wikipedia and books from the Gutenberg project completely offline through a search engine.`,
	},
];

export default function Index({ pages, currentPage }: PageProps) {
	return (
		<html lang="en">
			<head>
				<title>Matthew Huang</title>
			</head>
			<body>
				<div className="container">
					<div className="bio">
						<h1>Matthew Huang</h1>
						<p>
							Hello! I am 3rd-year CS student @ Simon Fraser
							University driven by a passion for building
							solutions and solving problems.
						</p>
						<p>
							I'm currently working as a bike mechanic where I get
							to combine my joys of problem solving and my love of
							cycling. I am eager to apply my analytical mindset
							to a Summer 2026 internship in web development or
							embedded development.
						</p>
						<p>
							Outside of my studies, you can find me cycling up
							and around Vancouver's mountains.
						</p>
						<a href="https://linkedin.com/in/matthewghuang">
							LinkedIn
						</a>
						|<a href="https://github.com/matthewghuang">GitHub</a>
					</div>
					<h2>Projects</h2>
					{projects.map((props) => (
						<ProjectListing {...props}></ProjectListing>
					))}
				</div>
			</body>
		</html>
	);
}
