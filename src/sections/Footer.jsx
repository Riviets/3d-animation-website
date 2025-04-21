import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="w-full padding-x">
      <div className="flex items-center justify-between py-8">
        <a href="#" className="flex-1">
          Visit my blog
        </a>
        <ul className="flex gap-4 flex-1">
          {socialImgs.map((item) => (
            <li
              key={item.name}
              className="p-4 bg-zinc-900 xl:rounded-xl rounded-lg border-1 border-zinc-700"
            >
              <a href="#">
                <img src={item.imgPath} alt={item.name} />
              </a>
            </li>
          ))}
        </ul>
        <p>© {new Date().getFullYear()} Adrian Hajdin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
