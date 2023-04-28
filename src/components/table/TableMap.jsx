import Table from "./Table.jsx";
import { Context } from "../../context/Context.js";
import { useContext, useState } from "react";

import AddWord from "../AddWord";
// import saveIcon from "../../assets/images/save.png";
// import cancelIcon from "../../assets/images/right.png";

import "../../App.scss";
import stylesTable from "../../assets/styles/vocabulary.module.scss";

export default function TableMap() {
  const { dictionary } = useContext(Context);

  return (
    <div className={stylesTable.content} id="home">
      <AddWord />

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
          {dictionary.map((word, i) => (
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
