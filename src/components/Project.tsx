export interface ProjectProps {
	name: string;
	description: string;
}

const ProjectListing: React.FC<ProjectProps> = (props) => {
	return (
		<>
			<h3>{props.name}</h3>
			<p>{props.description}</p>
		</>
	);
};

export default ProjectListing;
