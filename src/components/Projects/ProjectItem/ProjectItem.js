import Badge from 'react-bootstrap/Badge';

const ProjectItem = ({ project }) => {
    return (<div className="project-item">
        <div className="project-item__name">
            <div className="project-item__id">#{project.id} </div>
            {project.name}
        </div>
        <div>
            <Badge bg="success" className='project-item__badge'>{project.deadline}</Badge>
            <Badge bg="primary" className='project-item__badge'>В работе</Badge>
        </div>

    </div>);
}

export default ProjectItem;