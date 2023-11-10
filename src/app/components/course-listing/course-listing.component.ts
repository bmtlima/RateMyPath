import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CourseSummary } from '../../models/course.model';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  courseTitles: string[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(response => {
      this.courseTitles = response.ssr_get_courses_resp.course_search_result.course_summaries.course_summary.map(course => course.course_title_long);
    });
  }
}