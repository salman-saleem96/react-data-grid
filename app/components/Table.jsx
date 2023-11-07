"use client";
// import React, { useEffect, useState } from "react";
// import ReactDataGrid from "@inovua/reactdatagrid-community";
// import "@inovua/reactdatagrid-community/index.css";

// const columns = [
//   { name: "name", header: "Name", minWidth: 50, defaultFlex: 2 },
//   {
//     name: "age",
//     header: "Age",
//     maxWidth: 1000,
//     defaultFlex: 1,
//     defaultWidth: 200,
//   },
// ];

// const gridStyle = { minHeight: 550 };

// const dataItem = [
//   { id: 1, name: "John McQueen", age: 35 },
//   { id: 2, name: "Mary Stones", age: 25 },
//   { id: 3, name: "Robert Fil", age: 27 },
//   { id: 4, name: "Roger Robson", age: 81 },
//   { id: 5, name: "Billary Konwik", age: 18 },
//   { id: 6, name: "Bob Martin", age: 18 },
//   { id: 7, name: "Matthew Richardson", age: 54 },
//   { id: 8, name: "Ritchie Peterson", age: 54 },
//   { id: 9, name: "Bryan Martin", age: 40 },
//   { id: 10, name: "Mark Martin", age: 44 },
//   { id: 11, name: "Michelle Sebastian", age: 24 },
//   { id: 12, name: "Michelle Sullivan", age: 61 },
//   { id: 13, name: "Jordan Bike", age: 16 },
//   { id: 14, name: "Nelson Ford", age: 34 },
//   { id: 15, name: "Tim Cheap", age: 3 },
//   { id: 16, name: "Robert Carlson", age: 31 },
//   { id: 17, name: "Johny Perterson", age: 40 },
// ];

// const Table = () => {
//   const [dataSource, setDataSource] = useState(dataItem);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
// }
//     return fetch(
//       DATASET_URL +
//         "?skip=" +
//         skip +
//         "&limit=" +
//         limit +
//         "&sortInfo=" +
//         JSON.stringify(sortInfo)
//     ).then((response) => {
//       const totalCount = response.headers.get("X-Total-Count");
//       return response.json().then((data) => {
//         return { data, count: totalCount * 1 };
//       });
//   return (
//     <ReactDataGrid
//       idProperty="id"
//       columns={columns}
//       dataSource={dataSource}
//       style={gridStyle}
//     />
//   );
// };

// export default Table;

import React, { useEffect, useState } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const columns = [
  { name: "title", header: "Title", minWidth: 50, defaultFlex: 1 },
  {
    name: "thumbnailUrl",
    header: "Thumbnail Url",
    maxWidth: 1000,
    defaultFlex: 1,
    defaultWidth: 200,
  },
];

const dataItem = [
  { id: 1, name: "John McQueen", age: 35 },
  { id: 2, name: "Mary Stones", age: 25 },
  { id: 3, name: "Robert Fil", age: 27 },
  { id: 4, name: "Roger Robson", age: 81 },
  { id: 5, name: "Billary Konwik", age: 18 },
  { id: 6, name: "Bob Martin", age: 18 },
  { id: 7, name: "Matthew Richardson", age: 54 },
  { id: 8, name: "Ritchie Peterson", age: 54 },
  { id: 9, name: "Bryan Martin", age: 40 },
  { id: 10, name: "Mark Martin", age: 44 },
  { id: 11, name: "Michelle Sebastian", age: 24 },
  { id: 12, name: "Michelle Sullivan", age: 61 },
  { id: 13, name: "Jordan Bike", age: 16 },
  { id: 14, name: "Nelson Ford", age: 34 },
  { id: 15, name: "Tim Cheap", age: 3 },
  { id: 16, name: "Robert Carlson", age: 31 },
  { id: 17, name: "Johny Perterson", age: 40 },
];

const gridStyle = { minHeight: 550 };

const defaultSortInfo = { name: "title", dir: 1 };

const DATASET_URL = "https://jsonplaceholder.typicode.com/photos";
const DEFAULT_START = 0;
const DEFAULT_LIMIT = 15;

const filterValue = [
  { name: "title", operator: "startsWith", type: "string", value: "" },
  { name: "thumbnailUrl", operator: "contains", type: "string", value: "" },
];

const Table = () => {
  const [dataSource, setDataSource] = useState(dataItem);

  useEffect(() => {
    fetch(`${DATASET_URL}?_start=${DEFAULT_START}&_limit=${DEFAULT_LIMIT}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data, "datadatadata");
        const items = data?.map((item) => ({
          title: item?.title,
          thumbnailUrl: item?.thumbnailUrl,
        }));
        console.log(items, "datadatadata");
        setDataSource(items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ReactDataGrid
      idProperty="id"
      columns={columns}
      dataSource={dataSource}
      defaultSortInfo={defaultSortInfo}
      style={gridStyle}
      //   livePagination
      activateRowOnFocus
      pagination
      filterable
      defaultFilterValue={filterValue}
      rowHeight={90}
      headerHeight={90}
      filterRowHeight={90}
      keyPageStep={5}
    />
  );
};

export default Table;
