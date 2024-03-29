import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
  createStyles,
} from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react";

export default function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const useStyles = createStyles((theme) => ({
    isVisible: {
      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        display: "none",
      },
    },
  }));

  const { classes } = useStyles();

  const changeColor = () => toggleColorScheme();

  return (
    <Group position="center">
      <SegmentedControl
        value={colorScheme}
        onChange={changeColor}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <Sun size={16} />
                <Box ml={10} className={classes.isVisible}>
                  Light
                </Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <Moon size={16} />
                <Box ml={10} className={classes.isVisible}>
                  Dark
                </Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
