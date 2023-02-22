// import axios from "axios";
// import { GitRepos } from "./models/GitRepos";

// const projectButton: HTMLButtonElement = document.getElementById(
//   "project-button"
// ) as HTMLButtonElement;
// const attachedSection: HTMLHtmlElement = document.getElementById(
//   "projects"
// ) as HTMLHtmlElement;
// const projectsDiv: HTMLDivElement = document.createElement("div");
// const projectsList: HTMLUListElement = document.createElement("ul");

// projectButton.addEventListener("click", () => {
//   projectsList.innerHTML = "";
//   axios.get("https://api.github.com/users/miravit/repos").then((response) => {
//     let result = response.data;
//     projects(result);
//   });
// });

// function projects(projects: GitRepos[]) {
//   for (let i = 0; i < projects.length; i++) {
//     const project: HTMLLIElement = document.createElement("li");
//     project.classList.add("project");
//     project.innerHTML = projects[i].name;

//     projectsList.appendChild(project);
//   }
// }
// document.body.appendChild(projectsDiv); //försöker hämta och sätta fast i attachedSection
// projectsDiv.appendChild(projectsList);

const todoPhoto: HTMLAnchorElement = document.getElementById(
  "todo-pic"
) as HTMLAnchorElement;
let todo: boolean = true;
todoPhoto.addEventListener("click", () => {
  if (todo) {
    const todoDiv: HTMLDivElement = document.getElementById(
      "todo-mobile"
    ) as HTMLDivElement;
    const todoHead: HTMLParagraphElement = document.createElement("p");
    const todoKey: HTMLParagraphElement = document.createElement("p");
    const todoText: HTMLSpanElement = document.createElement("span");
    const todoLink: HTMLAnchorElement = document.createElement("a");
    todoHead.classList.add("clickedHead");
    todoKey.classList.add("clickedKey");
    todoText.classList.add("clickedText");
    todoLink.classList.add("clickedLink");
    todoHead.innerHTML = "School";
    todoKey.innerHTML = "Javascript, HTML, CSS";
    todoText.innerHTML =
      "My To-Do List web application allows users to quickly and easily create and manage tasks. Built with JavaScript, HTML and CSS, the app utilizes local storage to save user data. With a simple design, users can add and delete tasks with a single click. Additionally, users can mark tasks as completed, which will be stored and displayed in a separate list.";
    todoLink.innerHTML = "See Project";
    todoLink.setAttribute("href", "https://github.com/miravit/todolist");
    todoLink.setAttribute("target", "_blank");
    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    todoDiv.appendChild(todoHead);
    todoDiv.appendChild(todoText);
    todoDiv.appendChild(todoKey);
    todoDiv.appendChild(todoLink);
  }
  todo = false;
});

const tshirtPhoto: HTMLAnchorElement = document.getElementById(
  "tshirt-pic"
) as HTMLAnchorElement;
let tshirt: boolean = true;
tshirtPhoto.addEventListener("click", () => {
  if (tshirt) {
    const tshirtDiv: HTMLDivElement = document.getElementById(
      "tshirt-mobile"
    ) as HTMLDivElement;
    const tshirtHead: HTMLParagraphElement = document.createElement("p");
    const tshirtKey: HTMLParagraphElement = document.createElement("p");
    const tshirtText: HTMLSpanElement = document.createElement("span");
    const tshirtLink: HTMLAnchorElement = document.createElement("a");
    tshirtHead.classList.add("clickedHead");
    tshirtKey.classList.add("clickedKey");
    tshirtText.classList.add("clickedText");
    tshirtLink.classList.add("clickedLink");
    tshirtHead.innerHTML = "School";
    tshirtKey.innerHTML = "Javascript, HTML, CSS";
    tshirtText.innerHTML =
      "This group project is a simulated web shop application built with JavaScript and uses local storage to store data. It allows users to shop and add products to their cart, adjust the quantity and size of their items, and simulate a purchase. Customers can also view their cart and checkout when they are ready to make their purchase. The application is intuitive and user-friendly, making it easy for shoppers to find and purchase the products they need.";
    tshirtLink.innerHTML = "See Project";
    tshirtLink.setAttribute("href", "https://github.com/miravit/Webshop");
    tshirtLink.setAttribute("target", "_blank");

    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    tshirtDiv.appendChild(tshirtHead);
    tshirtDiv.appendChild(tshirtText);
    tshirtDiv.appendChild(tshirtKey);
    tshirtDiv.appendChild(tshirtLink);
  }
  tshirt = false;
});

const recreatePhoto: HTMLAnchorElement = document.getElementById(
  "recreate-pic"
) as HTMLAnchorElement;
let recreate: boolean = true;
recreatePhoto.addEventListener("click", () => {
  if (recreate) {
    const recreateDiv: HTMLDivElement = document.getElementById(
      "recreate-mobile"
    ) as HTMLDivElement;
    const recreateHead: HTMLParagraphElement = document.createElement("p");
    const recreateKey: HTMLParagraphElement = document.createElement("p");
    const recreateText: HTMLSpanElement = document.createElement("span");
    const recreateLink: HTMLAnchorElement = document.createElement("a");
    recreateHead.classList.add("clickedHead");
    recreateKey.classList.add("clickedKey");
    recreateText.classList.add("clickedText");
    recreateLink.classList.add("clickedLink");
    recreateHead.innerHTML = "School";
    recreateKey.innerHTML = "HTML, CSS";
    recreateText.innerHTML =
      "This is my first project in HTML and CSS. The website is a recreation of a responsive website using only photos as a reference. ";
    recreateLink.innerHTML = "See Project";
    recreateLink.setAttribute(
      "href",
      "https://github.com/miravit/html_css_uppgift"
    );
    recreateLink.setAttribute("target", "_blank");

    recreateDiv.appendChild(recreateHead);
    recreateDiv.appendChild(recreateText);
    recreateDiv.appendChild(recreateKey);
    recreateDiv.appendChild(recreateLink);
  }
  recreate = false;
});

const iomdbPhoto: HTMLAnchorElement = document.getElementById(
  "iomdb-pic"
) as HTMLAnchorElement;
let iomdb: boolean = true;

iomdbPhoto.addEventListener("click", () => {
  if (iomdb) {
    const iomdbDiv: HTMLDivElement = document.getElementById(
      "iomdb-mobile"
    ) as HTMLDivElement;
    const iomdbHead: HTMLParagraphElement = document.createElement("p");
    const iomdbKey: HTMLParagraphElement = document.createElement("p");
    const iomdbText: HTMLSpanElement = document.createElement("span");
    const iomdbLink: HTMLAnchorElement = document.createElement("a");
    iomdbHead.classList.add("clickedHead");
    iomdbKey.classList.add("clickedKey");
    iomdbText.classList.add("clickedText");
    iomdbLink.classList.add("clickedLink");
    iomdbHead.innerHTML = "School";
    iomdbKey.innerHTML = "HTML, CSS, Javascript";
    iomdbText.innerHTML =
      "This application simulates a movie website, which allows users to browse a list of movies obtained from an API. Users are able to search for a specific movie by title, and the results are presented in a list. The application is easy to use and provides a convenient way to view information about a wide range of movies.";
    iomdbLink.innerHTML = "See Project";
    iomdbLink.setAttribute("href", "https://github.com/miravit/Search-Movies");
    iomdbLink.setAttribute("target", "_blank");

    iomdbDiv.appendChild(iomdbHead);
    iomdbDiv.appendChild(iomdbText);
    iomdbDiv.appendChild(iomdbKey);
    iomdbDiv.appendChild(iomdbLink);
  }
  iomdb = false;
});

const educationButton: HTMLButtonElement = document.getElementById(
  "education-button"
) as HTMLButtonElement;
const educationDiv: HTMLDivElement = document.getElementById(
  "skills"
) as HTMLDivElement;
const educationSkills: HTMLSpanElement = document.createElement("span");

educationButton.addEventListener("click", test);

function test() {
  if (educationButton) {
    educationSkills.classList.add("about__skills-text");
    educationSkills.innerHTML =
      "Javascript/Typescript, Css/sass, Html5, Bootstrap, React, Vue, NodeJs, Git, MongoDb, Jest, GraphQl, SQL, Apollo, Postman, ";

    educationDiv.appendChild(educationSkills);
  } else {
    educationDiv.innerHTML = "";
  }
}
