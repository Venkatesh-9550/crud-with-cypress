import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserEntry.css";

const UserEntry = (props) => {
  const { name, email, number} = props;
  const url = `https://crudcrud.com/api/725682142e8043f590c76aedfc840aff/users/${id}`;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const deleteUser = () => {
    try {
      fetch(url, {
        method: "DELETE",
      });
      setModal(!modal);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{number}</td>
        {/* <td>{gender}</td> */}
        <td>
          <Link to={`/update/${id}`}>
            <button className="button">Update</button>
          </Link>
          <button className="button" onClick={toggleModal}>
            Delete
          </button>
        </td>
      </tr>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="confirm">Confirm to delete user</h2>
            <button className="button" onClick={deleteUser}>
              Confirm
            </button>
            <button className="close-modal button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserEntry;