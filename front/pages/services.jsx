import {
  Box,
  Typography,
  Stack,
  Grid,
  Card,
  Container,
  CardContent,
} from "@mui/material";

export default function Services() {
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
          Үйлчилгээ
        </Typography>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.text}>
              <Card
                sx={{
                  mb: 3,
                  ":hover": {
                    boxShadow: 20,
                  },
                }}>
                <img src={item.img} alt={item.name} style={{ width: "100%" }} />
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ padding: 2 }}>
                    {item.name}
                  </Typography>
                  <Typography color="textSecondary">{item.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const data = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/ambul.jpeg?alt=media&token=7ce93a5c-7c05-41b1-b857-0e6b1e7d6fef",
    text: "Амбулаторийн Үзлэг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/dotor.jpeg?alt=media&token=4b826322-afe6-4b5f-8a2f-32b0631c4be0",
    text: "Дотрын эмчийн үзлэг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/uushga.jpeg?alt=media&token=b9dc180b-6493-4c48-b626-7975de1a3b25",
    text: "Уушгины эмчийн үзлэг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/Setgets.jpeg?alt=media&token=b760af39-d20f-4d6a-aec0-7ec180041638",
    text: "Сэтгэцийн эмчийн үзлэг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/havdar.jpeg?alt=media&token=a2957262-cd8a-4596-a42e-6185bea36ec5",
    text: "Хавдрын эмчийн үзлэг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/hevten.jpeg?alt=media&token=430d1ccf-a261-4696-ad6f-1e755444d047",
    text: "Хэвтэн Эмчлүүлэх",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/dotriin.jpeg?alt=media&token=87a4fb6b-d557-49e8-9063-22f7f8a2b09c",
    text: "Дотрын Тасаг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/hungun.jpeg?alt=media&token=5f2786ff-0d0b-4f98-847d-e3210a3cb539",
    text: "Хөнгөвчлөх Тасаг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/durs.jpeg?alt=media&token=019c671a-61b1-412f-87b7-4bb07312cf84",
    text: "Дүрс Оношилгоо",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/CT.jpeg?alt=media&token=a7150ea5-c048-44fb-a3e4-2758b8e5972a",
    text: "Компьютерт Томографи",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/Dijital.jpeg?alt=media&token=e724b2ad-dab8-4c32-ac4f-092c1636d032",
    text: "Дижитал Рентген",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/EHO.jpeg?alt=media&token=82f9aca5-f718-4ed5-a966-b27b4277965a",
    text: "ЭХО",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/duran.jpeg?alt=media&token=8c257703-39c5-470c-a4a7-23a18cd5199e",
    text: "Дурангын Тасаг",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/brilliant-56246.appspot.com/o/laboratory.jpeg?alt=media&token=2f78d766-95a2-47af-8075-c3cca7c81338",
    text: "Лаборатори",
  },
];
