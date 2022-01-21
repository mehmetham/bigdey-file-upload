import React, { useState } from "react";
import MultiImageInput from "react-multiple-image-input";

function App() {
  const crop = {
    unit: "%",
    aspect: 16 / 9,
    width: "100"
  };

  const [images, setImages] = useState({});
  return (
    <MultiImageInput
      max={4}
      images={images}
      //allowCrop={false} 
      //theme={"light"}
      setImages={setImages}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
  );
}

export default App;
