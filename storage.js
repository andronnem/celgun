const database = [];

export function save(tasks) {

    database.length = 0;

    database.push(...tasks);

}

export function load() {

    return database;

}
