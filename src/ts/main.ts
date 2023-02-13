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
    const todoText: HTMLSpanElement = document.createElement("span");
    todoHead.classList.add("clickedHead");
    todoText.classList.add("clickedText");
    todoHead.innerHTML = "School";
    todoText.innerHTML =
      "This project is from the course Javascript introduction where I made an app simulation a todolist. The application allows the user to create, remove and tick of any done task using local storage.";

    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    todoDiv.appendChild(todoHead);
    todoDiv.appendChild(todoText);
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
    const tshirtText: HTMLSpanElement = document.createElement("span");
    tshirtHead.classList.add("clickedHead");
    tshirtText.classList.add("clickedText");
    tshirtHead.innerHTML = "School";
    tshirtText.innerHTML = " tshirt";

    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    tshirtDiv.appendChild(tshirtHead);
    tshirtDiv.appendChild(tshirtText);
  }
  tshirt = false;
});

const recreatePhoto: HTMLAnchorElement = document.getElementById(
  "recreate-pic"
) as HTMLAnchorElement;
let recreate: boolean = true;
recreatePhoto.addEventListener("click", () => {
  if (recreate) {
    const tshirtDiv: HTMLDivElement = document.getElementById(
      "recreate-mobile"
    ) as HTMLDivElement;
    const recreateHead: HTMLParagraphElement = document.createElement("p");
    const recreateText: HTMLSpanElement = document.createElement("span");
    recreateHead.classList.add("clickedHead");
    recreateText.classList.add("clickedText");
    recreateHead.innerHTML = "School";
    recreateText.innerHTML = " recreate";

    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    tshirtDiv.appendChild(recreateHead);
    tshirtDiv.appendChild(recreateText);
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
    const iomdbText: HTMLSpanElement = document.createElement("span");
    iomdbHead.classList.add("clickedHead");
    iomdbText.classList.add("clickedText");
    iomdbHead.innerHTML = "School";
    iomdbText.innerHTML = " iomdb";

    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    iomdbDiv.appendChild(iomdbHead);
    iomdbDiv.appendChild(iomdbText);
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

educationButton.addEventListener("click", () => {
  educationSkills.innerHTML =
    "Javascript/Typescript, Css/sass, html5, Bootstrap, React, Vue, NodeJs, Git, MongoDb, Jest, GraphQl, SQL, Apollo, Postman, ";

  educationDiv.appendChild(educationSkills);
});
