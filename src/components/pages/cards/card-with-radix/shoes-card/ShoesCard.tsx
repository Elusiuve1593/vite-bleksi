import { Box, Button, Text } from "@radix-ui/themes";
import { useState } from "react";
import black from "../../../../../shared/shoes/black.png";
import blue from "../../../../../shared/shoes/blue.png";
import wRed from "../../../../../shared/shoes/white-red.png";

export const ShoesCard = () => {
  const [image, setImage] = useState<string>(black);

  const blackSwitcher = (): void => setImage(black);
  const blueSwitcher = (): void => setImage(blue);
  const wRedSwitcher = (): void => setImage(wRed);
  return (
    <Box p="20px" width="100%" style={{ backgroundColor: "#f1ebeb" }}>
      <Text size="4" weight="medium" as="div" m="10px" color="red">
        Shoppy.Cart
      </Text>
      <Box ml="10%">
        <img src={image} alt="black" />
      </Box>

      <Button
        m="4px"
        variant="outline"
        color="red"
        radius="none"
        style={{ cursor: "pointer" }}
      >
        S
      </Button>
      <Button
        m="4px"
        variant="outline"
        color="red"
        radius="none"
        style={{ cursor: "pointer" }}
      >
        <Text color="gray">M</Text>
      </Button>
      <Button
        m="4px"
        variant="outline"
        color="red"
        radius="none"
        style={{ cursor: "pointer" }}
      >
        <Text color="gray">L</Text>
      </Button>
      <Button
        m="4px"
        variant="outline"
        color="red"
        radius="none"
        style={{ cursor: "pointer" }}
      >
        <Text color="gray">XL</Text>
      </Button>

      <Button
        mt="4px"
        ml="17%"
        mr="4px"
        variant="classic"
        radius="none"
        color="gray"
        style={{ cursor: "pointer" }}
        onClick={blackSwitcher}
      >
        bl
      </Button>
      <Button
        m="4px"
        variant="classic"
        color="blue"
        radius="none"
        style={{ cursor: "pointer" }}
        onClick={blueSwitcher}
      >
        blue
      </Button>
      <Button
        m="4px"
        variant="classic"
        color="ruby"
        radius="none"
        style={{ cursor: "pointer" }}
        onClick={wRedSwitcher}
      >
        wr
      </Button>
    </Box>
  );
};
