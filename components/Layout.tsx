import {
  AppShell,
  Container,
  createStyles,
  Group,
  Header,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconPlaneInflight } from "@tabler/icons";
import AuthenticationButton from "./AuthenticationButton";
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
        <Header height={90} p="xs">
          <Container>
            <Group direction="row" position="apart" spacing="xs">
              <Group direction="row">
                <ThemeIcon>
                  <IconPlaneInflight />
                </ThemeIcon>
                <Title className={classes.title}>CPT Movements Tracker</Title>
              </Group>
              <Group direction="row" spacing="xs">
                <AuthenticationButton />
                <ThemeSwitcher />
              </Group>
            </Group>
          </Container>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
