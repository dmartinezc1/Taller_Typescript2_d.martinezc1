export class Course{
    name:string;
    credits:number;
    professor:string;

    constructor(name:string, professor:string,credits:number){
        this.credits=credits;
        this.name=name;
        this.professor=professor;
    }

}