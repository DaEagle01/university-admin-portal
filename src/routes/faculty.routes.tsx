import FacultyDashboard from "../pages/admin/faculty/FacultyDashboard";
import OfferedCourse from "../pages/admin/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];
