import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons";

export default function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
                <IconSun size={16} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <IconMoon size={16} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
