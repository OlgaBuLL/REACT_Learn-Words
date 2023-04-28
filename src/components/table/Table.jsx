import React, { useState, useContext, useEffect } from "react";
// import {motion} from "framer-motion";
import { Context } from "../../context/Context";

import "../../App.scss";
import stylesTable from "../../assets/styles/vocabulary.module.scss";

import saveIcon from "../../assets/images/save.png";
import cancelIcon from "../../assets/images/right.png";
import deleteIcon from "../../assets/images/delete-all.png";
import editIcon from "../../assets/images/edit.png";

export default function Table(props) {
  const { id, english, transcription, tags, russian } = props;
  const { updateWord, deleteWord } = useContext(Context);
  const [inputText, setInputText] = useState(props);
  const [pressed, setPressed] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const handleChange = () => {
    if (isEdit) setPressed(!pressed);
    else setPressed(pressed);
  };

  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const cyrillicRegex = /^[А-Яа-я]+$/;
  const errorRussian =
    "❗Only cyrillic characters in the field 'TRANSLATION'❗";

  const latinRegex = /^[A-Za-z]+$/;
  const errorEnglish = "❗Only latin characters in the field 'WORD'❗";

  const checkInputs = () => {
    if (
      inputText.id === "" ||
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.tags === "" ||
      inputText.russian === ""
    ) {
      setIsEdit(false);
    } else if (!inputText.russian.match(cyrillicRegex)) {
      console.log(errorRussian);
      setIsEdit(false);
    } else if (!inputText.english.match(latinRegex)) {
      console.log(errorEnglish);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  function invalidInput(inputField) {
    return inputField === "" ? "invalidInput" : "";
  }

  const onSaveClick = () => {
    if (isEdit) {
      handleChange();
      console.log("Form parameters:", inputText);
      updateWord(inputText);
    }
  };

  const onCancelClick = () => {
    if (
      inputText.id !== id ||
      inputText.english !== english ||
      inputText.transcription !== transcription ||
      inputText.tags !== tags ||
      inputText.russian !== russian
    ) {
      inputText.id = id;
      inputText.english = english;
      inputText.transcription = transcription;
      inputText.tags = tags;
      inputText.russian = russian;
      handleChange();
    } else handleChange();
  };

  let activeCard;
  if (pressed) {
    activeCard = "selected";
  }
  return (
    <>
      <tr className={`word-row ${activeCard}`} onClick={checkInputs}>
        {pressed ? (
          <>
            <th>
              <input
                value={inputText.id}
                name="id"
                className={`input-table ${invalidInput(inputText.id)}`}
                onChange={handleInputChange}
              />
              {/* <p className="error-message">{errorID}</p> */}
            </th>
            <th>
              <input
                value={inputText.english}
                name="english"
                className={`input-table ${invalidInput(inputText.english)}`}
                onChange={handleInputChange}
              />
              {/* <p className="error-message">{errorEnglish}</p> */}
            </th>
            <th>
              <input
                value={inputText.transcription}
                name="transcription"
                className={`input-table ${invalidInput(
                  inputText.transcription
                )}`}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                value={inputText.tags}
                name="tags"
                className={`input-table ${invalidInput(inputText.tags)}`}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                value={inputText.russian}
                name="russian"
                className={`input-table ${invalidInput(inputText.russian)}`}
                onChange={handleInputChange}
              />
              {/* <p className="error-message">{errorRussian}</p> */}
            </th>
            <th className="edit-buttons">
              <div className="table-buttons">
                <>
                  <button
                    onClick={onSaveClick}
                    className={`save ${!isEdit ? "disabled" : ""}`}
                  >
                    <img
                      src={saveIcon}
                      className="icon"
                      alt="Save"
                      title="Save word"
                    ></img>
                  </button>
                  <button onClick={onCancelClick} className="cancel">
                    <img
                      src={cancelIcon}
                      className="icon"
                      alt="Cancel"
                      title="Discard changes"
                    ></img>
                  </button>{" "}
                </>
              </div>
            </th>
          </>
        ) : (
          <>
            <th className={stylesTable.wordId}>{id}</th>
            <th className={stylesTable.english}>{english}</th>
            <th className={stylesTable.transcription}>{transcription}</th>
            <th className={stylesTable.topic}>{tags}</th>
            <th className={stylesTable.translation}>{russian}</th>
            <th className="edit-buttons">
              <div className="table-buttons">
                <button onClick={handleChange}>
                  <img
                    src={editIcon}
                    className="edit icon"
                    alt="Edit"
                    title="Edit word"
                  />
                </button>{" "}
                <button onClick={() => deleteWord(id)}>
                  <img
                    src={deleteIcon}
                    className="delete icon"
                    alt="Delete"
                    title="Delete word"
                  />
                </button>
              </div>
            </th>
          </>
        )}
      </tr>
    </>
  );
}
