import React from "react";
import "../components/css/OurProjects.css"; // Import CSS for this specific page

const projects = [
  {
    title: "Comm-bank plant trees",
    description: "CommBank has launched an initiative focused on environmental sustainability by planting trees across various regions. This project aims to contribute to the restoration of natural habitats, reduce carbon emissions, and support local biodiversity. Through collaboration with environmental organizations, CommBank is actively investing in the future of the planet by fostering greener spaces and promoting eco-friendly practices. The initiative not only helps in improving the environment but also encourages communities to participate in sustainability efforts.",
    image: "https://vau.ac.lk/wp-content/uploads/2023/11/6C1A6600-1024x683.jpg" // Replace with your image link
  },
  {
    title: "Abans city beautification",
    description: " The Abans City Beautification project is a comprehensive initiative aimed at transforming urban spaces into greener, more aesthetically pleasing environments. By introducing vibrant greenery, floral displays, and well-maintained public spaces, this project enhances the visual appeal of the city while promoting environmental sustainability. The effort includes the installation of decorative plants, trees, and shrubs along major streets and parks, fostering a sense of community pride. It also encourages residents to adopt eco-friendly practices, contributing to a cleaner and healthier urban environment for all.",
    image: "https://archives1.dailynews.lk/sites/default/files/news/2021/05/17/20-Abans.jpg" // Replace with your image link
  },
  {
    title: "Greening colombo",
    description: "The Greening Colombo project is a transformative urban initiative aimed at enhancing the city's greenery and improving its environmental health. This project focuses on planting trees, creating green spaces, and promoting sustainable landscaping throughout Colombo. By integrating more parks, gardens, and green rooftops, it aims to reduce urban heat islands, improve air quality, and support biodiversity. The initiative also seeks to engage local communities in environmental stewardship, encouraging them to participate in the planting and maintenance of green spaces. Ultimately, Greening Colombo is a step towards a more eco-friendly, livable city that fosters a better quality of life for its residents.",
    image: "https://propertyguide.lk/_next/image?url=https%3A%2F%2Fpropertyguide-store.s3.ap-southeast-1.amazonaws.com%2Fikman%2Flarge_View_of_Town_Hall_from_Viharamahadevi_Park_7574ee9272.jpeg&w=3840&q=75" // Replace with your image link
  }
];

const OurProjects = () => {
  return (
    <div className="projectsContainer">
      <h1 className="projectsTitle">OUR PROJECTS</h1>
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.image} alt={project.title} className="projectImage" />
            <h2 className="projectTitle">{project.title}</h2>
            <p className="projectDescription">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
