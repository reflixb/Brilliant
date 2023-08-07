import Link from "next/link";
import DateComponent from "../ui/DateComponent";
import { Box, Typography, Card, Grid, CardContent } from "@mui/material";

const PostCard = ({ post }) => {
  const { title, slug, exceprt, coverImage, date } = post.fields;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <Card
          sx={{
            borderRadius: "15px",
            ":hover": { boxShadow: 20 },
            mb: 3,
          }}>
          <img
            src={coverImage.fields.file.url}
            style={{ width: "100%", height: 250 }}
          />

          <CardContent sx={{ p: 1.3 }}>
            <Typography variant="h5">{title}</Typography>

            <Typography
              sx={{
                color: "grey",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}>
              {exceprt}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <DateComponent dateString={date} style={{ color: "green" }} />
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default PostCard;

{
  /* <ContentfulImage
              alt={`Cover Image for ${title}`}
              src={coverImage.fields.file.url}
              width={coverImage.fields.file.details.image.width}
              height={coverImage.fields.file.details.image.height}
            /> */
}
