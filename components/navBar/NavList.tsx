import ListItem from "./ListItem";

const NavList = () => {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
            <ListItem LiElement="Home" route="/" />
            <ListItem LiElement="About us" route="/pages/about" />
            <ListItem LiElement="Admission" route="/pages/admission" />
            <ListItem LiElement="All Courses" route="/pages/allCourses" />
            <ListItem LiElement="Events" route="/pages/events" />
            <ListItem LiElement="Student" route="/pages/student" />
            <ListItem LiElement="Contact us" route="/pages/contact" />
        </ul>
    );
}

export default NavList;