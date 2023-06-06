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
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const form = useForm({
    initialValues: register
      ? {
          name: "",
          email: "",
          password: "",
        }
      : {
          email: "",
          password: "",
        },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div className={classes.wrapper}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          if (register) {
            const res = await axios.post("http://127.0.0.1:8000/api/register/", values);
            if (res.status === 200) {
              navigate("/auth/login");
            }
          } else {
            const res = await axios.post(
              "http://127.0.0.1:8000/api/login/",
              values,
            );
            // console.log(res.data);
            document.cookie = `jwt=${res.data["jwt token"]}; path=/`;
            // localStorage.setItem("token", res.data["jwt token"]);
            if (res.status === 200) {
              navigate("/start-test");
            }
          }
        })}
      >
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
              <TextInput
                label="Nombre"
                placeholder="tu nombre"
                size="md"
                {...form.getInputProps("name")}
              />
            ) : null}
            <TextInput
              mt={"md"}
              label="Email"
              placeholder="hola@gmail.com"
              size="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Contraseña"
              placeholder="tu contraseña"
              mt="md"
              size="md"
              {...form.getInputProps("password")}
            />
            <Checkbox label="Manten mi sesión iniciada" mt="xl" size="md" />
            <Button
              fullWidth
              mt="xl"
              size="md"
              variant="gradient"
              gradient={{ from: "blue", to: "purple" }}
              type="submit"
            >
              {register ? "Registrarse" : "Iniciar Sesión"}
            </Button>

            <Text ta="center" mt="md">
              {register ? "Ya tienes una cuenta?" : "No tienes una cuenta?"}{" "}
              <Anchor
                href={register ? "/auth/login" : "/auth/register"}
                weight={700}
                // onClick={(event) => event.preventDefault()}
                gradient={{ from: "blue", to: "purple" }}
                variant="gradient"
              >
                {register ? "Iniciar Sesion" : "Registrarse"}
              </Anchor>
            </Text>
          </Paper>
        </Center>
      </form>
    </div>
  );
}
