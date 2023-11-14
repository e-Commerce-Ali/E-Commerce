import { useState } from "react";
import styles from "./styles.module.css";

import { Container, Typography, TextField, Stack } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container maxWidth="sm">
      <Stack
        borderRadius={2}
        direction="column"
        alignItems="center"
        gap={2}
        padding="1rem"
        sx={{
          backgroundColor: "#E1D8CB",
          boxShadow: "2px 2px 5px #514f4d",
        }}
      >
        <Typography variant="h4" color="textSecondary">
          Giriş Yap
        </Typography>

        <TextField
          id="username"
          label="Kullanıcı adı"
          required
          value={username}
          variant="standard"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          id="password"
          label="Şifre"
          type="password"
          color="secondary"
          required
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button}>Giriş Yap</button>
      </Stack>
    </Container>
  );
};

export default Login;
