import React, { useState, useEffect, useRef } from "react";

import "../../App.scss";
import stylesTable from "../../assets/styles/vocabulary.module.scss";

import saveIcon from "../../assets/images/save.png";
import cancelIcon from "../../assets/images/right.png";
import deleteIcon from "../../assets/images/delete-all.png";
import editIcon from "../../assets/images/edit.png";

function Table(props) {
  const { id, english, transcription, tags, russian } = props;
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

  const numberRegex = /^\d+$/;
  const errorID = "❗Only numbers in the field '№'❗";

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
    } else if (!inputText.id.match(numberRegex)) {
      console.log(errorID);
      // alert(errorID);
      setIsEdit(false);
    } else if (!inputText.russian.match(cyrillicRegex)) {
      console.log(errorRussian);
      // alert(errorRussian);
      setIsEdit(false);
    } else if (!inputText.english.match(latinRegex)) {
      console.log(errorEnglish);
      // alert(errorEnglish);
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
                className={`${invalidInput(inputText.id)}`}
                onChange={handleInputChange}
              />
              {/* <p className="error-message">{errorID}</p> */}
            </th>
            <th>
              <input
                value={inputText.english}
                name="english"
                className={`${invalidInput(inputText.english)}`}
                onChange={handleInputChange}
              />
              {/* <p className="error-message">{errorEnglish}</p> */}
            </th>
            <th>
              <input
                value={inputText.transcription}
                name="transcription"
                className={`${invalidInput(inputText.transcription)}`}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                value={inputText.tags}
                name="tags"
                className={`${invalidInput(inputText.tags)}`}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                value={inputText.russian}
                name="russian"
                className={`${invalidInput(inputText.russian)}`}
                onChange={handleInputChange}
              />
              {/* <p className="error-message">{errorRussian}</p> */}
            </th>
            <th className="edit-buttons">
              <div className="buttons">
                {pressed ? (
                  <>
                    <div
                      onClick={onSaveClick}
                      className={`save ${!isEdit ? "disabled" : ""}`}
                    >
                      <img src={saveIcon} className="icon" alt="Save"></img>
                    </div>
                    <div onClick={onCancelClick} className="cancel">
                      <img src={cancelIcon} className="icon" alt="Cancel"></img>
                    </div>{" "}
                  </>
                ) : (
                  <>
                    <div onClick={handleChange} className="edit">
                      <img src={editIcon} className="icon" alt="Edit"></img>
                    </div>{" "}
                    <div className="delete">
                      <img src={deleteIcon} className="icon" alt="Delete"></img>
                    </div>
                  </>
                )}
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
              <div className="buttons">
                {pressed ? (
                  <>
                    <div onClick={handleChange}>
                      <img
                        src={saveIcon}
                        className="save icon"
                        alt="Save"
                      ></img>
                    </div>
                    <div onClick={handleChange}>
                      <img
                        src={cancelIcon}
                        className="cancel icon"
                        alt="Cancel"
                      ></img>
                    </div>{" "}
                  </>
                ) : (
                  <>
                    <div onClick={handleChange}>
                      <img
                        src={editIcon}
                        className="edit icon"
                        alt="Edit"
                      ></img>
                    </div>{" "}
                    <div>
                      <img
                        src={deleteIcon}
                        className="delete icon"
                        alt="Delete"
                      ></img>
                    </div>
                  </>
                )}
              </div>
            </th>
          </>
        )}
      </tr>
    </>
  );
}

export default Table;
