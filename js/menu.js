const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
  menuToggle();
  menuIcon.classList.toggle("scale-105");
});

// Only add this listener once!
list.addEventListener("click", () => {
  dropdownMenu.classList.remove("flex");
  dropdownMenu.classList.add("hidden");
});

function menuToggle() {
  dropdownMenu.classList.toggle("hidden");
  dropdownMenu.classList.toggle("flex");
}

//Projects Lists

const projectList = [
  {
    id: 5,
    title: "Growth Mantra",
    img: "../images/Growth.png",
    githubLink: "https://github.com/omitrends/growth-mantra",
    live: "https://growth-teal.vercel.app/",
    desc: "Developed a daily journal app with 3 core modules: Fitness (workout logging), Nutrition (diet tracking+ recommendations), and Mental Wellbeing (mood tracking)", 
  },
  {
    id: 6,
    title: "Intelligent Talent Acquisition System",
    img: "../images/iTAS.jpeg",
    githubLink: "https://github.com/Guru-Dharpale/iTAS",
    // live: "https://tech-site-p-r.vercel.app/",
    desc: "We have developed an 'Intelligent Talent Acquisition System' designed to revolutionize the hiring process.",
  },
  {
    id: 1,
    title: "Quiz App",
    img: "../images/quiz_page.png",
    // githubLink: "https://github.com/Techwolf78/PlayStation.git",
    // live: "https://playstation-web.vercel.app/",
    desc: "The Quiz Application is a comprehensive platform that offers a variety of quizzes, including technical, games, sports, and more.",
  },
  // {
  //   id: 2,
  //   title: "Notes App",
  //   img: "build/img/note.png",
  //   githubLink: "https://github.com/Techwolf78/Notes-App.git",
  //   live: "https://notes-web-app-tau.vercel.app/",
  //   desc: "This is a web app built with React that can save and delete notes to the computer's local storage. It features a search bar and a dark mode toggler.",
  // },
  // {
  //   id: 3,
  //   title: "Educational Website",
  //   img: "build/img/edu.png",
  //   githubLink: "https://github.com/Techwolf78/Educational-Website.git",
  //   live: "https://brighty-nerd.vercel.app/",
  //   desc: "This is a educational website using HTML, CSS, and JavaScript ",
  // },
  // {
  //   id: 4,
  //   title: "Weather App",
  //   img: "build/img/weather.png",
  //   githubLink: "https://github.com/Techwolf78/Weather-App.git",
  //   live: "https://weather-app-react-tech.vercel.app/",
  //   desc: "A weather app made using React library",
  // },
];

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList) {
  let displayProjects = projectsList.map(function (item) {
    return `
        <div class="project-card" class="text-gray-300">
            <img src= ${item.img} alt=${item.title}>
            <h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2>
            <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
              <a href=${item.live} target="_blank"><p class="text-sm lg:text-lg">View Project</p></a>
              <a href="${item.githubLink}" target="_blank"><img src="../images/footer-github.png" alt="github-link""></a>
            </div>
            <p class="m-1 w-4/5 text-xs lg:text-base">${item.desc}</p>
        </div>`;
  });
  displayProjects = displayProjects.join("");
  projectContainer.innerHTML = displayProjects;
}

window.addEventListener("DOMContentLoaded", function () {
  displayAllProjects(projectList);
});
