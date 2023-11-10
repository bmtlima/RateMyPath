import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseResponse } from '../models/course.model'; // Path to your model file

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url = 'https://streamer.oit.duke.edu/curriculum/courses/subject/AAAS%20-%20African%20%26%20African%20Amer%20Studies?access_token=8322639ce3f4e86aac89e39004447de7';

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<CourseResponse> {
    return this.http.get<CourseResponse>(this.url);
  }
}