import logo from "../assets/logo";

const blogData = {
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
    //added some data for Minutes to Read emoji testing purposes
    {
      id: 4,
      title: "My Decade in Review",
      date: "January 1, 2020",
      preview: "A personal reflection.",
      minutes: 26,
    },
    {
      id: 5,
      title: "npm audit: Broken by Design",
      date: "July 7, 2021",
      preview:
        "Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)",
      minutes: 1,
    },
    {
      id: 6,
      title: "React as a UI Runtime",
      date: "February 2, 2019",
      preview: "An in-depth description of the React programming model.",
      minutes: 37,
    },
    {
      id: 7,
      title: "The “Bug-O” Notation",
      date: "January 25, 2019",
      preview: "What is the 🐞(n) of your API?",
      minutes: 6,
    },
    {
      id: 8,
      title: "The Elements of UI Engineering",
      date: "December 30, 2018",
      preview: "What makes UI engineering difficult?",
      minutes: 8,
    },
    {
      id: 9,
      title: "How Does React Tell a Class from a Function?",
      date: "December 2, 2018",
      preview:
        "We talk about classes, new, instanceof, prototype chains, and API design.",
      minutes: 61,
    },
  ],
};

export default blogData;
