const buttons = document.querySelectorAll(".nav-item");

buttons.forEach( btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    })
})




const frame = document.getElementById("contentFrame");

const navMap = {
    pomodoroBtn: "pomodoro.html",
    todoBtn: "todo.html",
    notesBtn: "notes.html",
    colorsBtn: "colors.html",
    apiBtn: "api.html", 
};

Object.entries(navMap).forEach(([id, page]) => {
    document.getElementById(id).addEventListener("click", () => {
        frame.src = page;
    });
});