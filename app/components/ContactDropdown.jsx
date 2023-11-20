"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";
import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";

export default function ContactDropdown() {
  return (
    <Dropdown className="bg-slate-700" variant="solid">
      <DropdownTrigger>
        <Button variant="flat" color="default">
          Contact Me
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" className="min-w-[200px">
        <DropdownItem key="email" startContent={<MdMail />}>
          <a href="mailto:chauquach.dev@gmail.com">
            <p>chauquach.dev@gmail.com</p>
          </a>
        </DropdownItem>
        <DropdownItem key="github" startContent={<FaGithub />}>
          <a href="https://github.com/chauquach1">
            <p>chauquach1</p>
          </a>
        </DropdownItem>
        <DropdownItem key="portfolio" startContent={<RxLinkedinLogo />}>
          <a href="https://www.linkedin.com/in/chauquach/">
            <p>in/chauquach</p>
          </a>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
