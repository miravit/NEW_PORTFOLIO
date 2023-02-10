import axios from "axios";
import { GitRepos } from "./models/GitRepos";

const projectButton: HTMLButtonElement = document.getElementById(
  "project-button"
) as HTMLButtonElement;
const attachedSection: HTMLHtmlElement = document.getElementById(
  "projects"
) as HTMLHtmlElement;
const projectsDiv: HTMLDivElement = document.createElement("div");
const projectsList: HTMLUListElement = document.createElement("ul");

projectButton.addEventListener("click", () => {
  projectsList.innerHTML = "";
  axios.get("https://api.github.com/users/miravit/repos").then((response) => {
    let result = response.data;
    projects(result);
  });
});

function projects(projects: GitRepos[]) {
  for (let i = 0; i < projects.length; i++) {
    const project: HTMLLIElement = document.createElement("li");
    project.classList.add("project");
    project.innerHTML = projects[i].name;

    projectsList.appendChild(project);
  }
}
document.body.appendChild(projectsDiv); //försöker hämta och sätta fast i attachedSection
projectsDiv.appendChild(projectsList);
