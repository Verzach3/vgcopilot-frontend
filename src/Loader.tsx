import { Loader, Center, Title, Stack } from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {

  const navigate = useNavigate();
  const {start, clear} = useTimeout(() => navigate("/recomendations"), 5000);

  useEffect(() => {
    start();
    return () => {
      clear();
    }
  }, [])
  

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
