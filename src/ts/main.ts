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
todoPhoto.addEventListener("click", showTodo);

let todo: boolean = true;
function showTodo() {
  if (todo) {
    const todoDiv: HTMLDivElement = document.getElementById(
      "todo-mobile"
    ) as HTMLDivElement;
    const todoHead: HTMLParagraphElement = document.createElement("p");
    const todoText: HTMLSpanElement = document.createElement("span");
    todoHead.classList.add("todoHead");
    todoText.classList.add("todoText");
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
}
