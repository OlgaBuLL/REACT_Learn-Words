import React, { useState } from "react";

import "../../App.scss";
import stylesTable from "../../assets/styles/vocabulary.module.scss";

import saveIcon from "../../assets/images/save.png";
import cancelIcon from "../../assets/images/right.png";
import deleteIcon from "../../assets/images/delete-all.png";
import editIcon from "../../assets/images/edit.png";

function Table(props) {
  const { id, english, transcription, tags, russian } = props;
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };
  let activeCard;
  if (pressed) {
    activeCard = "selected";
  }
  return (
    <>
      <tr className={`word-row ${activeCard}`}>
        {pressed ? (
          <>
            <th>
              <input value={id} />
            </th>
            <th>
              <input value={english} />
            </th>
            <th>
              <input value={transcription} />
            </th>
            <th>
              <input value={tags} />
            </th>
            <th>
              <input value={russian} />
            </th>
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
