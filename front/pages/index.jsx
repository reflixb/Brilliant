"use client";
import { Box } from "@mui/material";
import Display from "../components/display";
import { client } from "../lib/contentful/client";

export default function Home({ props }) {
  console.log(props);
  return (
    <Box>
      <Display />
    </Box>
  );
}

export const getStaticProps = async () => {
  const docResponse = await client.getEntries({ content_type: "homeImage" });

  return {
    props: {
      props: docResponse.items,
      revalidate: 60,
    },
  };
};
