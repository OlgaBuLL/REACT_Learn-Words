import "../App.scss";
import saveIcon from "../assets/images/save.png";
import deleteIcon from "../assets/images/cancel.png";
import editIcon from "../assets/images/edit.png";

function LearnWord(props) {
  const { id, english, transcription, tags, russian, isSelected } = props;
  let activeCard;
  if (isSelected) {
    activeCard = "selected";
  }

  return (
    <tr className={`word-card ${activeCard}`}>
      <th className="word-number">{id}</th>
      <th>
        <h2>{english}</h2>
      </th>
      <th className="transcription">{transcription}</th>
      <th className="topic">{tags}</th>
      <th className="translation">{russian}</th>
      <th className="edit-buttons">
        <div className="buttons">
          {isSelected && (
            <div>
              <img src={saveIcon} className="save icon"></img>
            </div>
          )}
          {isSelected && (
            <div>
              <img src={editIcon} className="edit icon"></img>
            </div>
          )}
          {isSelected && (
            <div>
              <img src={deleteIcon} className="delete icon"></img>
            </div>
          )}
          {!isSelected && (
            <div>
              <img src={editIcon} className="edit icon"></img>
            </div>
          )}
          {!isSelected && (
            <div>
              <img src={deleteIcon} className="delete icon"></img>
            </div>
          )}
        </div>
      </th>
    </tr>
  );
}

export default LearnWord;

// return (
//   <div className="word-card">
//     <h2>{english}</h2>
//     <div>
//       <p>
//         <span>Transcription: </span>
//         {transcription}
//       </p>
//       <p>
//         <span>Topic: </span>
//         {tags}
//       </p>
//       <p>
//         <span>translation: </span>
//         <b>{russian}</b>
//       </p>
//     </div>
//   </div>
// );
