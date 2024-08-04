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
    <main>
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 640px)" srcSet={mobile} />
        <img {...rest} className="h-auto w-[174px] md:w-[350px] lg:w-[445px]" />
      </picture>
    </main>
  );
}
export default HeroImage;
