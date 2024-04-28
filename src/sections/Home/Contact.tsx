import SuperHeading from "@/Components/SuperHeading";
import React, { useState } from "react";
import axios from "axios";
import Button from "@/Components/Button/Button";
import { cn } from "@/lib/utils";
import { bebasNeue } from "@/lib/fonts";
import { Parallax } from "react-scroll-parallax";

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
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
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
