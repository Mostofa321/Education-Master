import ListItem from "./ListItem";

const NavList = () => {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
            <ListItem LiElement="Home" />  {/*  route="/"  */}
            <ListItem LiElement="About us" />  {/* route="/pages/about" */}
            <ListItem LiElement="Admission" />
            <ListItem LiElement="All Courses" />
            <ListItem LiElement="Events" />
            <ListItem LiElement="Student" />
            <ListItem LiElement="Contact us" />
        </ul>
    );
}

export default NavList;