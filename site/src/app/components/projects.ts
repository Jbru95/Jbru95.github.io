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
                description: 'Chess engine written in TypeScript, using Angular 6 CLI and BootStrap 4, with both local multiplayer and single player AI modes. Supports game tracking technology, allowing the user to rewind and see past moves during the game, as well as timed modes.',
                link: 'https://jbru95.github.io/kiNG',
                imagePath: 'assets/king_screen.PNG',
                techs: ['TypeScript', 'Angular 6', 'BootStrap', 'CSS', 'HTML', ],
                searchTerms: ['Chess', 'kiNG', 'TypeScript', 'Angular 6', 'BootStrap', 'multiplayer', 'AI', 'game', 'CSS', 'HTML'],
                closingLink: null,
                isHosted: true
            },
            {
                name: 'DocEditor',
                description: 'Full Stack JavaScript Application using a Node.js and Express.js Back-end and an Angular 7 Front-end. DocEditor is a text document editing/collaborating application, allowing multiple users to edit the same document simultaneously. Uses WebSocket technology via Socket.io rather than typical REST API calls to quickly pass and broadcast data from clients to server and vice-versa.',
                link: 'https://github.com/Jbru95/DocEditor',
                imagePath: 'assets/docs_screen.png',
                techs: ['Angular 7', 'Node.js', 'Express.js', 'Socket.io', 'SCSS', 'HTML', 'Type/JavaScript' ],
                searchTerms: ['Document', 'docs', 'doceditor', 'text', 'editor', 'websockets', 'socket', 'stack', 'full', 'node', 'express', 'angular', 'script', 'web', 'app'],
                closingLink: null,
                isHosted: false
            },
            {
                name: 'Baseball Stats',
                description: 'Backend Services/API for BaseballStats FullStack Application, utilizing SQL Server Tables and Stored Procedures, C# Back-End REST API via WebAPI 2. Contains controllers, services and a full REST API to be consumed by the Baseball Stats Front End Angular Application below. Allows all CRUD operations for adding, updating, deleting, and displaying player information in JSON format.',
                link: 'https://github.com/Jbru95/BaseballStats',
                imagePath: 'assets/baseball.jpg',
                techs: ['C#', '.NET', 'SQL Server', 'Sprocs', 'REST API', 'WebAPI2' ],
                searchTerms: ['C#', '.NET', 'SQL Server', 'Sprocs', 'REST API', 'WebAPI2', 'stack', 'full', 'app', 'Baseball Stats', 'backend', 'service', 'WebAPI 2', 'Stored Procedures', 'sprocs'],
                closingLink: null,
                isHosted: false
            },
            {
                name: 'Baseball Stats Front End',
                description: 'Front End UI/UX for BaseballStats FullStack Application using Angular 7, Bootstrap 4, and Kendo UI elements to display data from C# backend REST APIs regarding baseball players and their career statistics. Contains modals to Add Update and Delete player and statistic information via an Angular service.',
                link: 'https://github.com/Jbru95/BaseballStatsFrontEnd',
                imagePath: 'assets/baseball.jpg',
                techs: ['Angular 7', 'CSS', 'HTML', 'Bootstrap 4', 'Kendo', 'UI/UX'],
                searchTerms: ['Angular 7', 'CSS', 'HTML', 'Bootstrap 4', 'Kendo', 'UI/UX', 'Full Stack', 'Web Design', 'Elements', 'Baseball Stats Front End', 'UX UI' ],
                closingLink: null,
                isHosted: false
            },
            {
                name: 'Mastermind',
                description: 'Web version of the classis boardgame, Mastermind. Written in Javascript, utilizing JQuery, Less styles, and Grunt. Pick sets of colored marbles to get closer to your goal. Using the hints provided, can you match the Mastermind?',
                link: 'https://jbru95.github.io/Mastermind',
                imagePath: 'assets/mastermind_screen.PNG',
                techs: ['JavaScript', 'JQuery', 'CSS', 'HTML', 'Grunt', 'Less'],
                searchTerms: ['Mastermind', 'JavaScript', 'JQuery', 'CSS', 'HTML', 'Grunt', 'Less', 'game', 'singleplayer'],
                closingLink: null,
                isHosted: true
            },
            {
                name: 'Advent Of Code 2018',
                description: 'Month-long programming challenge, started December 2018. Challenges cover a wide array of computer science topics, including: Programming Fundamentals, Data Structures(Stacks, Trees, Graphs, etc.), Algorithms, Time and Space Complexity Optimization, Problem Solving, Image Processing and more. Solutions are written with development speed, problem solving accuracy and time/memory management in mind. Solutions are light-weight Python files and output answers and infomation to the command line. Challenges from ',
                link: 'https://github.com/Jbru95/AdventOfCode2018',
                imagePath: 'assets/advent_screen.PNG',
                techs: ['Python 3', 'DS+A'],
                searchTerms: ['Python 3 challenge programming advent of code AdventOfCode 2018 data structures and algorithms DS&A stack tree graph time complxity space complexity problem solving image processing'],
                closingLink: {
                    name: 'Advent Of Code',
                    link: 'https://adventofcode.com/'
                },
                isHosted: false
            },
            {
                name: 'Closest Airplane',
                description: 'Simple Command line progam to return information on the closest inflight airplanes to a user input latitude and longitude. This project is entirely written in C#, utlizing REST APIs from ',
                link: 'https://github.com/Jbru95/ClosestAirplane',
                imagePath: 'assets/closestPlane_screen.png',
                techs: ['C#', 'REST APIs'],
                searchTerms: ['Closest Airplane', 'C#', 'REST APIs'],
                closingLink: {
                    name: 'Open Sky Network',
                    link: 'https://opensky-network.org'
                },
                isHosted: false
            },
            {
                name: 'Hash Table Comparison',
                description: 'HashTable class and small script written in Python 3 to show the powerful constant ( O(1) ) lookup/deletion time of Hash Tables compared to typical python lists, utilizes separate chaining to deal with collisions when they do occur. Created for Computer Science tutoring/educational purposes.',
                link: 'https://github.com/Jbru95/HashTableComparison',
                imagePath: 'assets/python_logo.png',
                techs: ['Python 3', 'DS+A'],
                searchTerms: ['Python 3', 'Hash Table Comparison', 'Data Structures and Algorithms', 'DS&A', 'constant lookup time complexity'],
                closingLink: null,
                isHosted: false
            },
            {
                name: 'Felis Investigations',
                description: 'Private Investigations Website with Login Credentials Verification(using hashed and salted passwords), SQL table manipulation and display via PDO. Entire project written in PHP w/ HTML and CSS to format pages. All pages written with Model-View-Controller pattern, and also utilizes Post-Redirect-Get pattern where appropriate.',
                link: 'https://github.com/Jbru95/Felis-Investigations',
                imagePath: 'assets/php_logo.png',
                techs: ['MySQL', 'HTML', 'Less', 'PHP', 'MVC',  'PDO'],
                searchTerms: ['cat', 'pdo', 'mySQL', 'database', 'hashed and salted passwords', 'php html css mvc model view controller post redirect get pattern web Felis Investigations'],
                closingLink: null,
                isHosted: false
            },
            {
                name: 'Bummer',
                description: 'Twist on the classic board game Sorry, written mainly in PHP and JavaScript, utlizes extensive server side scripting to control Users, Game Lobbies, Multiplayer Refreshing via WebSockets, and Turn and Board Management using MySQL Databases. Front-end interface created using almost exclusively HTML, CSS and PHP. For a full JavaScript version of this project, please see ',
                link: 'https://github.com/Jbru95/BummerPHP',
                imagePath: 'assets/bummer.png',
                techs: ['JavaScript', 'PHP', 'Websockets', 'CSS', 'HTML', 'MySQL'],
                searchTerms: ['Bummer', 'JavaScript', 'PHP', 'Websockets', 'Sorry', 'multiplayer', 'game', 'CSS', "HTML", 'sql database mysql pdo multiplayer singleplayer refresh front-end back-end'],
                closingLink: {
                    name: 'BummerJS',
                    link: 'https://github.com/Jbru95/BummerJS'
                },
                isHosted: false
            }
        ];
        
        ProjectIntArray.forEach(element => {
            this.allProjects.push( new Project(element));
        });
        this.projects = this.allProjects;
        console.log(this.projects);
        this.searchedProjectNumber = this.projects.length;
    }

    // onSearchKeyUp(): void{
    //     this.searchTerm = $('#projectSearchTermInput')[0].value.toLowerCase();
    //     if (this.searchTerm == '') {
    //         this.projects = this.allProjects;
    //     }
    //     this.searchedProjectNumber = this.projects.length;
    // }

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