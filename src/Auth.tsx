import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  BackgroundImage,
  Center,
} from "@mantine/core";
// import background from "../public/pxfuel.jpg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundImage: "url(/pxfuel.jpg)",
    marginTop: rem(57),
    overflow: "hidden",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(700),
    marginTop: rem(80),
    maxWidth: rem(600),
    paddingTop: rem(80),
    paddingInline: rem(80),
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },

    [theme.fn.largerThan("sm")]: {
      width: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export interface AuthProps {
  register: boolean;
}

export function Auth({ register }: AuthProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      {/* <BackgroundImage src={background}/> */}
      <Center>
        <Paper className={classes.form} radius={0}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            {register ? "Bienvenido" : "Bienvenido de nuevo!"}
          </Title>
          {register ? (
            <TextInput label="Nombre" placeholder="tu nombre" size="md" />
          ) : null}
          <TextInput
            mt={"md"}
            label="Email"
            placeholder="hola@gmail.com"
            size="md"
          />
          <PasswordInput
            label="Contraseña"
            placeholder="tu contraseña"
            mt="md"
            size="md"
          />
          <Checkbox label="Manten mi sesión iniciada" mt="xl" size="md" />
          <Button
            fullWidth
            mt="xl"
            size="md"
            variant="gradient"
            gradient={{ from: "blue", to: "purple" }}
          >
            Iniciar Sesión
          </Button>

          <Text ta="center" mt="md">
            No tienes una cuenta?{" "}
            <Anchor
              href="/auth/register"
              weight={700}
              // onClick={(event) => event.preventDefault()}
              gradient={{ from: "blue", to: "purple" }}
              variant="gradient"
            >
              Registrarse
            </Anchor>
          </Text>
        </Paper>
      </Center>
    </div>
  );
}
