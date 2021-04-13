class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
        this.deleted = false;
    };

    toggleCompleted() {
        this.completed = !this.completed;
    };

    setDeleted() {
        this.deleted = true;
    };
}
 
export default Task;