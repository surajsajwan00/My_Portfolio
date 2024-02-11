import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Card className="project-card bg-dark text-light" style={{ height: '100%' }}>
      <Card.Img variant="top" src={imgUrl} alt={title} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
        GitHub Repository
      </a>
    </Card>
  );
};

export { ProjectCard };
