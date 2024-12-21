import { useEffect, useState } from "react";
import { Card, Tag } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import hero from "./static/hero.png";


type Repository = { id: number, name: string, description: string, archived: boolean, license: { name: string, spdx_id: string }, language: string, stargazers_count: number, html_url: string }

export default function Index() {
    const [repos, setRepos] = useState(
        [] as Repository[]);


    const [helloText, setHelloText] = useState(""); // Estado para "Hello,"
    const [worldText, setWorldText] = useState(""); // Estado para "World"

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Fetch Repos
    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/fer-hnndz/repos?sort=pushed");
            const data = await response.json();

            // Remove repos that don't have a description or the repo named fer-hnndz.github.io

            const filteredData = data.filter((repo: Repository) => repo.description && repo.name !== "fer-hnndz.github.io");

            setRepos(filteredData.slice(0, 6));
        }

        fetchRepos();
    }, []);


    useEffect(() => {
        // Función para escribir "Hello,"
        const typeHello = async () => {
            const hello = "Hello,";
            for (let i = 0; i < hello.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 150)); // Delay entre letras
                setHelloText((prev) => prev + hello[i]);
            }
        };

        // Función para escribir "World"
        const typeWorld = async () => {
            const world = "World";
            for (let i = 0; i < world.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 150));
                setWorldText((prev) => prev + world[i]);
            }
        };

        // Escribir primero "Hello," y luego "World"
        const typeAll = async () => {
            await typeHello(); // Escribe "Hello,"
            await new Promise((resolve) => setTimeout(resolve, 500)); // Pausa antes de "World"
            await typeWorld(); // Escribe "World"
        };

        typeAll();
    }, []);


    return (
        <div className="overflow-x-hidden scroll-smooth">
            {/* Hero Section */}
            <div className="bg-fellaRed h-screen w-screen flex flex-col-reverse md:flex-row relative text-start select-none">
                {/* Left Content */}
                <div className="basis-2/3 h-full flex flex-col justify-center md:mr-8">
                    <div>
                        <div className="mt-8 ml-6 text-white">
                            <h1 id="hello-header" className="text-7xl font-semibold font-serif">{helloText}</h1>
                            <h1 id="world-header" className="text-7xl font-semibold font-serif">{worldText}</h1>
                            <p className="text-lg my-1 font-mono mt-5 ml-2">User-Agent: Jorge Hernández</p>
                            <p className="text-lg my-1 font-mono ml-2">Accept-Language: es, en, de</p>
                        </div>

                        {/* Scroll Icon */}
                        <div
                            className="text-center my-16 md:my-0 md:mt-12 h-fit cursor-pointer"
                            onClick={() => scrollTo("projects-header")}
                        >
                            <ArrowDownOutlined className="text-center text-white text-5xl animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex">
                    <img
                        src={hero}
                        className="bg-blue-500 rounded-full w-60 h-60 object-cover mx-auto mt-4 md:object-cover md:w-auto md:h-full md:rounded-none md:mt-0"
                        alt="Myself"
                    />
                </div>
            </div>


            {/* About Me Section */}
            <div className="bg-white text-black">
                <h1 id="about-header" className="text-6xl font-semibold py-12 text-center font-serif">
                    About Me
                </h1>

                <p className="text-justify text-lg font-semibold w-5/6 md:w-1/2 mx-auto mb-12">
                    My name is Jorge, and I am an aspiring Software Engineer based in Honduras. I am currently pursuing a Bachelor's Degree in Software Engineering at <a className="text-blue-500" href="https://www.unitec.edu" target="_blank" rel="noopener noreferrer">UNITEC</a>.
                    Although I lack professional work experience, my eagerness to learn and passion for this field have driven me to work on several self-initiated projects.
                    Additionally, I have contributed to improving existing software, such as <i><a className="text-blue-500" href="https://casadavid.org">Casa David</a>'s</i> internal software.
                    <br />
                    <br />
                    I have been developing software independently using various technologies, including Python with frameworks like <span className="font-mono font-thin">Flask</span>, aswell as JavaScript with <span className="font-mono font-thin">React,</span> <span className="font-mono font-thin">Next.js</span> and <span className="font-mono font-thin">Express.js</span>.
                    <br />
                    I am committed to continuously learning and improving my skills, and I am always seeking new opportunities to work on projects that will help me grow as a software engineer.

                </p>
            </div>



            {/* Projects Section */}
            <div className="bg-black text-white">
                <h1 id="projects-header" className="text-6xl font-semibold py-12 text-center font-serif">
                    Projects
                </h1>

                <p className="text-lg text-center font-semibold">A collection of the projects under my Github profile that I have been working on recently.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    {
                        repos.map((repo) => (
                            <Card
                                key={repo.id}
                                title={repo.name}
                            >
                                <div className="flex-row w-full h-fit mb-4 flex gap-y-3 flex-wrap">
                                    {repo.archived ? <Tag color="red">Archived</Tag> : <></>}
                                    <Tag color="gold">License: {repo.license ? repo.license.spdx_id : "???"}</Tag>
                                    <Tag color="blue">Language: {repo.language}</Tag>
                                    <Tag color="green">Stars: {repo.stargazers_count}</Tag>
                                </div>

                                {repo.description}

                                <br />
                                <a href={repo.html_url}><button className="text-black bg-racingYellow p-2 mt-4 rounded-md font-semibold ease-in-out duration-150 hover:-translate-y-2">Visit Github</button></a>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}
