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
    const todoLink: HTMLAnchorElement = document.createElement("a");
    todoHead.classList.add("clickedHead");
    todoText.classList.add("clickedText");
    todoLink.classList.add("clickedLink");
    todoHead.innerHTML = "School";
    todoText.innerHTML =
      "This project is a To-do list from the Javascript introduction course. The application allows the user to create, remove and tick of any done task using local storage.";
    todoLink.innerHTML = "See Project";
    todoLink.setAttribute("href", "https://github.com/miravit/todolist");
    todoLink.setAttribute("target", "_blank");
    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    todoDiv.appendChild(todoHead);
    todoDiv.appendChild(todoText);
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
    const tshirtText: HTMLSpanElement = document.createElement("span");
    const tshirtLink: HTMLAnchorElement = document.createElement("a");
    tshirtHead.classList.add("clickedHead");
    tshirtText.classList.add("clickedText");
    tshirtLink.classList.add("clickedLink");
    tshirtHead.innerHTML = "School";
    tshirtText.innerHTML = " tshirt";
    tshirtLink.innerHTML = "See Project";
    tshirtLink.setAttribute("href", "https://github.com/miravit/Webshop");
    tshirtLink.setAttribute("target", "_blank");

    //   const todoMobile: HTMLImageElement = document.createElement("img");
    //   todoMobile.src = "../assets/todolist-mobile.png";
    //   todoMobile.alt = "mobile version";

    //   todoMobile.setAttribute("src", "./assets/todolist-mobile.png");
    tshirtDiv.appendChild(tshirtHead);
    tshirtDiv.appendChild(tshirtText);
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
    const recreateText: HTMLSpanElement = document.createElement("span");
    const recreateLink: HTMLAnchorElement = document.createElement("a");
    recreateHead.classList.add("clickedHead");
    recreateText.classList.add("clickedText");
    recreateLink.classList.add("clickedLink");
    recreateHead.innerHTML = "School";
    recreateText.innerHTML = " recreate";
    recreateLink.innerHTML = "See Project";
    recreateLink.setAttribute(
      "href",
      "https://github.com/miravit/html_css_uppgift"
    );
    recreateLink.setAttribute("target", "_blank");

    recreateDiv.appendChild(recreateHead);
    recreateDiv.appendChild(recreateText);
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
    const iomdbText: HTMLSpanElement = document.createElement("span");
    const iomdbLink: HTMLAnchorElement = document.createElement("a");
    iomdbHead.classList.add("clickedHead");
    iomdbText.classList.add("clickedText");
    iomdbLink.classList.add("clickedLink");
    iomdbHead.innerHTML = "School";
    iomdbText.innerHTML = " iomdb";
    iomdbLink.innerHTML = "See Project";
    iomdbLink.setAttribute("href", "https://github.com/miravit/Search-Movies");
    iomdbLink.setAttribute("target", "_blank");

    iomdbDiv.appendChild(iomdbHead);
    iomdbDiv.appendChild(iomdbText);
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
