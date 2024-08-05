/* eslint-disable jsx-a11y/alt-text */
import mobileImage from "@/assets/images/image-profile-mobile.webp";
import tabletImage from "@/assets/images/image-profile-tablet.webp";
import desktopImage from "@/assets/images/image-profile-desktop.webp";
import { getImageProps } from "next/image";

function HeroImage() {
  const common = { alt: "Profile of Adam Keyes" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: desktopImage.width,
    height: desktopImage.height,
    quality: 80,
    src: "/images/image-profile-desktop.webp",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: tabletImage.width,
    height: tabletImage.height,
    quality: 70,
    src: "/images/image-profile-tablet.webp",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: mobileImage.width,
    height: mobileImage.height,
    quality: 70,
    src: "/images/image-profile-mobile.webp",
  });

  return (
    <picture>
      <source media="(min-width: 1174px)" srcSet={desktop} />
      <source media="(min-width: 640px)" srcSet={tablet} />
      <source srcSet={mobile} />
      <img
        {...rest}
        className="absolute left-1/2 top-0 -z-20 h-auto w-[174px] -translate-x-1/2 sm:left-auto sm:right-0 sm:w-[322px] sm:translate-x-0 lg:bottom-[68px] lg:top-auto lg:w-[445px]"
      />
    </picture>
  );
}
export default HeroImage;
