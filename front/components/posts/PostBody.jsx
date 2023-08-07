import { Box, Container } from "@mui/material";
import RichText from "../RichText";

const PostBody = ({ post }) => {
  const { content } = post.fields;

  return (
    <Box>
      <Container maxWidth="md">
        <Box sx={{ mt: 3, pb: 20 }}>
          <div className="mx-auto prose">
            <RichText content={content} />
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default PostBody;
