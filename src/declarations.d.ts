// Type declarations for CSS imports
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Type declarations for slick-carousel CSS
declare module "slick-carousel/slick/slick.css";
declare module "slick-carousel/slick/slick-theme.css";
