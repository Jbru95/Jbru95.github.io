import { Component } from '@angular/core';
import { Project, ProjectInterface } from '../models/project';
declare var $: any;

@Component({
    selector: 'projects',
    templateUrl: '../views/projects.html',
    styleUrls: [
        '../bootstrap.min.css',
        '../app.component.css'
    ]
})

export class ProjectsComponent {
    searchTerm: string;
    projects: Project[] = new Array();
    allProjects: Project[] = new Array();
    searchedProjectNumber: number;

    constructor( ) {
        const ProjectIntArray: ProjectInterface[] = [
            {
                name: 'kiNG',
                description: 'Chess engine written in Angular, supports both local multiplayer and single player AI modes',
                link: 'https://jbru95.github.io/kiNG',
                imagePath: '',
                techs: ['TypeScript', 'Angular 6', 'BootStrap'],
                searchTerms: ['Chess', 'kiNG', 'TypeScript', 'Angular 6', 'BootStrap', 'multiplayer', 'AI', 'game']
            },
            {
                name: 'Mastermind',
                description: 'Web version of the classis boardgame, Mastermind written in Javascript, utilizing JQuery, Less styles, and Grunt',
                link: 'https://jbru95.github.io/Mastermind',
                imagePath: '',
                techs: ['JavaScript', 'JQuery', 'CSS', 'HTML', 'Grunt', 'Less'],
                searchTerms: ['Mastermind', 'JavaScript', 'JQuery', 'CSS', 'HTML', 'Grunt', 'Less', 'game', 'singleplayer']
            },
            {
                name: 'Closest Airplane',
                description: 'Simple Command line progam to return information on the closest inflight airplanes to a user input latitude and longitude, written in C#, utlizing REST APIs',
                link: '',
                imagePath: '',
                techs: ['C#', 'REST APIs'],
                searchTerms: ['Closest Airplane', 'C#', 'REST APIs']
            },
            {
                name: 'Bummer',
                description: 'Twist on the classis board game Sorry, written mainly in PHP, utlizes extensive server side scripting, as well as JavaScript, Websockets and MySQL databases for online multiplayer',
                link: '',
                imagePath: '',
                techs: ['JavaScript', 'PHP', 'Websockets'],
                searchTerms: ['Bummer', 'JavaScript', 'PHP', 'Websockets', 'Sorry', 'multiplayer', 'game']
            }
        ];
        
        ProjectIntArray.forEach(element => {
            this.allProjects.push( new Project(element));
        });
        this.projects = this.allProjects;
        console.log(this.projects);
        this.searchedProjectNumber = this.projects.length;
    }

    onSearchKeyUp(): void{
        this.searchTerm = $('#projectSearchTermInput')[0].value.toLowerCase();
        if (this.searchTerm == '') {
            this.projects = this.allProjects;
        }
        this.searchedProjectNumber = this.projects.length;
    }

    searchProjects(): void {
        this.searchTerm = $('#projectSearchTermInput')[0].value.toLowerCase();
        // console.log(this.searchTerm);

        this.projects = [];

        for ( let proj of this.allProjects ) {
            for ( let projSearchTerm of proj.searchTerms ) {
                if( projSearchTerm.toLowerCase().includes(this.searchTerm)) {
                    this.projects.push(proj);
                    break;
                }
            }
        }

        if (this.searchTerm == '') {
            this.projects = this.allProjects;
        }

        this.searchedProjectNumber = this.projects.length;
    }
}