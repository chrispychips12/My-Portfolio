const express = require('express');
const router = express.Router();
const { myProjects, groupProjects, techLogos } = require('../models/projectModel');

const journeyItems = [
    {
        year: "2024",
        title: "Talent Sourcer @ Immutable",
        date: "2024",
        description: "As a Talent Sourcer, I'm responsible for finding and attracting top-tier talent for tech companies. This involves sourcing candidates through various channels, screening resumes, and providing sourcing support and strategies to the TA function.",
        color: "#00FFFF"
    },
    {
        year: "2024",
        title: "USYD Coding Student",
        date: "2024",
        description: "Coding Bootcamp Student, learning the ropes of web development and beyond.",
        color: "#FF00FF"
    },
    {
        year: "2024",
        title: "Talent Acquisition Specialist @ Talent International",
        date: "2024 - Present",
        description: "As a Talent Acquisition Specialist, I help companies with their TA function, supporting across various functions to improve their quality of standard and find top talent for their business.",
        color: "#00FFFF"
    },
    {
        year: "2021",
        title: "Recruitment Consultant @ Scouut",
        date: "2021 - 2024",
        description: "As a recruitment consultant at Scouut, I was responsible for sourcing and recruiting top talent for various clients in the tech industry.",
        color: "#FF00FF"
    },
    {
        year: "2019",
        title: "Senior Team Lead / Sales Consultant @ ShineHub",
        date: "2019 - 2021",
        description: "As a Senior Team Lead / Sales Consultant at ShineHub, I was responsible for leading a team of recruiters and sales consultants, as well as managing customer relationships and ensuring the delivery of high-quality services.",
        color: "#00FFFF"
    },
    {
        year: "2018",
        title: "Senior Customer Service Specialist @ CommInsure / AIA",
        date: "2018-2019",
        description: "As a senior customer service specialist, I helped customers with their insurance needs, and maintained a high level of customer satisfaction.",
        color: "#FF00FF"
    }
];

router.get('/', (req, res) => {
    res.render('home', {
        journeyItems: journeyItems,
        myProjects: myProjects,
        groupProjects: groupProjects,
        techLogos: techLogos
    });
});

module.exports = router;