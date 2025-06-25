import { Facebook, Github, Instagram, Linkedin, Youtube} from "lucide-react";
import Link from "next/link";
import React from "react";

const socialData = [
  // {
  //   title: "Youtube",
  //   icon: <Youtube width={20} height={20} />,
  //   link: "https://github.com/SR-Rony",
  // },
  {
    title: "Github",
    icon: <Github width={20} height={20} />,
    link: "https://github.com/SR-Rony",
  },
  {
    title: "Linkedin",
    icon: <Linkedin width={20} height={20} />,
    link: "https://www.linkedin.com/in/sr-rony/",
  },
  {
    title: "Facebook",
    icon: <Facebook width={20} height={20} />,
    link: "https://www.facebook.com/hdrony.hdrony",
  },
  {
    title: "instagram",
    icon: <Instagram width={20} height={20} />,
    link: "https://www.instagram.com/srony50/",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData?.map((item) => (
        <div
          key={item?.title}
          className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky hoverEffect"
        >
          <Link href={"https://www.github.com"} target="blank">
            <span className="">{item?.icon}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
