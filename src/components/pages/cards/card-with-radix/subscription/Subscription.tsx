import {
    ArchiveIcon,
    ArrowLeftIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    MinusIcon,
    PlusIcon,
    StarFilledIcon
} from "@radix-ui/react-icons";
import { Box, Button, IconButton, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Subscription = () => {
  const [value, setValue] = useState<number>(1);
  const [price, setPrice] = useState<number>(152);

  const plusHandler = (): void => {
    setValue(value + 1);
    setPrice(price + 152);
  };
  const minusHandler = (): void => {
    setValue(value - 1);
    setPrice(price - 152);
  };
  return (
    <Box>
      <Box>
        <Text size="4" weight="medium" as="div" color="red">
          <Button
            m="4px"
            variant="ghost"
            color="red"
            radius="none"
            ml="40px"
            mr="20px"
            style={{ cursor: "pointer" }}
          >
            <Text color="gray" size="4" weight="light" as="div">
              Home
            </Text>
          </Button>
          <Button
            m="4px"
            variant="ghost"
            color="red"
            radius="none"
            mr="20px"
            style={{ cursor: "pointer" }}
          >
            <Text color="red" size="4" weight="medium" as="div">
              Shop
            </Text>
          </Button>
          <Button
            m="4px"
            variant="ghost"
            color="red"
            radius="none"
            mr="20px"
            style={{ cursor: "pointer" }}
          >
            <Text color="gray" size="4" weight="light" as="div">
              Men
            </Text>
          </Button>
          <Button
            m="4px"
            variant="ghost"
            color="red"
            radius="none"
            style={{ cursor: "pointer" }}
          >
            <Text color="gray" size="4" weight="light" as="div">
              Women
            </Text>
          </Button>

          <IconButton variant="ghost" color="gray" mt="8px" ml="15px">
            <MagnifyingGlassIcon
              width="20"
              height="20"
              style={{ cursor: "pointer" }}
            />
          </IconButton>

          <IconButton variant="ghost" color="gray" mt="8px" ml="15px">
            <ArchiveIcon width="20" height="20" style={{ cursor: "pointer" }} />
          </IconButton>
        </Text>
      </Box>

      <Box ml="40px" mb="20px" mt="70px">
        <Button color="red" radius="none" style={{ cursor: "pointer" }}>
          New
        </Button>
        <IconButton variant="ghost" color="gray" mt="5px" ml="20px">
          <HeartIcon width="22" height="22" style={{ cursor: "pointer" }} />
        </IconButton>
      </Box>
      <Box ml="40px">
        <Text size="8" weight="bold">
          Nike
        </Text>
        <Text size="8" weight="regular">
          Air Force X1
        </Text>
      </Box>

      <Box ml="20px" mt="10px">
        <IconButton variant="ghost" color="gray" ml="20px" mr="10px">
          <StarFilledIcon
            width="20"
            height="20"
            style={{ cursor: "pointer", color: "orange" }}
          />
          <StarFilledIcon
            width="20"
            height="20"
            style={{ cursor: "pointer", color: "orange" }}
          />
          <StarFilledIcon
            width="20"
            height="20"
            style={{ cursor: "pointer", color: "orange" }}
          />
          <StarFilledIcon
            width="20"
            height="20"
            style={{ cursor: "pointer", color: "orange" }}
          />
          <StarFilledIcon
            width="20"
            height="20"
            style={{ cursor: "pointer", color: "orange" }}
          />
        </IconButton>
        <Text>5 (415 Reviews)</Text>
      </Box>
      <Box ml="40px" mt="10px">
        <Text>
          The new Tri - master x1, simple, sleek,comfortable new lacing
          technology for tighter grips. Reinforced sole for maximum impact
          protection and slip resistance.
        </Text>
      </Box>

      <Box ml="40px" mt="10px">
        <Text weight="bold">${price}</Text>
        <IconButton
          variant="ghost"
          color="gray"
          ml="20px"
          mr="10px"
          disabled={value === 1 ? true : false}
        >
          <MinusIcon
            width="17"
            height="17"
            style={{
              border: "1px solid black",
              borderRadius: "5px",
            }}
            onClick={minusHandler}
          ></MinusIcon>
        </IconButton>

        <Text size="3">{value}</Text>

        <IconButton
          variant="ghost"
          color="gray"
          ml="10px"
          disabled={value < 5 ? false : true}
        >
          <PlusIcon
            width="17"
            height="17"
            style={{
              border: "1px solid black",
              borderRadius: "5px",
            }}
            onClick={plusHandler}
          ></PlusIcon>
        </IconButton>
      </Box>
      <Box ml="40px" mb="20px" mt="20px">
        <Button
          color="red"
          radius="none"
          size="4"
          style={{ cursor: "pointer" }}
        >
          Add to cart
        </Button>
      </Box>
      <Link to="/">
        <IconButton variant="ghost" color="red" ml="40px">
          <ArrowLeftIcon width="17" height="17"></ArrowLeftIcon>
          <Text>Go to main page</Text>
        </IconButton>
      </Link>
    </Box>
  );
};
