"use client";
import { type FC } from "react";

import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <Box as="footer" p={"1rem"} position="sticky" bottom={0} zIndex={10} textAlign={"center"}>
      <Link
        href="https://github.com/shravan8099/Modern_web3.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        Please, leave a ⭐️ on this Github
      </Link>
    </Box>
  );
};

export default Footer;
