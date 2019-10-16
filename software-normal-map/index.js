import { Render } from "./render.js";
import { Vector } from "./vector.js";

import { MaterialLoader } from "./material-loader.js";



const run = () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.fillRect(0, 0, canvas.width, canvas.height);
  let imageBuffer = context.getImageData(0, 0, canvas.width, canvas.height);


  Render.setPixel(
    imageBuffer,
    canvas.width,
    canvas.height - 1,
    Render.convertToBitWidth({ r: 1, g: 0, b: 0 }, 8)
  );


  context.putImageData(imageBuffer, 0, 0);
  document.body.appendChild(canvas);


  MaterialLoader.load({ name: "leather-13", features: ["albedo", "normal"] })
    .then(material => {
      const { albedo: albedoTexture, normal: normalTexture } = material.textures;
      context.drawImage(albedoTexture, 0, 0);
    });
};


run();