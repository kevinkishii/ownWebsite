import Instagram from "@/icons/Instagram";
import Linkedin from "@/icons/Linkedin";
import Facebook from "@/icons/Facebook";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = ({ title, description, lists, contactList }) => {
  return (
    <footer className="w-full bg-[#3e0000] flex items-start gap-10 p-10 text-white mt-10 flex-col md:flex-row justify-between items-start min-h-96 border-solid border-t-[1px] border-color-white">
      <div className="flex flex-col w-full md:w-1/5 gap-10 h-full">
        <Image
          src={"/yoshiifit-logo.png"}
          width={200}
          height={200}
          alt="Picture of the author"
          className=""
        />
        <div className="flex flex-col">
          <div className="text-red-500 text-xl">{title}</div>
          <div className="text-white text-md">{description}</div>
        </div>
      </div>
      {lists?.length > 0 &&
        lists.map((listItem) => (
          <div
            className="flex flex-col gap-6 h-full"
            key={`${listItem?.title}-footer-list`}
          >
            <div className="text-2xl">{listItem?.listTitle}</div>
            <ul className="text-lg list-disc">
              {listItem?.listItems.map((item) => (
                <li key={`${item}-footer-listItem`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      {contactList?.length > 0 && (
        <div className="flex flex-col gap-6 w-full md:w-1/5 h-[100%] items-start justify-center">
          {contactList.map((contactItem) => (
            <div
              className="flex flex-col gap-2"
              key={`${contactItem?.contactLabel}-footer-contactItem`}
            >
              <div className="text-xl font-semibold">
                {contactItem?.contactLabel}
              </div>
              <div className="text-lg">{contactItem?.contactValue}</div>
            </div>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
