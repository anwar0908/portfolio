import imgl from './assets/images/img.jpg'
// import img2 from './assets/images/weather.jpg'
// import img3 from './assets/images/bot.webp'
// import img4 from './assets/images/tax.jpg'
import pro from './assets/images/project.jpg'
const logotext = "Taabish";
const meta = {
    title: "Taabish Anwar",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Taabish Anwar",
    animated: {
        first: "I am a Developer",
        second: "I Love Coding",
        third: "I can code cool Websites",
        fourth:"I am starting to develop mobile apps as well",
        fifth:"& I am foodie😊😁"
    },
    description: "Hi, I am Taabish Anwar, My Specialization is backend-develpement, but i am enjoying the front-end part as well.",
    your_img_url: imgl,
};

const dataabout = {
    title: "About my-self",
    aboutme: "Hi, my name is Taabish Anwar and i used to be a non-IT guy but my interest grew in development, so i started to learn java-script, and first I liked the back-end part interesting so I started with node-js and after that my interest also grew for front-end as well so now i am trying to become a MERN stack developer.",
};
const worktimeline = [{
        jobtitle: "Started my career as Digital-executive",
        where: "Ranchi",
        date: "2018",
    },
    {
        jobtitle: "Digital-Expert/IT/SAP",
        where: "Ranchi",
        date: "2019",
    },
    {
        jobtitle: "Back-end Developer",
        where: "",
        date: "2022",
    },
];

const skills = [{
        name: "Javascript",
        value: 80,
    },
    {
        name: "Node-JS",
        value: 80,
    },
    {
        name: "HTML",
        value: 85,
    },
    {
        name: "CSS",
        value: 65,
    },
    {
        name: "React-JS",
        value: 55,
    },
    {
        name: "React-Native",
        value:30 ,
    },
    {
        name: "Mongo_DB",
        value: 80,
    },
    {
        name: "GIT/Github",
        value: 85,
    },
    {
        name: "Express",
        value: 80,
    },
    {
        name: "AWS-S3",
        value: 75,
    },
    {
        name: "Type-Script",
        value: 60,
    },
    {
        name: "My-Sql",
        value: 30,
    },
    {
        name: "Caching with Redis",
        value: 70,
    },
];

const services = [{
        title: "Web-Development",
        description: "HTML, CSS, JS, React & Mongo-Db i can use all these technologies to create a design, which you will like for sure.",
    },
    {
        title: "Responsive Design",
        description: "Responsive Design is something which is in demand, you can't go online without having a website which is not comfortable with all screen size's, i can get that cover for you.",
    },
    {
        title: "Site-Maintenance",
        description: "Can also look for your website, update its content, fix bugs time to time.",
    },
    {
        title: "Graphic Design",
        description: "This is something which is required by every-one, wheather it is an invitation, flyer's or something else.",
    },
    {
        title: "Video-Editing",
        description: "I can add some good effect and transition to your raw video and you can use it for your social profils.",
    },
];

const dataportfolio = [{
        img: pro,
        desctiption: "Weather App designed with React and data fetching through Axios",
        link: "https://react-code-resolver-weather-ap.herokuapp.com/",
    },
    {
        img: pro,
        desctiption: "Tele-Chat-Bot V 1.0 designed for testing with the help of Bot-father from telegram ",
        link: "https://github.com/Taabish0908/tele-chat-bot",
    },
    {
        img: pro,
        desctiption: "Tax Management System with the role base access ",
        link: "https://github.com/Taabish0908/Tax_Management",
    },
    {
        img: pro,
        desctiption: "Mini-Blog website, designed the backend of the blog website where a user can register himself and as blogger and write blogs and perform other CRUD operations.",
        link: "https://github.com/Taabish0908/project1-mini-blog-site",
    },
    {
        img: pro,
        desctiption: "Product_Management, Designed the backend of the e-commerce website where user can login and buy products, he can add items to the cart, update it , delete it and can also order it as well, this is without payment integration.",
        link: "https://github.com/Taabish0908/Project-5-Products-Management",
    },
    {
        img: pro,
        desctiption: "URL-Shortner, tried to replicate the Bitly url shortening service, which is generally used to shorten the long url to a customised one, implemented redis for quick data fetching and minimizing the DB call.",
        link: "https://github.com/Taabish0908/Project4-Url-Shortner",
    },

    {
        img: pro,
        desctiption: "Book-Management, this is also with the backend part which is online site/book library where user can register themselve's as the auther and create their book, other user can read them write reviews. ",
        link: "https://github.com/Taabish0908/Project3-Book-Management",
    },
    {
        img: pro,
        desctiption: "Open To intern, it is basically a mini project where user can register themselves for college where they want to be an intern, a user can register for only 1 college & when fetching student data, college details also come's with it and vice versa",
        link: "https://github.com/Taabish0908/Project-2-Open-to-Intern",
    },
    // {
    //     img: pro,
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: pro,
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: pro,
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: pro,
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "taabish.innodel@gmail.com",
    YOUR_FONE: "**********",
    description: "Please do connect with me, if you have any issue or you want anything else. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_7mznp3a",
    YOUR_TEMPLATE_ID: "template_ijhuhyu",
    YOUR_USER_ID: "-KW0sRVqeb2HgO3NY",
};

const socialprofils = {
    github: "https://github.com/Taabish0908/",
    facebook: "https://www.facebook.com/taabish.anwar",
    linkedin: "https://www.linkedin.com/in/taabishanwar-977967134/",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    instagram: "https://www.instagram.com/taabish_anwar/?hl=en",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
