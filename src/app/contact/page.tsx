"use client";

import React, { useState } from "react";
import axios from "axios";
import SuperHeading from "@/Components/SuperHeading";
import Button from "@/Components/Button/Button";
import { cn } from "@/lib/utils";
import SmallLoader from "@/Components/SmallLoader";
import Footer from "@/sections/Home/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Parallax } from "react-scroll-parallax";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    inspiration: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post(
        "https://formsubmit.co/ajax/29a6f2a80cc439466f62ee53bd6418b7",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setSend(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            businessName: "",
            website: "",
            projectType: "",
            budget: "",
            timeline: "",
            description: "",
            inspiration: "",
            additionalInfo: "",
          });
        } else {
          setErr(true);
        }
      })
      .catch((e) => {
        console.log(e);

        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <MaxWidthWrapper className="mt-20">
      <div className="lg:w-[60rem] w-auto lg:m-auto lg:mb-7 lg:mt-5 sm:m-10 m-4 uppercase font-bold md:text-6xl sm:text-4xl text-2xl text-primary">
        <Parallax translateX={[-10, 2]}>let&apos;s build something</Parallax>
        <Parallax translateX={[10, -2]}>awesome together</Parallax>
      </div>

      <div className="text-dim lg:w-[60rem] w-auto lg:m-auto lg:mb-7 lg:mt-5 sm:m-10 m-4 lg:text-xl md:text-lg sm:text-sm text-xs font-bold my-10 md:leading-10 sm:leading-6">
        Whether you have a groundbreaking idea, a small tweak, or a grand
        vision, I&apos;m here to help bring it to life. Fill out the form below
        to share your thoughts, and let&apos;s start this exciting journey
        together!
      </div>
      <form
        onSubmit={formSubmit}
        className="flex lg:w-[60rem] lg:m-auto sm:m-5 m-2 flex-col gap-6 justify-center items-center"
      >
        <div className="flex items-center sm:flex-row flex-col justify-center w-full gap-6">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <label className="sm:text-base text-xs text-dim" htmlFor="name">
                Name:
              </label>
              <div
                className={`scale-100 origin-bottom-right text-xs transition-all`}
              >
                <span className="text-red-500">*</span> required
              </div>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <label className="sm:text-base text-xs text-dim" htmlFor="email">
                Email:
              </label>
              <div
                className={`scale-100 origin-bottom-right text-xs transition-all`}
              >
                <span className="text-red-500">*</span> required
              </div>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <label className="sm:text-base text-xs text-dim" htmlFor="phone">
              Phone Number:
            </label>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
            placeholder="+1234567890"
          />
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-center w-full gap-6">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <label
                className="sm:text-base text-xs text-dim"
                htmlFor="businessName"
              >
                Business Name:
              </label>
              <div
                className={`scale-100 origin-bottom-right text-xs transition-all`}
              >
                <span className="text-red-500">*</span> required
              </div>
            </div>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
              placeholder="Your Business Name"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <label
                className="sm:text-base text-xs text-dim"
                htmlFor="website"
              >
                Current Website URL (if any):
              </label>
            </div>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
              placeholder="https://www.yourwebsite.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <label
              className="sm:text-base text-xs text-dim"
              htmlFor="projectType"
            >
              What type of project are you interested in?
            </label>
            <div
              className={`scale-100 origin-bottom-right text-xs transition-all`}
            >
              <span className="text-red-500">*</span> required
            </div>
          </div>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
            required
          >
            <option className="bg-secondary" value="">
              Select Project Type
            </option>
            <option className="bg-secondary" value="new-website">
              New Website
            </option>
            <option className="bg-secondary" value="website-redesign">
              Website Redesign
            </option>
            <option className="bg-secondary" value="ecommerce">
              E-commerce
            </option>
            <option className="bg-secondary" value="blog">
              Blog
            </option>
            <option className="bg-secondary" value="portfolio">
              Portfolio
            </option>
            <option className="bg-secondary" value="other">
              Other
            </option>
          </select>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-center w-full gap-6">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <label className="sm:text-base text-xs text-dim" htmlFor="budget">
                What is your estimated budget?
              </label>
              <div
                className={`scale-100 origin-bottom-right text-xs transition-all`}
              >
                <span className="text-red-500">*</span> required
              </div>
            </div>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
              required
            >
              <option className="bg-secondary" value="">
                Select Budget
              </option>
              <option className="bg-secondary" value="under-1000">
                Under $1,000
              </option>
              <option className="bg-secondary" value="1000-5000">
                $1,000 - $5,000
              </option>
              <option className="bg-secondary" value="5000-10000">
                $5,000 - $10,000
              </option>
              <option className="bg-secondary" value="10000-20000">
                $10,000 - $20,000
              </option>
              <option className="bg-secondary" value="over-20000">
                Over $20,000
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <label
                className="sm:text-base text-xs text-dim"
                htmlFor="timeline"
              >
                What is your estimated timeline?
              </label>
              <div
                className={`scale-100 origin-bottom-right text-xs transition-all`}
              >
                <span className="text-red-500">*</span> required
              </div>
            </div>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
              required
            >
              <option className="bg-secondary" value="">
                Select Timeline
              </option>
              <option className="bg-secondary" value="less-than-1-month">
                Less than 1 month
              </option>
              <option className="bg-secondary" value="1-2-months">
                1 - 2 months
              </option>
              <option className="bg-secondary" value="3-4-months">
                3 - 4 months
              </option>
              <option className="bg-secondary" value="over-4-months">
                Over 4 months
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <label
              className="sm:text-base text-xs text-dim"
              htmlFor="description"
            >
              Project Description:
            </label>
            <div
              className={`scale-100 origin-bottom-right text-xs transition-all`}
            >
              <span className="text-red-500">*</span> required
            </div>
          </div>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="target w-full px-4 py-2 border-2 border-border resize-y h-56 rounded-lg focus:border-primary active:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
            placeholder="Describe your project..."
            required
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <label
              className="sm:text-base text-xs text-dim"
              htmlFor="inspiration"
            >
              Inspiration Websites (if any):
            </label>
          </div>
          <input
            type="url"
            id="inspiration"
            name="inspiration"
            value={formData.inspiration}
            onChange={handleChange}
            className="target w-full px-4 py-2 border-2 border-border rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
            placeholder="https://www.example.com"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <label
              className="sm:text-base text-xs text-dim"
              htmlFor="additionalInfo"
            >
              Additional Information:
            </label>
          </div>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="target w-full px-4 py-2 border-2 border-border resize-y h-32 rounded-lg focus:border-primary active:border-primary hover:border-primary transition-all duration-300 bg-secondary/10 sm:text-base text-sm"
            placeholder="Any additional information..."
          ></textarea>
        </div>

        {err ? (
          <div style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
            <b>Something is wrong, try again!</b>
          </div>
        ) : send ? (
          <div className="" style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
            <b>Sent successfully!</b>
          </div>
        ) : loading ? (
          <SmallLoader />
        ) : (
          <div>
            <Button type="submit" className="py-3 px-8">
              Let&apos;s build
            </Button>
          </div>
        )}
      </form>
      <Footer />
    </MaxWidthWrapper>
  );
};

export default ContactForm;
