console.log("script.js loaded");

const buttons = document.querySelectorAll(".nav-item");
const frame = document.getElementById("contentFrame");

console.log("Buttons found:", buttons.length);
console.log("Frame found:", frame);

const navMap = {
    pomodoroBtn: "pomodoro.html",
    todoBtn: "todo.html",
    notesBtn: "notes.html",
    colorsBtn: "colors.html",
    apiBtn: "api.html",
};

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const page = navMap[btn.id];

        if (page && frame) {
            frame.src = page;
            console.log("Loaded page:", page);
        }
    });
});