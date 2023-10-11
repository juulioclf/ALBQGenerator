import { Button, TextField } from "@mui/material";
import { BoxNames, BoxTeams, Container, Label, Title } from "./styles";
import { useState } from "react";
import ColorToggleButton from "../../components/ToggleBox";


export default function Lider() {


  const [type, setType] = useState("")
  const [names, setNames] = useState("")
  const [randomLeaders, setRandomLeaders] = useState([])
  const [teamates, setTeamates] = useState([])

  function onChangeName(e) {
    setNames(e.target.value)
  }

  function chooseTwoLeader(array) {
    const nomes = array.split(',').map(nome => nome.trim());

  const nomeTime1 = nomes[Math.floor(Math.random() * nomes.length)];
  nomes.splice(nomes.indexOf(nomeTime1), 1);

  const nomeTime2 = nomes[Math.floor(Math.random() * nomes.length)];

  const outrosNomes = nomes.filter(nome => nome !== nomeTime1 && nome !== nomeTime2);

  setTeamates(outrosNomes)

  const times = [
    { name: nomeTime1, time1: [] },
    { name: nomeTime2, time2: [] }
  ];

  setRandomLeaders(times)
  }

  console.log(teamates)
  return (
    <Container>
      <Title>Modo Líder</Title>
      <ColorToggleButton
        type={type}
        setType={setType}
      />

      {type === "aleatorio" && <>
        <Label>Digite nomes, e iremos escolher 2 líderes aleatoriamente!</Label>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={1}
          sx={{ width: "60%" }}
          value={names}
          onChange={(e) => onChangeName(e)}
        />
        <Button variant="contained" onClick={(e) => chooseTwoLeader(names)}>Revelar Líderes</Button>
        <BoxTeams>
          {randomLeaders?.length !== 0 && randomLeaders.map((team, index) => (
            <div key={index}>
              <h1>{team.name}</h1>
            </div>
          ))}
        </BoxTeams>
        <div style={{display: "flex", flexDirection: "row", gap: "1vw", border: "1px solid black", borderRadius: "16px", padding: "16px"}}>
        {teamates?.length !== 0 && teamates.map((team, index) => (
          <div key={index}>
            <button>{team}</button>
          </div>
        ))}
        </div>
      </>
      }

      {type === "predefinido" && <>
        <Label>Digite o nome dos dois líderes!</Label>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={7}
          sx={{ width: "60%" }}
          value={names}
          onChange={(e) => onChangeName(e)}
        />
        <Button variant="contained" onClick={(e) => chooseTwoLeader(names)}>Revelar times</Button>
      </>
      }

    </Container>
  );
}


