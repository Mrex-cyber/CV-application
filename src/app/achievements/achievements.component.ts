import { Component, OnInit } from '@angular/core';
import { IAchievement } from '../models/IAchievement';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: IAchievement[] = [
    { title: "The 2022 ICPC Ukraine Western Contest", description:'Our team, called "UzhNU_Dominators" was taking a part int the competition' },
    { title: "E-Olymp", description:"More than 470 solved problems" },
    { title: "Codeforces", description:"More than 440 solved problems" },
    { title: "73,6 University Rating", description:"It is my average rating of 100" },
    { title: "10,6 School Rating", description:"It is average rating of 12" },
    { title: "Gold medal", description:"I got int the last 11 year of School for excellent achievements" },
    { title: "Commendation letters", description:"All 10 Years" },
    { title: "I place in the II stage of the All-Ukrainian Olympiad of English", description:"I was a pupil of the 9 Form" },
    { title: "I place in the II stage of the All-Ukrainian Olympiad of Computer Science", description:"I was a pupil of the 9 Form" },
    { title: "The Champion in the school chess tournament", description:"I was a pupil of the 8 Form" },
    { title: 'Taking part in the Creative Union "Sunflower"', description:"I was a pupil of the 8 Form" },
    { title: 'Good result in the event in Ivan Franko National University of Lviv "Lion cub"', description:"I was a pupil of the 8 Form" },
    { title: 'VII All-Ukrainian competitive of English "Grynvich"', description:"I have got 60 of 100 rating in the 6 Form" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
