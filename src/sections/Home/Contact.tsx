import SuperHeading from "@/Components/SuperHeading";
import React, { useState } from "react";
import axios from "axios";
import Button from "@/Components/Button/Button";
import { cn } from "@/lib/utils";
import { bebasNeue } from "@/lib/fonts";
import { Parallax } from "react-scroll-parallax";
import SmallLoader from "@/Components/SmallLoader";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [isEmailRequired, setIsEmailRequired] = useState(true);
  const [isMessageRequired, setIsMessageRequired] = useState(true);

  const formSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    formData.append("email", e.target[0].value);
    formData.append("message", e.target[1].value);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append(
      "_autoresponse",
      "thank you for reaching out to chetan through website."
    );
    formData.append("_subject", "New submission on Portfolio!");

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
        if (response.data.success == "true") {
          setSend(true);
        }
      })
      .catch((error) => {
        setErr(true);
      });
  };

  const handleEmailCheck = (e: any) => {
    const inputValue = e.target.value.trim(); // Trim whitespace from input

    // Check if input is empty
    if (inputValue !== "") {
      setIsEmailRequired(false); // Input is not required
    } else {
      setIsEmailRequired(true); // Input is required
    }

    // Validate email format using regular expression
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValidEmail = emailRegex.test(inputValue);

    // Set state based on email validation result
    setValidEmail(isValidEmail);
  };

  const handleMessageCheck = (e: any) => {
    if (e.target.value !== "") {
      setIsMessageRequired(false);
    } else {
      setIsMessageRequired(true);
    }
  };

  return (
    <div>
      <SuperHeading heading="Connect with me" subheading="contact" />
      <div className="text-dim uppercase w-[60rem] m-auto text-4xl font-bold my-10 leading-10">
        I'm open for freelance projects, feel free to email me to see how can we
        collaborate.
      </div>
      <form
        onSubmit={formSubmit}
        action=""
        className="flex w-[60rem] m-auto flex-col gap-6 justify-center items-center"
      >
        <Parallax
          translateX={["30px", "-30px"]}
          className="flex flex-col gap-2 w-full"
        >
          <div className="flex justify-between items-center">
            <label className="text-dim" htmlFor="email">
              Email:
            </label>
            <div
              className={`${
                isEmailRequired ? "scale-100 origin-bottom-right" : "scale-0"
              } text-xs transition-all`}
            >
              <span className="text-red-500">*</span> required
            </div>
          </div>
          <input
            type="email"
            id="email"
            onChange={handleEmailCheck}
            className={`${
              validEmail
                ? "border-green-600 active:border-green-600 focus:border-green-600"
                : "border-red-600  active:border-red-600 focus:border-red-600"
            } target w-full px-4 py-2 border-2 rounded-lg active:border-primary focus:border-primary hover:border-primary transition-all duration-300 bg-secondary/10`}
            placeholder="something@gmail.com"
            required
          />
        </Parallax>
        <Parallax
          translateX={["-30px", "30px"]}
          className="flex flex-col gap-2 w-full"
        >
          <div className="flex justify-between items-center">
            <label className="text-dim" htmlFor="message">
              Message:
            </label>
            <div
              className={`${
                isMessageRequired ? "scale-100 origin-bottom-right" : "scale-0"
              } text-xs transition-all`}
            >
              <span className="text-red-500">*</span> required
            </div>
          </div>
          <textarea
            onChange={handleMessageCheck}
            className="target w-full px-4 py-2 border-2  border-border resize-y h-56 rounded-lg focus:border-primary active:border-primary hover:border-primary transition-all duration-300 bg-secondary/10"
            name="message"
            id="message"
          ></textarea>
        </Parallax>

        {err ? (
          <div
            className="heading"
            style={{ fontSize: "1.3rem", marginTop: "1rem" }}
          >
            <b>Something is wrong, try again!</b>
          </div>
        ) : send ? (
          <div
            className="heading"
            style={{ fontSize: "1.3rem", marginTop: "1rem" }}
          >
            <b>Sent successful !!</b>
          </div>
        ) : loading ? (
          <SmallLoader />
        ) : (
          <div>
            <Button type="submit" className="py-3 px-8">
              Send Message
            </Button>
          </div>
        )}
        <div className="my-40 text-center">
          <div className="uppercase text-4xl text-dim font-bold">
            let’s build something awesome together
          </div>
          <a
            className={cn(bebasNeue.className, "target uppercase text-[7rem]")}
            data-attribute-cursor="link"
            href="mailto:chetankhulage.dev@gmail.com"
          >
            chetankhulage.dev@gmail.com{" "}
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
