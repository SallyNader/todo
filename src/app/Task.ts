export class Task {
    _id?: String;
    taskName: String;
    date: Date;
    priority: Number;
    isFavoriteC: Boolean
    constructor()
    {
        this.isFavoriteC = false;
    }
}