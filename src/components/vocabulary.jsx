import "../App.css";
import "./vocabulary.css";

function LearnWord(props) {
  const { word, transcription, topic, partOfSpeech, translation } = props;
  return (
    <div className="word-card">
      <h2>{word}</h2>
      <div>
        <p>
          <span>Transcription: </span>
          {transcription}
        </p>
        <p>
          <span>Topic: </span>
          {topic}
        </p>
        <p>
          <span>Part of speech: </span>
          {partOfSpeech}
        </p>
        <p>
          <span>translation: </span>
          <b>{translation}</b>
        </p>
      </div>
    </div>
  );
}

export default LearnWord;
