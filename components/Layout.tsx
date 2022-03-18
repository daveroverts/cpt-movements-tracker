import {
  AppShell,
  createStyles,
  Group,
  Header,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { PlaneInflight } from "tabler-icons-react";

export default function Layout({ children }: any) {
  const useStyles = createStyles((theme) => ({
    title: {
      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: "24px",
      },
    },
  }));

  const { classes } = useStyles();
  return (
    <AppShell
      header={
        <Header height={60} p="xs">
          <Group align="center" direction="row">
            <ThemeIcon>
              <PlaneInflight />
            </ThemeIcon>
            <Title className={classes.title}>CPT Movements Tracker</Title>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
