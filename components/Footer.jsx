import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
const Footer = () => {
  return (
    <div className="flex py-8 justify-between px-12">
      <p>Logo</p>
      <div className="text-3xl flex gap-3 cursor-pointer">
        <TiSocialFacebookCircular />
        <TiSocialLinkedinCircular />
        <TiSocialTwitterCircular />
      </div>
    </div>
  );
};
export { Footer };
