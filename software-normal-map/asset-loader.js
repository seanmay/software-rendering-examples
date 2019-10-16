const loadImageBuffer = (src) =>
  fetch(src)
    .then(res => res.ok ? res : Promise.reject(res))
    .then(res => res.blob())
    .then(createImageBitmap);

export const AssetLoader = {
  loadImageBuffer
};
