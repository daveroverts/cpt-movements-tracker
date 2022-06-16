import {
  AppShell,
  Container,
  createStyles,
  Group,
  Header,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { PlaneInflight } from "tabler-icons-react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Layout({ children }: any) {
  const useStyles = createStyles((theme) => ({
    title: {
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        fontSize: "20px",
      },
    },
  }));

  const { classes } = useStyles();
  return (
    <AppShell
      header={
        <Header height={60} p="xs">
          <Container>
            <Group direction="row" position="apart" spacing="xs">
              <Group direction="row">
                <ThemeIcon>
                  <PlaneInflight />
                </ThemeIcon>
                <Title className={classes.title}>CPT Movements Tracker</Title>
              </Group>
              <ThemeSwitcher />
            </Group>
          </Container>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
