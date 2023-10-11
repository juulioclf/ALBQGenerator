import { Button, TextField } from "@mui/material";
import { BoxNames, BoxTeams, Container, Label, Title } from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";


export default function TodosAleatorios() {

  const [names, setNames] = useState("")
  const [randomNames, setRandomNames] = useState([])

  function onChangeName(e) {
    setNames(e.target.value)
  }

  function randomizeNames(array) {
    const nomes = array.split(',').map(nome => nome.trim());

    for (let i = nomes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
    }

    const numNomesPorTime = Math.ceil(nomes.length / 2);

    const timeA = nomes.slice(0, numNomesPorTime);
    const timeB = nomes.slice(numNomesPorTime);

    setRandomNames([
      { name: "time A", names: timeA },
      { name: "time B", names: timeB }
    ])
  }

  return (
    <Container>
      <Title>Todos Aleatorios</Title>
      <Label>Digite o nome dos jogadores, separados por vírgula!</Label>
      <TextField
        id="outlined-multiline-static"
        label=""
        multiline
        rows={7}
        sx={{ width: "60%" }}
        value={names}
        onChange={(e) => onChangeName(e)}
      />
      <Button variant="contained" onClick={(e) => randomizeNames(names)}>Revelar times</Button>

      <BoxTeams>
        {randomNames.length !== 0 && randomNames.map((team, index) => (
          <div key={index}>
            <h1>{team.name}</h1>
            <BoxNames>
              {team.names.map((name, nameIndex) => (
                <h1 key={nameIndex}>{name}</h1>
              ))}
            </BoxNames>
          </div>
        ))}
      </BoxTeams>


    </Container>
  );
}


