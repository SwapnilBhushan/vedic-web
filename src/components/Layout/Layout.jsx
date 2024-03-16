import React, { useCallback, useEffect, useState } from "react";
import "./layout.css";
import CourseCard from "../courses/CourseCard";
import IconSection from "../UI/IconSection";
import axios from "axios";
import STATIC_VALUES from "../../STATIC_VALUES";

const Layout = () => {
  const [courses, setCourses] = useState([]);
  const [sorting, setSorting] = useState(null);
  const [hiddens, setHidden] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [reported, setReported] = useState(false);
  const [refetch, setRefetch] = useState();

  useEffect(() => {
    async function fetchData() {
      let url = `${STATIC_VALUES.SERVER_URL}/api/courses`;
      let filters = [];
      if (sorting) {
        filters.push(`sortby=${sorting.sortby}&sortorder=${sorting.sortorder}`);
      }
      if (hiddens) {
        filters.push(`hidden=${hiddens}`);
      }
      if (bookmarked) {
        filters.push(`bookmarked=${bookmarked}`);
      }
      if (reported) {
        filters.push(`reported=${reported}`);
      }
      if (filters.length > 0) {
        url = `${STATIC_VALUES.SERVER_URL}/api/courses?${filters.join("&")}`;
      }
      const res = await axios.get(url);
      setCourses(res.data);
    }
    fetchData();
  }, [sorting, hiddens, reported, bookmarked, refetch]);

  const setAction = useCallback(
    (action, id) => {
      const doAction = async (patchData, id) => {
        let url = `${STATIC_VALUES.SERVER_URL}/api/courses/${id}`;
        const data = await axios.patch(url, patchData);
        setRefetch(data);
      };
      switch (action) {
        case "hide":
          doAction({ isHidden: true }, id);
          break;
        case "unhide":
          doAction({ isHidden: false }, id);
          break;
        case "bookmark":
          doAction({ isBookmarked: true }, id);
          break;
        case "unbookmark":
          doAction({ isBookmarked: false }, id);
          break;
        case "report":
          doAction({ isReported: true }, id);
          break;
        case "unreport":
          doAction({ isReported: false }, id);
          break;
        default:
          break;
      }
      console.log(hiddens, reported, bookmarked);
    },
    [bookmarked, hiddens, reported]
  );

  return (
    <div className="layout">
      <IconSection
        setSorting={setSorting}
        bookmarked={bookmarked}
        hidden={hiddens}
        reported={reported}
        setHidden={setHidden}
        setBookmarked={setBookmarked}
        setReported={setReported}
        setRefetch={setRefetch}
      />
      {courses.map((item, index) => {
        const backgroundColor = index % 2 === 0 ? "#FFFCF2" : "#fff";
        return (
          <div className="card" key={index} style={{ backgroundColor }}>
            <CourseCard item={item} setAction={setAction} />
          </div>
        );
      })}
    </div>
  );
};

export default Layout;
