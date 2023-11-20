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
    <Navbar shouldHideOnScroll>

      {/* Menu Toggle for Mobile */}
      <NavbarContent className="sm:hidden" justify="start" isBlurred>
        <NavbarMenuToggle />
      </NavbarContent>
    
      {/* Normal View */}
      <NavbarBrand>
        <p className="font-bold text-inherit">CQ.Dev</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center" isBlurred="false">
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Experience
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact Me
          </Button>
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