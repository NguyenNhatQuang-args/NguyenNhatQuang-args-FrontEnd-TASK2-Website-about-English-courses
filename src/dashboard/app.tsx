type Item = {
    id: number;
    name: string;
};

let classes: Item[] = [];
let courses: Item[] = [];


function addClass(): void {
    const input = document.getElementById("className") as HTMLInputElement;
    if (!input.value) return alert("Nhập tên lớp");

    classes.push({
        id: Date.now(),
        name: input.value
    });

    input.value = "";
    renderClasses();
}

function renderClasses(): void {
    const list = document.getElementById("classList")!;
    list.innerHTML = "";

    classes.forEach(c => {
        list.innerHTML += `
      <li>
        ${c.name}
        <button onclick="editClass(${c.id})">Sửa</button>
        <button onclick="deleteClass(${c.id})">Xóa</button>
      </li>
    `;
    });
}

function deleteClass(id: number): void {
    classes = classes.filter(c => c.id !== id);
    renderClasses();
}

function editClass(id: number): void {
    const newName = prompt("Tên mới:");
    if (!newName) return;

    const c = classes.find(c => c.id === id);
    if (c) c.name = newName;

    renderClasses();
}

function addCourse(): void {
    const input = document.getElementById("courseName") as HTMLInputElement;
    if (!input.value) return alert("Chưa nhập tên khóa học");

    courses.push({
        id: Date.now(),
        name: input.value
    });

    input.value = "";
    renderCourses();
}

function renderCourses(): void {
    const list = document.getElementById("courseList")!;
    list.innerHTML = "";

    courses.forEach(c => {
        list.innerHTML += `
      <li>
        ${c.name}
        <button onclick="editCourse(${c.id})">Sửa</button>
        <button onclick="deleteCourse(${c.id})">Xóa</button>
      </li>
    `;
    });
}

function deleteCourse(id: number): void {
    courses = courses.filter(c => c.id !== id);
    renderCourses();
}

function editCourse(id: number): void {
    const newName = prompt("Tên mới:");
    if (!newName) return;

    const c = courses.find(c => c.id === id);
    if (c) c.name = newName;

    renderCourses();
}
