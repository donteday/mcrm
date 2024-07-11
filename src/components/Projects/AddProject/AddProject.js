import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const AddProject = ({ addProject }) => {
    const projectDefault = {
        id: '',
        name: '',
        price: '',
        executor: '',
        commission: '',
        deadline: '',
        status: 'in progress',
        priority: 'medium',
        description: '',
        clientContacts: { phone: '', email: '' },
        notes: '',
        files: [],
        changeHistory: []
    };

    const [project, setProject] = useState(projectDefault);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prevProject => ({
            ...prevProject,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(project);
        addProject(project);
        setProject(projectDefault); // Reset form
    };


    return (<div className='project-add'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='project-add__label' >Id проекта</Form.Label>
                <Form.Control name="id" value={project.id} onChange={handleChange} type="number" placeholder="Id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='project-add__label' >Название проекта</Form.Label>
                <Form.Control name="name" value={project.name} onChange={handleChange} type="text" placeholder="Транспортная развязка" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='project-add__label' >Цена проекта</Form.Label>
                <Form.Control name="price" value={project.price} onChange={handleChange} type="number" placeholder="Введите цену проекта" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='project-add__label' >Срок сдачи проекта</Form.Label>
                <Form.Control name="deadline" value={project.deadline} onChange={handleChange} type="date" placeholder="Введите цену проекта" />
            </Form.Group>
            {/* 
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='project-add__label'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>);
}

export default AddProject;