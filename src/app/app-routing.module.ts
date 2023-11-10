import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsSortComponent } from './components/tutorials-sort/tutorials-sort.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { ProfessorsComponent } from './components/professors/professors.component';
import { CourseListingComponent } from './components/course-listing/course-listing.component'


const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'sort', component: TutorialsSortComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'professor', component: ProfessorsComponent},
  { path: 'course', component: CourseListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
