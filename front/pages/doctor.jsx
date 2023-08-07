import {
  Box,
  Typography,
  Container,
  Card,
  useMediaQuery,
  Grid,
  Stack,
  CardContent,
} from "@mui/material";

import { client } from "../lib/contentful/client";

export default function Doctor({ props }) {
  return (
    <Box sx={{ width: "100%", pt: 5 }}>
      <Container
        maxWidth="rs"
        sx={{
          height: "100%",
        }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold" }}
          variant="h4">
          Эмчлэх Бүрэлдэхүүн
        </Typography>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          {props.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.fields.doctorNames}>
              <Card sx={{ mb: 3 }}>
                <img
                  src={item.fields.doctorImgs.fields.file.url}
                  alt={item.fields.doctorNames}
                  style={{ width: "100%" }}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ padding: 1 }}>
                    {item.fields.doctorNames}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.fields.ajil}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export const getStaticProps = async () => {
  const docResponse = await client.getEntries({ content_type: "doctors" });

  return {
    props: {
      props: docResponse.items,
      revalidate: 60,
    },
  };
};
