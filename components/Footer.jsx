import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
const Footer = () => {
  return (
    <div className="flex py-8 border-t-2  justify-between items-center px-12 sm:flex sm:flex-col sm:items-center  sm:gap-8">
      <img src="zapit_icon.svg" className="h-12 w-8" alt="Logo" />
      <div className="text-3xl flex gap-3 cursor-pointer">
        <TiSocialFacebookCircular />
        <TiSocialLinkedinCircular />
        <TiSocialTwitterCircular />
      </div>
    </div>
  );
};
export { Footer };
