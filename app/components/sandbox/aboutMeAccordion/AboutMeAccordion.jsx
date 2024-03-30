"use client";

import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

export default function AboutMeAccordion() {
  return (
    <div className="container flex flex-col my-auto self-start w-full">
    <Accordion
      className="flex flex-col gap-9 justify-start flex-grow w-full text-white "
      base="text-white"
      showDivider={false}
      hideIndicator={true}
      selectionMode="multiple"
      itemClasses={{
        title: "text-white text-5xl border-b-1 border-white",
        content: "text-white/40 text-3xl",
      }}
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="01 Frontend"
      >
        <h1 className="">Something about being a Frontend Developer</h1>
      </AccordionItem>
      {/* <Divider className="my-4" /> */}
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="02 Backend"
      >
        <h1>Something about being a Backend Developer</h1>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="03 Web">
        <h1>Something about being a Web Developer</h1>
      </AccordionItem>
    </Accordion>
    </div>
  );
}