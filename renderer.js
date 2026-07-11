import { TITLE } from "./config.js";

export function render(tasks) {

    console.log("=".repeat(35));
    console.log(TITLE);
    console.log("=".repeat(35));

    tasks.forEach(task => {

        const mark = task.completed ? "x" : " ";

        console.log(`[${mark}] ${task.title}`);

    });

}
