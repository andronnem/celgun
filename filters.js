export function completed(tasks) {

    return tasks.filter(task => task.completed);

}

export function pending(tasks) {

    return tasks.filter(task => !task.completed);

}
