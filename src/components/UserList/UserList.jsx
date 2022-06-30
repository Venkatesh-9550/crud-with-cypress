import React, { useEffect, useState } from "react";
import UserEntry from "../UserEntry/UserEntry";
import "./UserList.css";
const UserList = () => {

  const [userData, setUserData] = useState([])

  useEffect(()=> {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        setUserData(data);
      } else if (xhr.status === 404) {
        console.log("No records found");
      }
    };

    xhr.onerror = function () {
      console.log("Network error occurred");
    };

    xhr.open(
      "GET",
      "https://crudcrud.com/api/725682142e8043f590c76aedfc840aff/users"
    );

    xhr.send();
  }, []);

  const getData = (e) => {
    e.preventDefault()
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        setUserData(data);
      } else if (xhr.status === 404) {
        console.log("No records found");
      }
    };

    xhr.onerror = function () {
      console.log("Network error occurred");
    };

    xhr.open(
      "GET",
      "https://crudcrud.com/api/725682142e8043f590c76aedfc840aff/users"
    );

    xhr.send();
  }

  return (
    <div className="user-list-container">
      <div className="caption">
          <h2>User's data from API:</h2>
          <button className="refresh-button" onClick={getData}>
        Refresh List
      </button>
        </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            {/* <th scope="col">Gender</th> */}
            <th scope="col">Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <UserEntry key={user._id}
                name ={user.name}
                email = {user.email}
                number = {user.number}
                // gender = {user.gender}
                // id = {user._id}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
