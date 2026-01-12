"use server";

import { CvEntry } from "@/components/cv-entry";
import { Navbar } from "@/components/Navbar/navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SocialItem } from "@/components/social-item";

export default async function Home() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="container-md px-5 mx-auto flex flex-col lg:flex-row border-b pb-7">
        <div className="flex-none basis-1/2">
          <h1 className="font-bold text-lg dark:text-catpuccinMauve dark:underline dark:decoration-catpuccinMauve">
            ABOUT ME
          </h1>

          <p className="mt-2 w-4/5 lg:w-3/4">
            I'm a prospect software engineer passionate about building impactful
            and highly efficient software solutions, sharing knowledge with the
            world and contributing to open-source projects.
          </p>

          {/* SOCIALS */}
          <div className="w-fit flex flex-row items-center justify-center mx-auto text-3xl mt-8 gap-x-8">
            <SocialItem
              icon={<FaGithub />}
              url="https://github.com/fer-hnndz"
            />
            <SocialItem
              icon={<FaLinkedin />}
              url="https://www.linkedin.com/in/jfhernandez08/"
            />
            <SocialItem
              icon={<BsTwitterX />}
              url="https://twitter.com/fer-hnndz"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg dark:text-catpuccinMauve dark:underline dark:decoration-catpuccinMauve">
            Relevant Skills
          </h1>
          <ul className="mt-2 list-disc w-4/5 ml-4">
            <li>
              Languages: English and Spanish (bilingual proficiency), German
              (A1).
            </li>
            <li>Operating Systems: Linux (daily use)</li>
            <li>Programming: Python, Java, C++, JavaScript.</li>
            <li>Web Development: Flask, REST APIs, HTML, CSS, React.</li>
            <li>Backend: Docker, MVC, gRPC</li>
            <li>Tools: Git, GitHub.</li>
            <li>
              Soft Skills: Problem-solving, teamwork, communication,
              adaptability.
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Layout container --> */}
      <div className="container-md px-5 flex flex-col lg:flex-row justify-between mx-auto pt-4 lg:h-fit lg:pb-6 gap-x-3">
        {/* CV Left side */}
        <div className="lg:h-10/12 basis-1/2 lg:overflow-y-scroll scroll-pb-5">
          <div className="py-3 flex flex-col border-fg gap-x-1">
            <h1 className="font-bold text-lg dark:text-catpuccinMauve dark:underline dark:decoration-catpuccinMauve">
              EXTRACURRICULAR / VOLUNTEER EXPERIENCE
            </h1>
            <CvEntry
              title="Casa David - Lead Developer"
              duration="October - December 2024"
            >
              <p>
                Led the v1.1 update of Casa David’s internal software, fixing
                bugs and adding features based on user feedback. Contributed to
                both frontend (React, Tailwind CSS) and backend (Express.js,
                PostgreSQL) development, and successfully migrated and deployed
                the app to Heroku for improved reliability and user experience
              </p>
            </CvEntry>
          </div>
          {/* <!-- END OF EXTRACURRICULAR/ACTIVITIES --> */}

          <div className="py-3 flex flex-col border-t border-fg gap-x-1">
            <h1 className="font-bold text-lg dark:text-catpuccinMauve dark:underline dark:decoration-catpuccinMauve">
              EDUCATION
            </h1>
            <CvEntry
              title="Universidad Tecnológica Centroamericana, San Pedro Sula, Honduras"
              duration="January 2023 - Present"
            >
              <ul className="mt-3 list-disc w-3/4 ml-4">
                <li>
                  Bachelor's in Software Engineering (Expected Graduation:
                  September 2027)
                </li>
                <li>Current GPA: 3.0/4.0</li>
                <li>Proficient in Python, Java, C++, JavaScript.</li>
                <li>
                  Strong problem-solving, collaboration, leadership and
                  debugging skills.
                </li>
                <li>
                  Relevant Coursework: Data Structures and Algorithms, Software
                  Engineering, Database Management, User Experience.
                </li>
              </ul>
            </CvEntry>

            <CvEntry
              title="Harvard CS50x - Introduction to Computer Science"
              duration="Nov. 2021 - Apr. 2022"
            >
              <ul className="mt-3 list-disc w-3/4 ml-4">
                <li>
                  Completed intensive coursework covering algorithms, data
                  structures, and foundational computer science concepts using C
                  and Python.
                </li>
                <li>
                  Developed a web-based stock trading simulator leveraging
                  Python, Flask, REST APIs, HTML, and CSS.
                </li>
                <li>
                  Designed and presented a fully functional To-Do Manager web
                  application as a capstone project, utilizing Python, Flask,
                  SQLite, and responsive front-end technologies.
                </li>
              </ul>
            </CvEntry>
          </div>
          {/* <!-- END OF EDUCATION SECTION --> */}
        </div>
        {/* <!-- END OF INFORMATION SECTION --> */}

        {/*Right side - Featured Work */}
        <hr className="w-4/5 my-3 lg:hidden" />
        <div id="work" className="flex-none basis-1/2 px-5">
          <h1 className="text-xl font-extrabold dark:text-catpuccinMauve dark:underline dark:decoration-catpuccinMauve">
            FEATURED WORK
          </h1>
          <p className="mt-2">{"It's empty here :("}</p>
        </div>
      </div>
    </>
  );
}
