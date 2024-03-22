//ИЗМЕНИТЬ ОПИСАНИЕ? МБ ПЕРЕДЕЛАТЬ АДРЕСА(ДОБАВИТЬ ПАДИКИ)//

import { RoofsEvent } from "./Components/MapsApp";

const eventsData: RoofsEvent[] = [
  {
    id: 1,
    title: "Тестовая метка, для понимания заполненного окна",
    description: `In a dapibus nulla. 
      Aenean erat orci, egestas non orci at, varius tempus risus. 
      Ut suscipit lorem magna, quis auctor leo molestie ac. 
      Integer ut efficitur neque. 
      Nullam eleifend iaculis sapien id scelerisque`,
    position: [59.9347082, 30.3296130],
    category: "Закрыто/Недоступно",
  },
  {
    id: 2,
    title: "Садовая улиц, 14/52",
    description: "О том как попасть:",
    position: [59.93449, 30.33563],
    category: "Крыша Экскурсоводов",
    },
  {
    id: 3,
    title: "Набережная реки Мойки, 40",
    description: "О том как попасть:",
    position: [59.93727,30.32063],
    category: "Открыто",
  },
  {
    id: 4,
    title: "улица Куйбышева, 1/5",
    description: "О том как попасть:",
    position: [59.95381,30.32688],
    category: "Крыша Экскурсоводов",
  },
  {
    id: 5,
    title: "Большой проспект Петроградской стороны, 96",
    description: "О том как попасть:",
    position: [59.965588, 30.311296],
    category: "Крыша Экскурсоводов",
  },
  {
    id: 6,
    title: "Большой проспект Петроградской стороны, 75",
    description: "О том как попасть:",
    position: [59.965998, 30.313011],
    category: "Открыто",
  },
  {
    id: 7,
    title: "Ленинградская улица, 3",
    description: `Пасхалка...`,
    position: [59.912797, 30.506266],
    category: "Прочее",
  },
  {
    id: 8,
    title: "Невский проспект, 126/2",
    description: "О том как попасть:",
    position: [59.931538, 30.365750],
    category: "Открыто",
  },
  {
    id: 9,
    title: "Тестовая метка для отслеживания переходов",
    description: "Водный)))",
    position: [55.839865, 37.491009],
    category: "Прочее",
  },
];

export default eventsData;