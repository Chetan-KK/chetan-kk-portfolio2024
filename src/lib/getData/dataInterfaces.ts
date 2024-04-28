export interface MyInfo {
  name: string;
  fullName: string;
  profileImg: string;
  resumeUrl: string;
  resumeDocUrl: string;
  emailId: string;
  links: {
    portfolio2023: string;
    github: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    leetcode: string;
  };
}

export interface Project {
  desc: string;
  gitLink: string;
  imgSrc: string;
  imgs: string[];
  link: string;
  stack: string[];
  title: string;
  year: string;
}
