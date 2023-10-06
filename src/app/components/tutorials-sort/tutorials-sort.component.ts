import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-sort',
  templateUrl: './tutorials-sort.component.html',
  styleUrls: ['./tutorials-sort.component.css']
})
export class TutorialsSortComponent implements OnInit {
  bestRatedTutorial?: Tutorial;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          // Sort tutorials by rating and pick the top one
          this.bestRatedTutorial = data.sort((a, b) => (b.course_rating || 0) - (a.course_rating || 0))[0];
        }
      },
      error: (e) => console.error(e)
    });
  }
}
