import { Box, Typography, Container } from "@mui/material";
import ContentfulImage from "../ui/ContentfulImage";
import DateComponent from "../ui/DateComponent";

const PostHeader = ({ post }) => {
  const { title, coverImage, date } = post.fields;

  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center" }}>
          {title}
        </Typography>

        <Box sx={{ width: "100%", height: "2px", bgcolor: "grey", my: 2 }} />

        <Box>
          <DateComponent dateString={date} />
        </Box>
        <Box sx={{ mt: 5 }}>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default PostHeader;
