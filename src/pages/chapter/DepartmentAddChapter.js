
import React, { useState, useEffect } from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import validator from "validator";
import jwt_decode from "jwt-decode";
import axios from "axios";

const DepartmentAddChapter = () => {
    const deptID = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData.department;
    const [chaptername, setChapterName] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState();
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:1337/departments/showAllDepartments")
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const selectedDepartmentName = departments.find(department => department._id === deptID)?.depName;
    // console.log(selectedDepartmentName);

    function submitChapter(e) {
        e.preventDefault();
        if (!validator.isAlpha(chaptername.replace(/[^A-Za-z]/g, ""))) {  // Must contain at least 1 alphabet
            swal({
                icon: "warning",
                text: "Chapter name must contain at least one alphabet letter.",
            });
            return;
        }

        // Validate chapter name starts with a capital letter
        if (!chaptername.match(/^[A-Z]/)) {
            swal({
                icon: "warning",
                text: "Chapter name must start with a capital letter.",
            });
            return;
        }

        if (!selectedDepartment) {
            swal({
                icon: "warning",
                text: "Please select your department",
            });
            return;
        }

        axios
            .post("http://localhost:1337/chapters/addChapter", {
                chapterName: chaptername,
                depID: selectedDepartment,
                userID: jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData._id
            })
            .then((res) => {
                if (res.data.status === true) {
                    swal({
                        icon: "success",
                        text: res.data.message,
                    });
                    setChapterName("");
                } else {
                    swal({
                        icon: "warning",
                        text: res.data.message,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <div className="alert mt-3 heading"><h5>Create Chapter for your department</h5></div>
            <div className="columns mt-4">
                <form name="myForm" onSubmit={submitChapter}>
                    <div className="field">
                        <label className="ml-5">Chapter Name</label>
                        <div className="control">
                            <input
                                type="text"
                                name="cname"
                                className="inputdata my-3 ml-5"
                                placeholder="Name"
                                value={chaptername}
                                onChange={(e) => setChapterName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <label className="ml-5 my-3 createchap">Suitable Department</label>
                    <div className="col-md-7">
                        <select style={{ "backgroundColor": "MintCream" }}
                            onChange={(e) => {
                                setSelectedDepartment(e.target.value);
                            }}
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option disabled selected>Department</option>
                            {
                                <option value={deptID}>
                                    {selectedDepartmentName}
                                </option>
                            }
                        </select>
                    </div>
                    <div>
                        <img src={image4} className="picside" draggable={false} alt="this is image" />
                    </div>
                    <br></br>
                    <div className="control">
                        <button
                            type="submit"
                            className="btn btn-success mr-1 column is-half text-white col-md-7 my-3"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DepartmentAddChapter;
