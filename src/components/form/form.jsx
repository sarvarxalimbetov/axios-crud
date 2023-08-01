import React from "react";
import { request } from "../../config/request";
import "./form.css";

const Form = ({ getData, id, defaultValue, setEdit }) => {
  const [inputValue, setInputValue] = React.useState(
    id
      ? defaultValue
      : {
          book: "",
          author: "",
          price: "",
        }
  );

  const changeInput = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!defaultValue) {
      request
        .post("/books", { ...inputValue })
        .then(() => {
          getData();
        })
        .catch((error) => {
          console.log(error.message);
        });

      setInputValue({
        book: "",
        author: "",
        price: "",
      });

      return;
    }

    request
      .put(`/books/${id}`, { ...inputValue })
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error.message);
      });

    setEdit(false)
  };

  return (
    <form className={id ? "edit_form" : "form"} onSubmit={submitForm}>
      <input
        onChange={changeInput}
        type="text"
        placeholder="book name"
        className="form_input book_input"
        name="book"
        value={inputValue.book}
        required
      />
      <input
        onChange={changeInput}
        type="text"
        placeholder="author name"
        className="form_input author_input"
        name="author"
        value={inputValue.author}
        required
      />
      <input
        onChange={changeInput}
        type="text"
        placeholder="book price"
        className="form_input price_input"
        name="price"
        value={inputValue.price}
        required
      />
      <button className="submit_btn">{id ? "Edit" : "Add"}</button>
    </form>
  );
};

export default Form;
