import {
  BasketballIcon,
  FootballIcon,
  VolleyballIcon,
} from "@/components/icons";

export const disciplines = [
  {
    id: "1",
    name: "Futbol",
    icon: <FootballIcon />,
    categories: [
      {
        id: "1",
        name: "Primera futbol",
      },
      {
        id: "2",
        name: "Segunda futbol",
      },
      {
        id: "3",
        name: "Tercera futbol",
      },
      {
        id: "4",
        name: "Cuarta futbol",
      },
    ],
  },
  {
    id: "2",
    name: "Basket",
    icon: <BasketballIcon />,
    categories: [
      {
        id: "9",
        name: "Primera basket",
      },
      {
        id: "10",
        name: "Segunda basket",
      },
      {
        id: "11",
        name: "Tercera basket",
      },
      {
        id: "12",
        name: "Cuarta basket",
      },
    ],
  },
  {
    id: "3",
    name: "Voley",
    icon: <VolleyballIcon />,
    categories: [
      {
        id: "5",
        name: "Primera voley",
      },
      {
        id: "6",
        name: "Segunda voley",
      },
      {
        id: "7",
        name: "Tercera voley",
      },
      {
        id: "8",
        name: "Cuarta voley",
      },
    ],
  },
];
