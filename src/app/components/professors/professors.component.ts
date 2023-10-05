import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  searchText: string = '';

  professors = [
    {
      name: 'Dr. John Doe',
      rating: 4,
      courses: ['Calculus I', 'Calculus II', 'Linear Algebra']
    },
    {
      name: 'Dr. Jane Smith',
      rating: 5,
      courses: ['Introduction to Programming', 'Data Structures', 'Software Engineering']
    },
    {
      name: 'Dr. Robert Brown',
      rating: 3,
      courses: ['Physics I', 'Quantum Mechanics']
    }
  ];

  // Additional property to store filtered professors
  filteredProfessors = [...this.professors];

  constructor() { }

  ngOnInit(): void {
  }

  filterProfessors(): void {
    if (this.searchText) {
      this.filteredProfessors = this.professors.filter(prof => 
        prof.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredProfessors = [...this.professors];
    }
  }
}
