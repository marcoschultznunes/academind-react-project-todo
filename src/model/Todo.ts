export default class Todo {
    id: string;
    text: string;

    constructor(text:string){
        this.text = text;
        this.id = new Date().toISOString();
    };
};

export type TodoType = {
    id: string,
    text: string
};
