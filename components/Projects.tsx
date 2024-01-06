import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Projects: React.FC = () => {
  const projects = useMemo(() => [
    {
      title: 'Kaddy Marketplace',
      description: 'Kaddy Marketplace is a simple solution for managing beverage discovery, ordering and payments.',
      technologies: 'Tech Stack: Chakra UI, Styled Components, Zustand, Heroku, Vercel, Sentry, Honeycomb, Algolia, FullStory, Segment, Stripe, Zepto Payments, Golang, Apollo GraphQL, TypeScript, NextJS, PostgreSQL, Docker',
      imageUrls: ['/images/kaddy-marketplace-1.png', '/images/kaddy-marketplace-2.png'],
      projectLink: 'https://www.kaddy.com.au/',
      proprietary: true
    },
    {
      title: 'Kaddy Connect',
      description: 'Kaddy Connect is an inventory, sales, and shipment management system designed for warehouses to manage and track their products and orders.',
      technologies: 'Tech Stack: NextJS (Redux), SASS, Laravel, MySQL, AWS (S3, EC2, Elastic Beanstalk, SQS, Amplify, Code Pipeline), CartonCloud, Xero, Auspost',
      imageUrls: ['/images/kaddy-connect-1.png', '/images/kaddy-connect-2.png'],
      projectLink: 'https://www.kaddy.com.au/',
      proprietary: true
    },
    {
      title: 'DHSUD Housing Loan App',
      description: 'The goal of DHSUD is to prioritize individuals who are in need and qualified for housing. The government aims to accomplish 1M houses every year and with the help of the webapp we would be able to speed up the process of reservation of houses for the contractors. It provides the platform for the borrowers to select the project of the contractor, reserve the house they plan to buy and provide them the payment schedule that they need to do monthly. It does KYC for the borrower and make payment collections via Gcash, Debit Card and etc. monthly.',
      technologies: 'Tech Stack: NextJS PWA, Typescript, Tailwind, Zustand, Vercel, Django, AWS, GCash, Stripe',
      imageUrls: ['/images/dhsud-1.png', '/images/dhsud-2.png', '/images/dhsud-3.png'],
      projectLink: 'https://www.finnoven.ph/',
      proprietary: true
    },
    {
      title: 'ICAO SMS TOOL',
      description: 'An accident reporting system for the aviation Industry.',
      technologies: 'Tech Stack: ReactJS (Redux), Tailwind CSS, Laravel, MySQL, Swagger',
      imageUrls: ['/images/icao.png'],
      projectLink: 'https://www.infina.net/',
      proprietary: true
    },
    {
      title: 'MedCenter',
      description: 'MedCenter is our Hospital Information System (HIS) for small hospitals. It is a comprehensive, integrated information system designed to manage all aspects of the hospital’s operations including medical, administrative, financial, and legal operations, procedures, and processes. Available modules:	ADT – Admission, Discharge Transfer, DocTool – computerized physician order entry, NurseTool – nurse charting and noting, Results Management, EClaims – PhilHealth benefit eligibility and claims',
      technologies: 'Tech Stack: Yii2, Core PHP, JQuery, Nativescript-Angular + Firebase, ReactJS (Redux), Bootstrap, PostgreSQL, Robot Framework',
      imageUrls: ['/images/salusciens-1.png', '/images/salusciens-2.png'],
      projectLink: 'https://www.salusciens.com/',
      proprietary: true
    },
    {
      title: 'MedBook',
      description: 'MedBook, formerly MedRemind, is a personal healthcare network that gives you access to your doctors, prescriptions, diagnostic test results, medications, and much more at your fingertips.',
      technologies: 'Tech Stack: Nativescript - Angular, Firebase',
      imageUrls: [],
      projectLink: 'https://www.salusciens.com/',
      proprietary: true
    },
    {
      title: 'MedLab',
      description: 'MedLab is a laboratory information system that is designed to improve access to quality diagnostic testing and provide accurate, timely information for patient care, public health planning and policy decisions. This consist of five modules namely: user management, login and authentication, examination request, results management, and reports module.',
      technologies: 'Tech Stack: Yii2, Bootstrap, JQuery, MySQL',
      imageUrls: [],
      projectLink: 'https://www.salusciens.com/',
      proprietary: true
    },
    {
      title: 'Farmako',
      description: 'Farmako is a pharmacy inventory system that provides available stock items for the consumer/patient’s needs. The main goal of this module is to show the different medicines available with its details like the medicine’s generic and brand name, number of dosage, quantity, category and manufacturer. The user can track, withdraw, deposit, void medicines and generate report via pdf based from the time interval set by the user. This project is an exercise to test my skills for them to evaluate if I am ready to be part of an official project - the Laboratory Information System (LIS).',
      technologies: 'Tech Stack: Yii2, Bootstrap, JQuery, PostgreSQL',
      imageUrls: ['/images/farmako.png'],
      projectLink: 'https://github.com/ketuvin/Pharmacy-Inventory-System',
      proprietary: false
    },
    {
      title: 'DiaPlan',
      description: 'DiaPlan is an expert system that serves as a tool for the patient who has type-2 diabetes in determining the proper daily menu of meals. This expert system intends to provide alternative approaches to meal management in the absence of the nutritionist/dietitian expert.',
      technologies: 'Tech Stack: Flex Expert System, HTML, CSS',
      imageUrls: ['/images/diaplan.png'],
      projectLink: 'https://github.com/ketuvin/DiaPlan-A-Web-Expert-System-for-Generating-Daily-Menu-for-Newly-Diagnosed-Type-2-Diabetic',
      proprietary: false
    },
    {
      title: 'Basic Scientific Calculator App',
      description: 'This is a simple scientific calculator web app. It features a dark and light mode toggle and supports basic mathematical and scientific functions.',
      technologies: 'Tech Stack: NextJS, Typescript, Tailwind CSS, Zustand',
      imageUrls: ['/images/calculator-1.png', '/images/calculator-2.png'],
      projectLink: 'https://github.com/ketuvin/calculator-app',
      proprietary: false
    },
    {
      title: 'Linamon COVID Tracker API',
      description: 'Basic API Service for Linamon COVID tracker system: https://github.com/zeejay09/linamon-covid-tracker.',
      technologies: 'Tech Stack: Laravel, MySQL',
      imageUrls: [],
      projectLink: 'https://github.com/ketuvin/Linamon-COVID-tracker-API',
      proprietary: false
    },
    {
      title: 'RAID Simulation Applet',
      description: 'This project is a UI simulation of the data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both. Specifically, it simulates  RAID levels 1 to 6 in its basic process.',
      technologies: 'Tech Stack: Java, JavaFX',
      imageUrls: ['/images/raid-gui-preview.jpg'],
      projectLink: 'https://github.com/ketuvin/RAID-SIMULATION',
      proprietary: false
    }
  ], []);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const changePage = (page: number) => {
    setCurrentPage(page);
    setCurrentProjectIndex(-1); // Reset the active project index when changing the page
  };

  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(-1);

  const openProjectLink = (projectLink: string) => {
    window.open(projectLink, '_blank');
  };

  return (
    <section id="projects" className={`opacity-0 animate-fade-in`}>
      <h2>Projects</h2>
      <div className={styles.projectSlider}>
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className={`${styles.project} ${index === currentProjectIndex ? styles.active : ''}`}
            onClick={() => openProjectLink(project.projectLink)}
          >
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <p className={styles.projectTech}>{project.technologies}</p>
            {project.imageUrls.length > 0 && (
              <div className={styles.imageGallery}>
                {project.imageUrls.map((imageUrl, imageIndex) => (
                  <div key={imageIndex} className={styles.galleryImage}>
                    <Image
                      src={imageUrl}
                      alt={`${project.title} - Image ${imageIndex + 1}`}
                      width={400}
                      height={300}
                    />
                  </div>
                ))}
              </div>
            )}
            {
              project.proprietary && (
                <button className={styles.proprietary}>Proprietary Software &#128274;</button>
              )
            }
          </div>
        ))}
      </div>
      <div className={styles.projectNav}>
      <p>Note: Some proprietary projects will redirect to company website.</p>
        <a className={styles.prev} onClick={() => changePage((currentPage - 1 + totalPages) % totalPages)}>
          &#10094; Prev Page
        </a>
        <a className={styles.next} onClick={() => changePage((currentPage + 1) % totalPages)}>
          Next Page &#10095;
        </a>
      </div>
    </section>
  );
};

export default Projects;
