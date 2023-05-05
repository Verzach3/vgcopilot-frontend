import { Loader, Center, Title, Stack } from "@mantine/core";

function Loading() {
  return (
    <Center h={"100%"}>
      <Stack>
        <Center>
          <Title>Estamos cargando los resultados</Title>
        </Center>
        <Center>
          <Loader size="xl" variant="bars" />
        </Center>
      </Stack>
    </Center>
  );
}

export default Loading;
