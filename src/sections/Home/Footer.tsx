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
    <div className="flex justify-center gap-4 items-center flex-col p-10 bg-secondary/50">
      <Image
        src={"/signName.svg"}
        alt="chetan khulage"
        className="my-10 h-auto w-auto"
        height={200}
        width={750}
      />
      <h1 className="font-bold text-dim uppercase text-3xl">Social Links</h1>
      {infoData ? (
        <div className="flex gap-5">
          <a href={infoData.links.github} className="target">
            <Image
              className="target"
              src={"/icons/Github.svg"}
              height={70}
              width={70}
              alt="insta"
            />
          </a>
          <a href={infoData.links.linkedin} className="target">
            <Image
              className="target"
              src={"/icons/Linkedin.svg"}
              height={70}
              width={70}
              alt="insta"
            />
          </a>
          <a href={infoData.links.instagram} className="target">
            <Image
              className="target"
              src={"/icons/Instagram.svg"}
              height={70}
              width={70}
              alt="insta"
            />
          </a>
          <a href={infoData.links.linkedin} className="target">
            <Image
              className="target"
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
      <div className="mt-5 flex justify-between w-full items-center">
        <div className="text-dim font-light">
          © 2024 India, All rights reserved by Chetan-KK
        </div>
        <Available />
      </div>
    </div>
  );
};

export default Footer;
