import React, { useEffect, useState } from "react";

export default function PregressiveImage({
  imgSrc,
  previewSrc,
  width,
  height,
  onClick,
}) {
  const [usedSrc, setUsedSrc] = useState(previewSrc);
  const [usedEffectStyle, setUsedEffectStyle] = useState({
    filter: "blur(5px)",
    clipPath: "inset(0)",
  });

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setUsedSrc(img.src);
      setUsedEffectStyle({});
    };
  }, [imgSrc]);

  return (
    <img
      onClick={onClick}
      src={usedSrc}
      width={width}
      height={height}
      style={{ transition: "filter 0.1s ease-out", ...usedEffectStyle }}
    />
  );
}
