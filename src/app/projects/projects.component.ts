import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [
    {
      title: "Tester knowledge",
      spentTime: "9 months",
      usedKnowledge: ["WebAPI", "MS SQL Server", "LINQ", "API requests", "Validation", "SQL querries and commands", "Angular"],
      description: 'This is Frontend side of the "Tester" application: https://github.com/Mrex-cyber/Enjoying-Cooking',
      link: "https://github.com/MREX-X/english-tester-spa",
    },
    {
      title: "Enjoying Cooking",
      spentTime: "3 months",
      usedKnowledge: ["WebAPI", "SQLite", "EntityFramework", "LINQ", "Angular", "API requests"],
      description: "This pet project I developed for my own competition. I made WebAPI which has a database with Recipes and Users. All controllers realized very well and are working. \nWere added some Services such as Authorization, Authentication, and DBContext. Also, I made Automation QA tests for User email and password with Regex. I developed tests on XUnit. \nThe angular part of the project is developed in the other repository: https://github.com/Mrex-cyber/Enjoying-Cooking",
      link: "https://github.com/Mrex-cyber/EnjoyingCooking",
    },
    {
      title: "Money Converter",
      spentTime: "10 days",
      usedKnowledge: ["Angular", "API requests", "Connection to bank API"],
      description: "I made this project for a test task in an IT company. I needed to make a Money Converter that is connected to Public API. All interfaces and functionality I developed in one day. \nThis project was generated with Angular CLI version 15.2.1.",
      link: "https://github.com/Mrex-cyber/Money-Converter",
    },
    {
      title: "TCP Chat",
      spentTime: "2 months",
      usedKnowledge: ["TCP", "OOP", "Asynchronous programming"],
      description: "I made this chat for training my TCP skills in WPF development.\n I developed a chat with Server and Client sides. The Server accepts messages and sends them to the Users when the User wrote them. \nThe main Classes I use are TcpListener and TcpClient.",
      link: "https://github.com/Mrex-cyber/TCPChat",
    },
    {
      title: "Best Pizza",
      spentTime: "2 months",
      usedKnowledge: ["WPF", "SQLite", "EntityFramework", "LINQ"],
      description: "This project I realized as an application for data management for Pizzerias.\n The Main functions are making, updating and deleting objects from Database. We have three main classes: Location, Employee and Product,- for these classes, I made tables in the database. Also, these classes have relationships: One to Many. \n I developed WPF Ures Interface with ListViews and Buttons. All functionality is working very well.",
      link: "https://github.com/Mrex-cyber/BestPizzaMaster",
    },
    {
      title: "Test Task JS",
      spentTime: "1 week",
      usedKnowledge: ["ASP.NET Core", "CRUD", "WebAPI", "JSON"],
      description: "This project I realized as an application for data management for Pizzerias.\n The Main functions are making, updating and deleting objects from Database. We have three main classes: Location, Employee and Product,- for these classes, I made tables in the database. Also, these classes have relationships: One to Many. \n I developed WPF Ures Interface with ListViews and Buttons. All functionality is working very well.",
      link: "https://github.com/Mrex-cyber/TestTaskJS",
    },
    {
      title: "Block Racing Game",
      spentTime: "1 months",
      usedKnowledge: ["Unity", "OOP", "3D Modeling", "UI", "Sound effects", "Algorithms"],
      description: "This game I made for practising with Unity, UI and programming. I made some buttons for User Interface, music and control on it. The block is moving forward and adding green blocks above. If my block is in collision with the red block then one block above disappears. The user loses when the last block collision with red.",
      link: "https://github.com/Mrex-cyber/BlockRacingGame",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
