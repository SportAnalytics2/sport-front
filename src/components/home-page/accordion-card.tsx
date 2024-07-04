"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BasketballIcon,
  FootballIcon,
  VolleyballIcon,
} from "@/components/icons";
import { useState } from "react";
import SearchInput from "../search-input";

const disciplinas = [
  {
    id: "1",
    name: "Futbol",
    icon: <FootballIcon />,
    categories: [
      {
        id: "1",
        name: "Primera",
      },
      {
        id: "2",
        name: "Segunda",
      },
      {
        id: "3",
        name: "Tercera",
      },
      {
        id: "4",
        name: "Cuarta",
      },
    ],
  },
  {
    id: "2",
    name: "Basket",
    icon: <BasketballIcon />,
    categories: [
      {
        id: "1",
        name: "Primera",
      },
      {
        id: "2",
        name: "Segunda",
      },
      {
        id: "3",
        name: "Tercera",
      },
      {
        id: "4",
        name: "Cuarta",
      },
    ],
  },
  {
    id: "3",
    name: "Voley",
    icon: <VolleyballIcon />,
    categories: [
      {
        id: "1",
        name: "Primera",
      },
      {
        id: "2",
        name: "Segunda",
      },
      {
        id: "3",
        name: "Tercera",
      },
      {
        id: "4",
        name: "Cuarta",
      },
    ],
  },
];

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
          {disciplinas.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={`rounded-md duration-200 hover:bg-muted ${item.id === selectedItem ? "bg-muted" : ""}`}
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
              <AccordionContent className="rounded-md bg-muted p-4 pl-6">
                <ul>
                  {item.categories.map((category) => (
                    <li
                      key={category.id}
                      className="cursor-pointer rounded-md p-4 hover:bg-popover"
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
