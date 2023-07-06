import { Box, Typography, Container, Card } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <img
    src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
    alt="Image 1"
    style={{ width: 280, height: 490, objectFit: "cover" }}
  />,
  <img
    src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
    alt="Image 1"
    style={{ width: 280, height: 490, objectFit: "cover" }}
  />,
  <img
    src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
    alt="Image 1"
    style={{ width: 280, height: 490, objectFit: "cover" }}
  />,
  <img
    src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
    alt="Image 1"
    style={{ width: 280, height: 490, objectFit: "cover" }}
  />,
  <img
    src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
    alt="Image 1"
    style={{ width: 280, height: 490, objectFit: "cover" }}
  />,
  <img
    src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
    alt="Image 1"
    style={{ width: 280, height: 490, objectFit: "cover" }}
  />,
  <img
    src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
    alt="Image 1"
    style={{ width: 280, height: 490, objectFit: "cover" }}
  />,
];

export default function Doctor() {
  const carouselRef = useRef(null);

  const handleMoveLeft = () => {
    carouselRef.current.slidePrev();
  };

  const handleMoveRight = () => {
    carouselRef.current.slideNext();
  };

  const [offset, setOffset] = useState(0);
  const [current, setCurrent] = useState(0);
  const length = data.length;
  console.log(length);

  const renderPrevButton = () => <ArrowBackIcon fontSize="large" />;

  const renderNextButton = () => <ArrowForwardIcon fontSize="large" />;

  return (
    <Box sx={{ width: "100%", height: "300vh" }}>
      {" "}
      <Container maxWidth="rs" sx={{ height: "100%" }}>
        {" "}
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "red",
          }}>
          <Typography variant="h5" sx={{ display: "flex" }}>
            Бид Дэлхийн түвшний Монгол эмч, мэргэжилтэнгүүдийг бэлтгэх
            зорилготой компани юм.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "200vh", bgcolor: "blue" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
            fontFamily="sans-serif">
            Удирдлагын баг:
          </Typography>
          <Box sx={{ width: 280, height: 490, mt: 5, position: "relative" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://c.stocksy.com/a/GD1700/z9/1672962.jpg"
              alt="Erdene"
            />{" "}
            <Box
              sx={{
                position: "absolute",
                top: "85%",
                left: "48%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                zIndex: 1,
                width: "80%",
              }}>
              {" "}
              <Card
                sx={{
                  width: "60%",
                  textAlign: "left",
                  bgcolor: "transparent",
                  boxShadow: "none",
                }}>
                {" "}
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "14px",
                    color: "rgb(67, 114, 74)",
                  }}>
                  {" "}
                  CO/ Үйл Ажиллагаа Эрхэлсэн Захирал{" "}
                </Typography>{" "}
              </Card>{" "}
              <Card
                sx={{
                  width: "50%",
                  mt: 1,
                  textAlign: "left",
                  bgcolor: "transparent",
                  boxShadow: "none",
                }}>
                {" "}
                <Typography>Б. ЭРДЭНЭ</Typography>{" "}
              </Card>{" "}
            </Box>{" "}
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              mt: 17,
              justifyContent: "space-between",
              width: "100%",
              bgcolor: "red",
            }}>
            {" "}
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {" "}
              ЭМЧ НАР:{" "}
            </Typography>{" "}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <ArrowBackIcon fontSize="large" onClick={handleMoveLeft} />
              <ArrowForwardIcon fontSize="large" onClick={handleMoveRight} />
            </Box>{" "}
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              mt: 2,
              width: "100%",
              overflowX: "scroll",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              transform: `translateX(-${offset * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}>
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              renderPrevButton={renderPrevButton}
              renderNextButton={renderNextButton}
              controlsStrategy="alternate"
              ref={carouselRef}
              disableButtonsControls
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 4 },
};

const data = [
  { img: "https://c.stocksy.com/a/GD1700/z9/1672962.jpg", name: "Battulga" },
  {
    img: "https://c.stocksy.com/a/GD1700/z9/1672962.jpg",
    name: "TergelTengis",
  },
  {
    img: "https://c.stocksy.com/a/GD1700/z9/1672962.jpg",
    name: "MungunShagai",
  },
  {
    img: "https://c.stocksy.com/a/GD1700/z9/1672962.jpg",
    name: "MungunShagai",
  },
  {
    img: "https://c.stocksy.com/a/GD1700/z9/1672962.jpg",
    name: "MungunShagai",
  },
  {
    img: "https://c.stocksy.com/a/GD1700/z9/1672962.jpg",
    name: "MungunShagai",
  },
  {
    img: "https://c.stocksy.com/a/GD1700/z9/1672962.jpg",
    name: "MungunShagai",
  },
];
