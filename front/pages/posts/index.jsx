import PostCard from "../../components/posts/PostCard";
import { Box, Container, Typography, Grid } from "@mui/material";
import { client } from "../../lib/contentful/client";

const Posts = ({ posts }) => {
  return (
    <Box sx={{ width: "100%", py: 10 }}>
      <Container maxWidth="rs">
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}>
          Мэдээ Мэдээлэл
        </Typography>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};

export default Posts;
