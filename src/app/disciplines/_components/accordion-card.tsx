"use client";

import { useState } from "react";
import Link from "next/link";

import SearchInput from "../../../components/search-input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { disciplines } from "@/mocks/disciplines";

export default function AccordionCard() {
  const [selectedItem, setSelectedItem] = useState<string>("");

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Disciplinas</CardTitle>
        <SearchInput />
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {disciplines.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={`duration-200 hover:bg-muted ${item.id === selectedItem ? "bg-muted" : ""}`}
            >
              <AccordionTrigger
                className="px-4 hover:no-underline"
                onClick={() =>
                  setSelectedItem((prev) => (item.id === prev ? "" : item.id))
                }
              >
                <div className="flex gap-2">
                  {item.icon}
                  {item.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col rounded-md bg-muted p-4 pl-6">
                {item.categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/disciplines/${category.id}`}
                    className="cursor-pointer rounded-md p-4 hover:bg-popover"
                  >
                    {category.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
