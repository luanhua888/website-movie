import React from "react";
import SelectBottom from "../SelectBottom";

function SearchBar() {
  //tạo mảng chứa các giá trị của select
  const [selectValue, setSelectValue] = React.useState([
    {
      id: 1,
      name: "type",
      value: [
        { id: 0, name: "ALL" },
        { id: 1, name: "United States" },
        { id: 2, name: "Canada" },
        { id: 3, name: "France" },
        { id: 4, name: "Germany" },
      ],
    },
    {
      id: 2,
      name: "Country",
      value: [
        { id: 0, name: "ALL" },
        { id: 1, name: "United States" },
        { id: 2, name: "Canada" },
        { id: 3, name: "France" },
        { id: 4, name: "Germany" },
      ],
    },
    {
      id: 3,
      name: "year",
      value: [
        { id: 0, name: "ALL" },
        { id: 1, name: "United States" },
        { id: 2, name: "Canada" },
        { id: 3, name: "France" },
        { id: 4, name: "Germany" },
      ],
    },
    {
      id: 4,
      name: "duration",
      value: [
        { id: 0, name: "ALL" },
        { id: 1, name: "United States" },
        { id: 2, name: "Canada" },
        { id: 3, name: "France" },
        { id: 4, name: "Germany" },
      ],
    },
    {
      id: 5,
      name: "Country",
      value: [
        { id: 0, name: "ALL" },
        { id: 1, name: "United States" },
        { id: 2, name: "Canada" },
        { id: 3, name: "France" },
        { id: 4, name: "Germany" },
      ],
    },
    {
      id: 6,
      name: "date",
      value: [
        { id: 0, name: "ALL" },
        { id: 1, name: "United States" },
        { id: 2, name: "Canada" },
        { id: 3, name: "France" },
        { id: 4, name: "Germany" },
      ],
    },
  ]);

  return (
    <div className="grid grid-cols-6 gap-2  mt-[5%] p-2">
      {/*  */}
      {selectValue.map((item) => (
        <div>
          <span className="font-bold">{item.name}: </span>
          <label
            for="countries"
            class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {item.value.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
      ))}
      {/*  */}
    </div>
  );
}

export default SearchBar;
