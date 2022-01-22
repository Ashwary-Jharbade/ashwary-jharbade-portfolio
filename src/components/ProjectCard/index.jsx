const ProjectCard = (props) => {
  const { gitUrl, imageAlt, imageUrl, title, tags } = props;
  return (
    <a href={gitUrl} target="_blank">
      <div className="project-card">
        <div className="project-card-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <div className="project-card-details">
          <div className="title">{title}</div>
          <div className="tags">{tags}</div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
