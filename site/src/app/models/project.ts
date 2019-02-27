export interface ProjectInterface {
    name: string;
    description: string;
    link: string;
    techs: Array<string>;
    imagePath: string;
}

export class Project {
    name: string;
    description: string;
    link: string;
    techs: Array<string>;
    imagePath: string;

    constructor(obj: ProjectInterface) {
        this.name = obj.name;
        this.description = obj.description;
        this.link = obj.link;
        obj.techs.forEach( function( tech: string ) {
            this.techs.push(tech);
        });
        this.imagePath = obj.imagePath;
    }
}