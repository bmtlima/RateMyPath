import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent {
  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
    course_rating: 0,         // Added new fields here
    prof_rating: 0,
    term: '',
    difficulty: 0,
    workload: 0,
    professor_name: '',
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      published: this.tutorial.published,
      course_rating: this.tutorial.course_rating,  // Added new fields here
      prof_rating: this.tutorial.prof_rating,
      professor_name: this.tutorial.professor_name,
      term: this.tutorial.term,
      difficulty: this.tutorial.difficulty,
      workload: this.tutorial.workload
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
      course_rating: 0,        // Resetting new fields to default values
      prof_rating: 0,
      professor_name: '',
      term: '',
      difficulty: 0,
      workload: 0
    };
  }
}
