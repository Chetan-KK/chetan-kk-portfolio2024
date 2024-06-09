"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import fetchInfo from "@/lib/getData/getInfo";
import { MyInfo } from "@/lib/getData/dataInterfaces";
import Available from "@/Components/Available";

const Footer = () => {
  const [infoData, setInfoData] = useState<MyInfo>();

  const getInfo = async () => {
    const info = await fetchInfo();
    setInfoData(info);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="flex justify-center gap-4 items-center flex-col p-10 from-secondary bg-gradient-to-t">
      <Image
        src={"/signName.svg"}
        alt="chetan khulage"
        className="sm:my-10 mb-5 h-auto w-auto"
        height={200}
        priority
        width={750}
      />
      Powered by
      <h1 className="font-bold text-dim uppercase sm:text-3xl text-xl">
        Social Links
      </h1>
      {infoData ? (
        <div className="flex gap-5">
          <a href={infoData.links.github} className="target">
            <Image
              className="sm:h-14 h-10 w-10 sm:w-14"
              src={"/icons/Github.svg"}
              height={70}
              width={70}
              alt="insta"
            />
          </a>
          <a href={infoData.links.linkedin} className="target">
            <Image
              className="sm:h-14 h-10 w-10 sm:w-14"
              src={"/icons/Linkedin.svg"}
              height={70}
              width={70}
              alt="insta"
            />
          </a>
          <a href={infoData.links.instagram} className="target">
            <Image
              className="sm:h-14 h-10 w-10 sm:w-14"
              src={"/icons/Instagram.svg"}
              height={70}
              width={70}
              alt="insta"
            />
          </a>
          <a href={infoData.links.linkedin} className="target">
            <Image
              className="sm:h-14 h-10 w-10 sm:w-14"
              src={"/icons/Leetcode.svg"}
              height={70}
              width={70}
              alt="insta"
            />
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <div className="mt-5 sm:flex justify-between w-full items-center">
        <div className="text-dim font-light sm:text-base text-xs sm:mb-0 mb-5 text-center">
          © 2024 India, All rights reserved by Chetan-KK
        </div>
        <Available />
      </div>
    </div>
  );
};

export default Footer;
