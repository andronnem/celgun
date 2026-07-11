export default class Board {

    constructor() {

        this.tasks = [];

    }

    add(task) {

        this.tasks.push(task);

    }

    all() {

        return this.tasks;

    }

}
