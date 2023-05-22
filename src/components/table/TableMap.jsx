import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../redux/actions.js";
import { getWordsCollection } from "../../redux/actions.js";
import GET from "../../redux/GET.js";

import Table from "./Table.jsx";
import AddWord from "../AddWord";

import "../../App.scss";
import stylesTable from "../../assets/styles/vocabulary.module.scss";

export default function TableMap() {
  const dictionary = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      const data = await GET.getWordsCollection();
      dispatch(getWordsCollection(data));
    }
    get();
  }, [dispatch, dictionary]);

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
