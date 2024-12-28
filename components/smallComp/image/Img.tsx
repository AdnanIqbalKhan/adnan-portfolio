import React from "react";

export default function Img(
  props: Readonly<{
    src: string;
    alt: string;
    className: string;
    onError: () => void;
    style: React.CSSProperties;
  }>
) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      onError={() => {
        props?.onError?.();
      }}
      style={props.style}
    />
  );
}
