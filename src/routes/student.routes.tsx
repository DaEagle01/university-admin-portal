import OfferedCourse from "../pages/admin/faculty/OfferedCourse";
import StudentDashboard from "../pages/admin/student/StudentDashboard";


export const studentPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];
