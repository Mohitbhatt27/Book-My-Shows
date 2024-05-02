type HomeBannerProps = {
  image: string;
};
function HomeBanner({ image }: HomeBannerProps) {
  return (
    <div className="flex flex-col justify-center w-[90vw] mx-auto mt-8">
      <img src={image} className="w-full h-full rounded-lg" />
    </div>
  );
}

export default HomeBanner;
