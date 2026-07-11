import Board from "./board.js";

import tasks from "./sampleTasks.js";

import { save, load } from "./storage.js";

import { render } from "./renderer.js";

import { completed, pending } from "./filters.js";

const board = new Board();

tasks.forEach(task => board.add(task));

save(board.all());

const allTasks = load();

render(allTasks);

console.log("-".repeat(35));

console.log(
    `Completed: ${completed(allTasks).length}`
);

console.log(
    `Pending: ${pending(allTasks).length}`
);
