import {
  Center,
  Grid,
  Group,
  Image,
  Rating,
  Title,
  Text,
  Stack,
} from "@mantine/core";

function Rate() {
  return (
    <Center
      style={{
        height: "100%",
      }}
      ml={"13%"}
    >
      <Stack>
        <Center mb={"2%"}>
          <Title>Faltan 10 juegos por calificar</Title>
        </Center>
        <Grid
          grow
          gutter={5}
          style={{
            justifyContent: "center",
          }}
        >
          <Grid.Col span={4}>
            <Center>
              <Image radius={"md"} width={"30em"} src={"/codww2.jpg"} />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Stack>
                <Title pt={"15%"}>Call of Duty: World War II</Title>

                <Text w={"45%"}>
                  un videojuego de disparos en primera persona desarrollado por
                  Sledgehammer Games, distribuido por Activision, perteneciente
                  a la franquicia Call of Duty y es la decimocuarta entrega de
                  la saga.
                </Text>
                <Rating count={12} size={"xl"} defaultValue={3} />
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
      </Stack>
    </Center>
  );
}

export default Rate;
