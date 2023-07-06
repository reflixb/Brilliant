import { Box, Typography, Stack, Grid, Card } from "@mui/material";

export default function Services() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          width: "100%",
        }}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 270,
                boxShadow: "none",
                bgcolor: "rgb(243, 243, 246)",
              }}>
              <img src={item.imageUrl} alt="Item" width="200" height="200" />
              <Card
                sx={{
                  width: 210,
                  boxShadow: "none",
                  bgcolor: "rgb(243, 243, 246)",
                }}>
                <Typography
                  variant="body1"
                  width="200"
                  sx={{ textAlign: "center" }}>
                  {item.title}
                </Typography>
              </Card>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const data = [
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/188912357_5903356673037997_7839572150514497191_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=c48759&_nc_ohc=UDLGH9BhihgAX_aRy-V&_nc_ht=scontent.fuln6-1.fna&oh=00_AfCkvPLP2YxtMoHkb9inAc-BPAnk5tfC-oyyVV1ASDOW5A&oe=648F3E49",
    title: "Амбулаторийн Үзлэг",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/188912357_5903356673037997_7839572150514497191_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=c48759&_nc_ohc=UDLGH9BhihgAX_aRy-V&_nc_ht=scontent.fuln6-1.fna&oh=00_AfCkvPLP2YxtMoHkb9inAc-BPAnk5tfC-oyyVV1ASDOW5A&oe=648F3E49",
    title: "Дотрын эмчийн үзлэг",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/184817115_5471675479569747_1739112982204834213_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=DbRjr1Uh7WEAX9TYGql&_nc_ht=scontent.fuln6-1.fna&oh=00_AfA8KB6Ssj1mFJ9Ba56qQMBI-xHwKVOfJ5CZ-sN893XtWQ&oe=648DF08B",
    title: "Уушигны нарийн мэргэжлийн эмчийн үзлэг",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/181454043_4233837590070391_6754242589281116035_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=dMyh0kcyOaIAX9VHBak&_nc_ht=scontent.fuln6-1.fna&oh=00_AfBMCFnAFDtIC8T2Elxg_xj5iMUGGz49EjAUK3YlFCjiHg&oe=648F00C1",
    title: "Сэтгэцийн эмчийн үзлэг",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/187291928_5621991304540032_1109540569486084368_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=fOz7n4aB-2oAX8yfpUd&_nc_ht=scontent.fuln6-1.fna&oh=00_AfDqJd09GGYYjVnfxAaj-isOp06ccW0ve2wUZqVE1x1WcQ&oe=648E4AB2",
    title: "Хавдрын эмчийн үзлэг",
  },
  {
    imageUrl:
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t45.5328-4/184654132_3835143463250227_3013155724751220352_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=c48759&_nc_ohc=vzCvqt1BCkIAX9jYqHv&_nc_ht=scontent.fuln6-2.fna&oh=00_AfB57SQdIK-e-IOEUDSB7UC7IMWoKH2Wh2ogFb8gwivClg&oe=648E92AA",
    title: "ХЭВТЭН ЭМЧЛҮҮЛЭХ ТАСАГ",
  },
  {
    imageUrl:
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t45.5328-4/190337651_3510410682393076_4549225787924917304_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_ohc=irFERvjbbwUAX_kCysy&_nc_ht=scontent.fuln6-2.fna&oh=00_AfA9st1A29337OInoCip0f4n4DvF-BUhYNuxnjgLESgJtQ&oe=648DB557",
    title: "Дотрын хэвтэн эмчлүүлэх тасаг",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/186189970_4056689487717788_231793413182923139_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_ohc=-M9C5M72EaMAX8VMilH&_nc_ht=scontent.fuln6-1.fna&oh=00_AfBHJ4gjIgQe5SQ4hcfTMtun1oVBZObgSj9cbZEuQ31Asw&oe=648EA6B1",
    title: "Хөнгөвчлөх эмчилгээ үйлчилгээ",
  },
  {
    imageUrl:
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t45.5328-4/183531692_4039354176160990_2848314952552876926_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_ohc=5edq9pe4C0YAX88IhwU&_nc_ht=scontent.fuln6-2.fna&oh=00_AfBfE0ZL5x2wpYr-sZE_3-OHQOh8jVaYlwDd1Vqxd9ISOA&oe=648E8A06",
    title: "Дүрс Оношилгоо",
  },

  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/182880060_6186838094663211_9186488341706854151_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=zE_R3mbbe_UAX_28gtr&_nc_oc=AQk3hKhoK-rQvuwcOKiwlZIDzjYqt-AMLL38BDuRZT5cuvYolLZUM0eO2GXEcZHfyHo3Q254nytrsg40D15UFwpP&_nc_ht=scontent.fuln6-1.fna&oh=00_AfAVoMJ4p9NQm57Birx42A9netbcTasep99l2ez8n4h3Mg&oe=648EB80C",
    title: "Компьютерт томографи",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/179099226_4138881836177996_5532718698730030772_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_ohc=pvTP4MtYi5wAX9XrBDb&_nc_ht=scontent.fuln6-1.fna&oh=00_AfD9ZLr5A4VywJMyeo4x79QgwfOw7s91e1rg-bMbpaLs9w&oe=648F27F3",
    title: "Дижитал рентген",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/189447722_4099654143483235_1730026611058702076_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=oufSE7jKG0AAX_dy6-6&_nc_ht=scontent.fuln6-1.fna&oh=00_AfB2ilfCttEH342o6BOaoTTRUeAxwCYT6zVYPbshTspWXg&oe=648F1621",
    title: "ЭХО Хэт авиан шинжилгээ",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/185591715_3928450263938432_7280778262823766323_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=c48759&_nc_ohc=OpztGiR1eD0AX9aoJMP&_nc_ht=scontent.fuln6-1.fna&oh=00_AfAXlpC43oXx23sgF8j_Zpml7ThaoEUh2X4p9ezt5M2MTg&oe=648E8997",
    title: "Дурангийн Тасаг",
  },
  {
    imageUrl:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t45.5328-4/187541843_3927058064054082_5963484031708699882_n.jpg?stp=c0.0.960.960a_dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=c48759&_nc_ohc=8VvGCuFZuM4AX8ROw4B&_nc_ht=scontent.fuln6-1.fna&oh=00_AfAR34Ql1o8jpZPt0XtTFZFRZFMKW-Y5kzCeaRPPRKhe0w&oe=648E5EB0",
    title: "Лаборатори",
  },
];
