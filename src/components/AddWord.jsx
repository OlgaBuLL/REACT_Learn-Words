import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import "../assets/styles/add-word.module.scss";
import saveIcon from "../assets/images/save.png";
import cancelIcon from "../assets/images/right.png";
// import { motion } from "framer-motion";

export default function AddWord(props) {
  const { addWord } = useContext(Context);
  const [inputText, setInputText] = useState(props);
  const [isEmpty, setIsEmpty] = useState(true);

  const [addWordSection, setAddWordSection] = useState(false);
  const [showBtnAdd, setShowBtnAdd] = useState(true);

  let showAddNewWord;
  if (addWordSection) showAddNewWord = "showAddNewWord";

  const showAddWordForm = () => {
    // inputText.english = "";
    // inputText.transcription = "";
    // inputText.russian = "";
    // inputText.tags = "";
    setAddWordSection(!addWordSection);
    setShowBtnAdd(!showBtnAdd);
  };

  const handleChangeInput = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });

    if (event.target.value.match(/[0-9]/)) {
      alert("Пожалуйста, вводите только буквы");
    } else if (event.target.value === "") {
      alert("Пожалуйста, заполните все поля");
    }
  };

  useEffect(() => {
    if (
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.russian === "" ||
      inputText.tags === ""
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [inputText]);

  function onSubmit() {
    if (
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.russian === "" ||
      inputText.tags === ""
    ) {
      alert("Error: Please fill in all the fields");
    } else {
      console.log("Form parameters:", inputText);
      addWord(inputText);
      setIsEmpty();
      alert("New word was added successfully✅");
      clearForm();
    }
  }

  const clearForm = () => {
    showAddWordForm();
  };

  return (
    <>
      <div className="addWord-section">
        {addWordSection ? (
          <>
            <div className={`${showAddNewWord}`}>
              <p>Add new word:</p>
              <div>
                <input
                  type="text"
                  className={`input-addWord ${inputText.english}`}
                  placeholder="english word"
                  name="english"
                  value={inputText.english || ""}
                  onChange={handleChangeInput}
                />

                <input
                  type="text"
                  className={`input-addWord ${inputText.transcription}`}
                  placeholder="transcription"
                  name="transcription"
                  value={inputText.transcription || ""}
                  onChange={handleChangeInput}
                />

                <input
                  type="text"
                  className={`input-addWord ${inputText.tags}`}
                  placeholder="topic"
                  name="tags"
                  value={inputText.tags || ""}
                  onChange={handleChangeInput}
                />

                <input
                  type="text"
                  className={`input-addWord ${inputText.russian}`}
                  placeholder="russian word"
                  name="russian"
                  value={inputText.russian || ""}
                  onChange={handleChangeInput}
                />

                <div>
                  <div
                    className={`save ${isEmpty ? "disabled" : ""}`}
                    onClick={onSubmit}
                  >
                    <img
                      src={saveIcon}
                      className="icon"
                      alt="Save"
                      title="Save word"
                    />
                  </div>

                  <div className="cancel" onClick={clearForm}>
                    <img
                      src={cancelIcon}
                      className="icon"
                      alt="Cancel"
                      title="Cancel"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hideAddNewWord">
              <p>Add new word:</p>
              <div>
                <input
                  type="text"
                  className={`input-addWord ${inputText.english}`}
                  placeholder="english word"
                  name="english"
                  value={inputText.english || ""}
                  onChange={handleChangeInput}
                />

                <input
                  type="text"
                  className={`input-addWord ${inputText.transcription}`}
                  placeholder="transcription"
                  name="transcription"
                  value={inputText.transcription || ""}
                  onChange={handleChangeInput}
                />

                <input
                  type="text"
                  className={`input-addWord ${inputText.tags}`}
                  placeholder="topic"
                  name="tags"
                  value={inputText.tags || ""}
                  onChange={handleChangeInput}
                />

                <input
                  type="text"
                  className={`input-addWord ${inputText.russian}`}
                  placeholder="russian word"
                  name="russian"
                  value={inputText.russian || ""}
                  onChange={handleChangeInput}
                />

                <div>
                  <div
                    className={`save ${isEmpty ? "disabled" : ""}`}
                    onClick={onSubmit}
                  >
                    <img
                      src={saveIcon}
                      className="icon"
                      alt="Save"
                      title="Save word"
                    />
                  </div>

                  <div className="cancel" onClick={clearForm}>
                    <img
                      src={cancelIcon}
                      className="icon"
                      alt="Cancel"
                      title="Cancel"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <button className="addWord-btn" onClick={showAddWordForm}>
              + NEW WORD
            </button>{" "}
          </>
        )}
      </div>
    </>
  );
}
