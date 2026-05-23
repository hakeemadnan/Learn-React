import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const Url = "https://official-joke-api.appspot.com/random_joke";
  const getJoke = async () => {
    let res = await fetch(Url);
    let jsonRes = await res.json();
    console.log(jsonRes);
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let res = await fetch(Url);
      let jsonRes = await res.json();
      console.log(jsonRes);
      setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    }getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>New Joke</button>
    </div>
  );
}
