export interface CourseSummary {
    crse_id: string;
    effdt: string;
    crse_offer_nbr: string;
    subject: string;
    catalog_nbr: string;
    course_title_long: string;
  }
  
  export interface CourseResponse {
    ssr_get_courses_resp: {
      course_search_result: {
        course_summaries: {
          course_summary: CourseSummary[];
        };
      };
    };
  }