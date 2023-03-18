import "../../App.scss";
import stylesTable from "../../assets/styles/vocabulary.module.scss";

import Table from "./Table.jsx";
import words from "../../assets/scripts/vocabulary";

function TableMap() {
  return (
    <div className={stylesTable.content} id="home">
      <table>
        <thead className={stylesTable.head}>
          <tr>
            <th>№</th>
            <th>Word</th>
            <th>Transcription</th>
            <th>Topic</th>
            <th>Translation</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, i) => (
            <Table
              key={i}
              id={word.id}
              english={word.english}
              transcription={word.transcription}
              tags={word.tags}
              russian={word.russian}
            ></Table>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableMap;
