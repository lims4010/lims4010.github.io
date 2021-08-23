import axios from "axios";
import React, { useEffect, useState } from "react";
import words from "./words.yaml";

function WordListComponent() {
  const [defs, setDefs] = useState({});

  const pullWords = async () => {
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
      var res = await axios.get(url);
      var definition =
        res.data[0]["meanings"][0]["definitions"][0]["definition"];
      var example = res.data[0]["meanings"][0]["definitions"][0]["example"];
      var partOfSpeech = res.data[0]["meanings"][0]["partOfSpeech"];
      setDefs((prevDict) => ({
        ...prevDict,
        [word]: [partOfSpeech, definition, example],
      }));
    }
  };

  useEffect(() => {
    pullWords();
  }, []);

  return (
    <ul>
      {words.map(function (name, idx) {
        return (
          <div>
            {defs[name] && (
              <div>
                <li style={{ fontWeight: "bold" }} key={idx}>
                  {name}
                </li>
                <p>
                  {defs[name][0]} - {defs[name][1]}
                </p>
                <p style={{ fontStyle: "italic" }}>{defs[name][2]}</p>
              </div>
            )}
          </div>
        );
      })}
    </ul>
  );
}

export default WordListComponent;
