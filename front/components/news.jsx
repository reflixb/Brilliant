import { Box, Grid } from "@mui/material";
import PostCard from "./posts/PostCard";

export default function News({ posts }) {
  return (
    <Box>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <PostCard key={post.fields.slug} post={post} />
        ))}
      </Grid>
    </Box>
  );
}
