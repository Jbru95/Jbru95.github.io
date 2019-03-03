export interface ProjectInterface {
    name: string;
    description: string;
    link: string;
    techs: Array<string>;
    imagePath: string;
    searchTerms: Array<string>;
}

export class Project {
    name: string;
    description: string;
    link: string;
    techs: Array<string> = [];
    imagePath: string;
    searchTerms: Array<string> = [];

    constructor(obj: ProjectInterface) {
        this.name = obj.name;
        this.description = obj.description;
        this.link = obj.link;
        obj.techs.forEach( el => {
            this.techs.push(el);
        });
        this.imagePath = obj.imagePath;
        obj.searchTerms.forEach ( el2 => {
            this.searchTerms.push(el2);
        })
    }
}