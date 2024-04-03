import React from "react";

import "./App.css";

export default function StudentForm() {
    return (
        <div className="container">
            <div>
                <h1>
                    Student Form
                </h1>
                <p>Please enter your student information below.</p>
                <form>
                    <table >
                        <tr>
                            <th>Student Name: </th>
                            <td> <input type="text" required></input></td>
                        </tr>
                        <tr>
                            <th>Student Email: </th>
                            <td><input type="text" required></input></td>
                        </tr>
                        <tr>
                            <th>Phone Number: </th>
                            <td><input type="text" required></input></td>
                        </tr>

                    </table>
                    <button className="submitBtn" type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}
