import imagesLoaded from "imagesloaded";

export default function preloadImages(selector: string) {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
}
