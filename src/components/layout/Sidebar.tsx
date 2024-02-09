import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { Layout, Menu } from "antd";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student',
};

const Sidebar = () => {
    const role = 'admin';
    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
            break;

        default:
            break;
    }
    return (
        <Sider breakpoint="lg" collapsedWidth="0" >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    )
}

export default Sidebar