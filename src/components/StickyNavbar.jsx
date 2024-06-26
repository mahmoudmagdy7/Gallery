import React, { useEffect } from "react";
import { Navbar, Collapse, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar, Card, IconButton } from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  UserIcon,
  ChatBubbleBottomCenterIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// profile menu component

// nav list menu
const navListMenuItems = [
  {
    title: "البحيرة",
    description: "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, link }) => (
    <Link to={link} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex ">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> الأقسام
              <ChevronDownIcon strokeWidth={2} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
            </MenuItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> الأقسام
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "الرئيسية",
    icon: CodeBracketSquareIcon,
    link: "/",
  },
  {
    label: "الاقسام",
    icon: QueueListIcon,
    link: "/categories",
  },
];

function NavList() {
  return (
    <>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-blue-gray-900">
        {/* <NavListMenu /> */}
        {navListItems.map(({ label, icon, link }, key) => (
          <Link key={label} to={link} className="font-normal text-lg">
            <MenuItem className="flex items-center gap-2 ">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })} {label}
            </MenuItem>
          </Link>
        ))}
      </ul>
    </>
  );
}

export function StickyNavbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        document.querySelector("nav").style.backgroundColor = "#fff";
      } else {
        document.querySelector("nav").style.backgroundColor = "transparent";
      }
    });
  }, []);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <Navbar className="mx-auto p-2  lg:pl-6 bg-transparent border-none shadow-none py-3">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className="ml-auto mr-2 lg:hidden">
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <h1 className="font-bold ct-primary">Magdy Salama</h1>
        <div className="absolute top-2/4  left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
      </div>

      <Collapse open={isNavOpen} className="overflow-hidden bg-white rounded-lg">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
