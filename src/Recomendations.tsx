import { Center, Grid, Image, Title, Text, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import { recommendationsReqBoby } from "./recommendationsSharedState";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import { Game } from "./rawgTypes";
import { nanoid } from "nanoid";
function Recomendations() {
  const reqBody = useRecoilValue(recommendationsReqBoby);
  const [recommendations, setRecommendations] = useState([])
  useEffect(() => {
    console.log(reqBody);
    axios.post("http://localhost:8000/api/1recommender/", reqBody, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => {
    let resdata = res.data as Game[];
    const reqs = resdata.map((game) => {
      return (
        <Recomendation
        key={nanoid()}
          title={game.name}
          image={game.background_image}
        />
      );
    });
    setRecommendations(reqs as any)
  });
    return () => {};
  }, []);

  return (
    <Center h={"100%"}>
      <Grid gutter={4} justify="space-between" align="flex-start">
        {recommendations}
      </Grid>
    </Center>
  );
}

export default Recomendations;

function Recomendation({ title, image }: { title: string; image: string }) {
  return (
    <Grid.Col span={4} mb={"md"}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Stack>
          <Center>
            <Image width={"18em"} src={image} />
          </Center>
          <Center>
            <Text>{title}</Text>
          </Center>
        </Stack>
      </motion.div>
    </Grid.Col>
  );
}
