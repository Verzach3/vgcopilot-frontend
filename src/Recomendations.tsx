import { Center, Grid, Image } from "@mantine/core";

function Recomendations() {
  return (
    <Center h={"100%"}>
      <Grid gutter={4} justify="space-between" align="flex-start">
        <Grid.Col span={4}>
          <Image mb={"md"} width={"18em"} src={"/codww2.jpg"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Image width={"18em"} src={"/codww2.jpg"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Image width={"18em"} src={"/codww2.jpg"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Image width={"18em"} src={"/codww2.jpg"} />
        </Grid.Col>
      </Grid>
    </Center>
  );
}

export default Recomendations;
