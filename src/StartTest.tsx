import {
  Center,
  Title,
  useMantineTheme,
  Text,
  Slider,
  Grid,
  Button,
  Select,
  SelectProps,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { startTestSharedState } from "./startTestSharedState";

function StartTest() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const setStartTestRes = useSetRecoilState(startTestSharedState);
  const [questionYears, setQuestionYears] = useState<string | null>(null);
  const [questionPerspective, setQuestionPerspective] = useState<string | null>(
    null
  );
  const [questionCoop, setQuestionCoop] = useState<string | null>(null);
  const [questionIndie, setQuestionIndie] = useState<string | null>(null);

  useState(() => {
    setQuestionYears(null);
    setQuestionPerspective(null);
    setQuestionCoop(null);
    setQuestionIndie(null);
  });

  // axios.post("http://localhost:8000/api/1recommender/", [], {
  //   withCredentials: true,
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  // });
  function sendForm() {
    switch (questionYears) {
      case "Actuales":
        setStartTestRes((prev) => [...prev, "dates=2020-01-01,2023-12-31&"]);
        break;
      case "No tan viejos":
        setStartTestRes((prev) => [...prev, "dates=2006-01-01,2019-12-31&"]);
        break;
      case "Clasicos":
        setStartTestRes((prev) => [...prev, "dates=1900-01-01,2005-12-31&"]);
        break;
      default:
        break;
    }
    switch (questionPerspective) {
      case "Primera Persona":
        setStartTestRes((prev) => [...prev, "tags=first-person&"]);
        break;
      case "Tercera Persona":
        setStartTestRes((prev) => [...prev, "tags=third-person&"]);
        break;
      case "Isometrica":
        setStartTestRes((prev) => [...prev, "tags=isometric&"]);
        break;
      case "Realidad Virtual":
        setStartTestRes((prev) => [...prev, "tags=vr&"]);
        break;
      default:
        break;
    }

    switch (questionCoop) {
      case "Cooperativos":
        setStartTestRes((prev) => [...prev, "tags=co-op,online-co-op&"]);
        break;
      case "Un solo jugador":
        setStartTestRes((prev) => [...prev, "tags=singleplayer&"]);
        break;
      default:
        break;
    }

    switch (questionIndie) {
      case "Si":
        setStartTestRes((prev) => [...prev, "genres=indie&"]);
        break;
      case "No":
        break;
      default:
        break;
    }

    setQuestionYears(null);
    setQuestionPerspective(null);
    setQuestionCoop(null);
    setQuestionIndie(null);
    navigate("/rate");
  }
  return (
    <Center
      mx={"auto"}
      mt={"5%"}
      mb={"10%"}
      style={{
        maxWidth: "100%",
      }}
    >
      <div>
        <Title
          order={2}
          style={{
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            fontFamily: `Fira Sans, ${theme.fontFamily}`,
          }}
          ta="center"
          mt="md"
          mb={50}
        >
          Test de perfil de videojuegos
        </Title>
        <Text
          style={{
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            fontFamily: `Fira Sans, ${theme.fontFamily}`,
            width: "50%",
            margin: "auto",
          }}
          ta="center"
          mt="md"
          mb={50}
        >
          Esta encuesta de gustos en videojuegos tiene como objetivo recolectar
          información sobre las preferencias y hábitos de juego de el
          encuestado. Los resultados de la encuesta se utilizarán para entender
          mejor las tendencias y patrones en los gustos de el jugador.
        </Text>
        <QuestionSelect
          props={{ value: questionYears, onChange: setQuestionYears }}
          question="Eres más de juegos actuales (> 2020), no tan viejos (2019, 2006) o clásicos (<2005)?"
          questionOpts={["Actuales", "No tan viejos", "Clasicos"]}
        />
        <QuestionSelect
          props={{
            value: questionPerspective,
            onChange: setQuestionPerspective,
          }}
          question="Te gustan juegos en primera persona, tercera persona, de vista isométrica, vista de lado, realidad virtual?"
          questionOpts={[
            "Primera Persona",
            "Tercera Persona",
            "Isometrica",
            "Realidad Virtual",
          ]}
        />
        <QuestionSelect
          props={{
            value: questionCoop,
            onChange: setQuestionCoop,
          }}
          question="Te gustan juegos cooperativos o de un solo jugador?"
          questionOpts={["Cooperativos", "Un solo jugador"]}
        />
        <QuestionSelect
          props={{
            value: questionIndie,
            onChange: setQuestionIndie,
          }}
          question="Te gustan los juegos Indie?"
          questionOpts={["Si", "No"]}
        />
        <Center>
          <Button
            mt={"5em"}
            size="md"
            onClick={sendForm}
            disabled={
              !questionYears ||
              !questionPerspective ||
              !questionCoop ||
              !questionIndie
                ? true
                : false
            }
          >
            Enviar
          </Button>
        </Center>
      </div>
    </Center>
  );
}

export default StartTest;

function Question({
  question = "Pregunta corta",
  props,
}: {
  question: string;
  props?: any[];
}) {
  const theme = useMantineTheme();

  return (
    <Grid
      grow
      gutter={5}
      mt="md"
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "5%",
        height: "100%",
      }}
    >
      <Grid.Col span={5}>
        <Text
          style={{
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            fontFamily: `Fira Sans, ${theme.fontFamily}`,
          }}
        >
          {question}
        </Text>
      </Grid.Col>
      <Grid.Col span={5}>
        <Slider
          {...props}
          ml={"5%"}
          step={1}
          max={5}
          min={1}
          marks={[
            {
              value: 1,
              label: "1",
            },
            {
              value: 2,
              label: "2",
            },
            {
              value: 3,
              label: "3",
            },
            {
              value: 4,
              label: "4",
            },
            {
              value: 5,
              label: "5",
            },
          ]}
          size={"xl"}
          variant="gradient"
          color="purple"
        />
      </Grid.Col>
    </Grid>
  );
}

function QuestionSelect({
  question = "test",
  questionOpts = ["test"],
  props,
}: {
  question: string;
  questionOpts?: string[];
  props?: Omit<SelectProps, "data">;
}) {
  const theme = useMantineTheme();

  return (
    <Grid
      grow
      gutter={5}
      mt="md"
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "5%",
        height: "100%",
      }}
    >
      <Grid.Col span={5}>
        <Text
          style={{
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            fontFamily: `Fira Sans, ${theme.fontFamily}`,
          }}
        >
          {question}
        </Text>
      </Grid.Col>
      <Grid.Col span={5}>
        <Select ml={"5%"} data={questionOpts} {...props} />
      </Grid.Col>
    </Grid>
  );
}
