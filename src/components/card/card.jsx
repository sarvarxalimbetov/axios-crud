import React from "react";
import { request } from "../../config/request";
import Form from "../form/form";
import "./card.css";

const Card = ({ getData, setData, book, author, price, id }) => {
  const [edit, setEdit] = React.useState(false);

  const deleteItem = () => {
    request.delete(`/books/${id}`).then(() => {
      getData();
    });
  };

  const editItem = () => {
    setEdit(prev => !prev)
  };

  return (
    <li className="card_item">
      {edit ? (
        <Form id={id} defaultValue={{book, author, price}} getData={getData} setEdit={setEdit}/>
      ) : (
        <>
          <p className="card_title">
            <b>Kitob nomi:</b> <br /> {book}
          </p>
          <p className="card_author">
            <b>Muallif:</b> <br /> {author}
          </p>
          <p className="card_price">
            <b> Narxi:</b> <br /> {price}
          </p>

          <button onClick={editItem} className="card_edit">
            Edit
          </button>
          <button onClick={deleteItem} className="card_delete">
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default Card;
