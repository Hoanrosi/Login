import React, { useState, useEffect } from "react";
import axios from "axios";
import "./table.scss";
import Header from "./Header";
import ContentTable from "./ContentTable";
import Pagination from "./Pagination";

function Table({ dataLevel, handleSearch, filterDataDomain, filterDataType }) {
  const [listDataFilter, setListDataFilter] = useState([]);
  console.log("filterDataDomain :>> ", filterDataDomain);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const filterData = JSON.stringify({
          domain: filterDataDomain,
          type: filterDataType,
        });
        const res = await axios.get(
          `http://192.168.3.114:9001/api/v1/users?filter=${filterData}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            // params: {
            //   filter: filterData,
            // },
          }
        );

        console.log(res.data.result, 101); // Truy xuất username từ phần tử đầu tiên của mảng
        const value = res.data.result;
        value.map((item) => {
          console.log(item.username, 102);
          console.log(item.Department, 103);
        });

        setListDataFilter(res.data.result);
      } catch {
        console.log("error");
      }
    };
    fetchData();
  }, [filterDataDomain]);
  return (
    <div className="resource-content">
      <Header handleSearch={handleSearch} />
      <ContentTable listDataFilter={listDataFilter} dataLevel={dataLevel} />
      <Pagination />
    </div>
  );
}

export default Table;
