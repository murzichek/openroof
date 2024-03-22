import React from "react";

interface Props {
  setSelectedCategory:React.Dispatch<React.SetStateAction<string | null>>;
}

function  Filter({ setSelectedCategory }: Props) {
  const categories = [
    "Открыто",
    "Крыша Экскурсоводов",
    "Закрыто/Недоступно",
    "Непроверенная метка",
    "Прочее",
  ];
  return (
    <div className="filter">
      <div className="filter__select">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Все метки</option>
          {
            categories.map((category) =>(
              <option key={category} value={category}>
                {category}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default Filter;