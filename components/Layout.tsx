import {
  AppShell,
  createStyles,
  Group,
  Header,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconPlaneInflight } from "@tabler/icons";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Layout({ children }: any) {
  const useStyles = createStyles((theme) => ({
    title: {
      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: "20px",
      },
    },
  }));

  const { classes } = useStyles();
  return (
    <AppShell
      header={
        <Header height={60} p="xs">
          <Group direction="row" position="apart" spacing="xs">
            <Group direction="row">
              <ThemeIcon>
                <IconPlaneInflight />
              </ThemeIcon>
              <Title className={classes.title}>CPT Movements Tracker</Title>
            </Group>
            <ThemeSwitcher />
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
