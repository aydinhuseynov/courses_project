import "./App.css";
import Header from "./components/header/Header";
import { courses } from "./components/Data";
import Course from "./components/course/Course";

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
