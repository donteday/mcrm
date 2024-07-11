// import Button from 'react-bootstrap/Button';
import ProjectItem from './ProjectItem/ProjectItem';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Projects.css';
import AddProject from './AddProject/AddProject';
import { useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 21,
            name: "БАРВИХА",
            price: 100000, // Project cost in your currency
            executor: "Антон",
            commission: 80000, // Percentage of the price that the executor will receive
            deadline: "2024-12-31", // Project deadline date
            status: "in progress", // Project status: 'in progress', 'completed', 'cancelled'
            priority: "high", // Project priority: 'low', 'medium', 'high'
            description: "Brief project description",
            clientContacts: {
                phone: "+71234567890",
                email: "client@example.com"
            },
            notes: "Any additional notes about the project",
            files: ["design_link", "requirements_link"], // Links to files related to the project
            changeHistory: [
                {
                    date: "2024-07-10",
                    changes: "Project created"
                },
                // Other change records
            ]
        },
        {
            id: 74,
            name: "Транспортная развязка УФА",
            price: 100000, // Project cost in your currency
            executor: "Фаррух",
            commission: 80000, // Percentage of the price that the executor will receive
            deadline: "2024-12-31", // Project deadline date
            status: "in progress", // Project status: 'in progress', 'completed', 'cancelled'
            priority: "high", // Project priority: 'low', 'medium', 'high'
            description: "Brief project description",
            clientContacts: {
                phone: "+71234567890",
                email: "client@example.com"
            },
            notes: "Any additional notes about the project",
            files: ["design_link", "requirements_link"], // Links to files related to the project
            changeHistory: [
                {
                    date: "2024-07-10",
                    changes: "Project created"
                },
                // Other change records
            ]
        },
    ]);

    function addProject(newProject) {
        setProjects(prevProjects => [...prevProjects, newProject]);
    }

    return (<div className="bg-body-tertiary projects bg-light projects" bg="primary" data-bs-theme="dark">
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 projects-tab"
            bg="primary"
        >
            <Tab eventKey="home" title="+">
                <AddProject addProject={addProject} />
            </Tab>
            <Tab eventKey="profile" title="В работе">
                {projects.map((e, index) => (
                    <ProjectItem project={e} />
                )
                )}
            </Tab>
            <Tab eventKey="contact" title="Архив">
                Tab content for Contact
            </Tab>
        </Tabs>


        {/* <Button variant="primary">Добавить</Button>{''} */}

    </div>);
}

export default Projects;