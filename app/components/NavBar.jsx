'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import ContactDropdown from "./ContactDropdown";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    "Introduction",
    "About Me", 
    "Projects",
    "Contact",
    "Socials"
  ]

  return (
    <Navbar >

      {/* Menu Toggle for Mobile */}
      <NavbarContent className="sm:hidden" justify="start" >
        <NavbarMenuToggle />
      </NavbarContent>
    
      {/* Normal View */}
      <NavbarBrand>
        <p className="font-bold text-inherit">CQ</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/#portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a target="_blank" color="foreground" className="text-black" href="/resume.pdf">
            Resume
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ContactDropdown />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}