export interface Course {
  _id: string;
  title: string;
  rating: number;
  enrolledStudents: number;
  learningGoals: any[];
  prerequisites: any[];
  reviews: any[];
  episodes: any[];
  coverImg: string;
}
export interface CustomUser {
  userId: Number;
  episodesWatched: [
    {
      courseId: String;
      eps: [Number];
    }
  ];
}
