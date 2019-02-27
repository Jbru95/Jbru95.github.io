import { Component } from '@angular/core';
import { Project, ProjectInterface } from '../models/project';

@Component({
    selector: 'projects',
    templateUrl: '../views/projects.html',
    styleUrls: [
        '../bootstrap.min.css',
        '../app.component.css'
    ]
})

export class ProjectsComponent {

    projects: Project[] = new Array();

    constructor( ) {
        const ProjectIntArray: ProjectInterface[] = [
            {
                name: 'kiNG',
                description: '',
                link: '',
                imagePath: '',
                techs: ['TypeScript', 'Angular 6', 'BootStrap']
            },
            {
                name: 'Mastermind',
                description: '',
                link: '',
                imagePath: '',
                techs: ['JavaScript', 'JQuery', 'CSS', 'HTML', 'Grunt', 'Less']
            },
            {
                name: 'ClosestAirplane',
                description: '',
                link: '',
                imagePath: '',
                techs: ['C#', 'REST APIs']
            },
            {
                name: 'Bummer',
                description: '',
                link: '',
                imagePath: '',
                techs: ['JavaScript', 'PHP', 'Websockets']
            }
        ];
        
        ProjectIntArray.forEach(element => {
            this.projects.push( new Project(element));
        });
        
        console.log(this.projects);
    }
}