import { Box, Flex } from "@radix-ui/themes";
import { ShoesCard } from "./shoes-card/ShoesCard";
import { Subscription } from "./subscription/Subscription";

export const CardWithRadix = () => {
  return (
    <Flex align="center" justify="center" style={{ minHeight: "100vh" }}>
      <Box p="20px" width="100%" style={{ backgroundColor: "#f1ebeb" }}>
        <ShoesCard />
      </Box>

      <Box p="20px" width="100%" height="100%">
        <Subscription />
      </Box>
    </Flex>
  );
};
