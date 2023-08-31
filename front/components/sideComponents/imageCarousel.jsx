import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg",
  "https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_3_2_crop_md/public/2021-11/large-Smile-Guy-web.jpg?h=6b55786a&itok=Wy7cQpYS",
  "https://passionforpatients.net/wp-content/uploads/2018/04/shutterstock_362338964-1000x500.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <motion.img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <button
        onClick={goToPreviousImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
        }}>
        <ArrowBackIosIcon sx={{ fontSize: "32px", color: "white" }} />
      </button>
      <button
        onClick={goToNextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
        }}>
        <ArrowForwardIosIcon sx={{ fontSize: "32px", color: "white" }} />
      </button>
    </div>
  );
};

export default ImageCarousel;

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "homeImage" });

  return {
    props: {
      props: response.items,
      revalidate: 60,
    },
  };
};
