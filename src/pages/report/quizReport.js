import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search from "./../../subComponents/search";
import axios from "axios";
import swal from "sweetalert";

const QuizReport = () => {
  const API_BASE = "http://localhost:1337";

  const location = useLocation();
  const propsData = location.state;
  const [quizReportData, setQuizReportData] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();

  // storing seach values
  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };
  useEffect(() => {
    const unitId = propsData?.unitId;
    axios
      .get(API_BASE + "/quizReport/" + unitId)
      .then((res) => setQuizReportData(res.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle "User not found" error
          swal({
            title: error.response.data.error,
            icon: "warning",
            dangerMode: true,
          });
        } else {
          // Handle other errors
          swal({
            title: error.message,
            icon: "warning",
            dangerMode: true,
          });
        }
      });
  }, []);
  console.log("unit data", quizReportData);

  return (
    <>
      <h3 className="py-4 result-head card ps-5">{propsData?.unitName}</h3>
      <div id="content-creator" className="mt-2">
        <Search
          handleGetSearchValue={getSearchValue}
          width={{ width: "w-auto" }}
        />
      </div>
      <div className="">
        <table className=" empTable table table-striped table-hover mt-sm-5 mt-lg-5 ">
          <thead>
            <tr className="table-head table-dark">
              <th>ID</th>
              <th>Name</th>
              <th>Attempted Time</th>
              <th>Submitted Time</th>
              <th>Time Taken</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {/* filter data of quiz report */}
            {quizReportData
              .filter((emp) => {
                if (showSearch) {
                  return emp;
                } else if (
                  emp.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return emp;
                }
              })
              .map((emp, index) => (
                //displaying data
                <tr key={index}>
                  <td>{emp.empId}</td>
                  <td>{emp.name}</td>
                  <td
                    dangerouslySetInnerHTML={{ __html: emp.attemptedTime }}
                  ></td>
                  <td
                    dangerouslySetInnerHTML={{ __html: emp.submittedTime }}
                  ></td>
                  <td>{emp.timeTaken}</td>
                  <td>{emp.score}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuizReport;
