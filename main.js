const input = document.querySelector("[name='task']");
const button = document.querySelector(".btn");
const boxs = document.querySelectorAll(".box");
const tasksContainer = document.querySelector(".tasks");
let dragged = null;
button.onclick = function () {
  addTask();
  input.value = "";
  dragTask();
};

function addTask() {
  if (input.value) {
    boxs[0].innerHTML += `<div class="task" draggable="true">${input.value}</div>`;
  }
}

function dragTask() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((element) => {
    element.addEventListener("dragstart", () => {
      dragged = element;
    });

    element.addEventListener("dragend", (e) => {
      //   e.preventDefault();
      dragged = null;
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", (event) => {
        event.preventDefault();
        box.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
      });

      box.addEventListener("dragleave", () => {
        box.style.boxShadow =
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
      });

      box.addEventListener("drop", () => {
        box.appendChild(dragged);
        box.style.boxShadow =
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
      });
    });
  });
}
