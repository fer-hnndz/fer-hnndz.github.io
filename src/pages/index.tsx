import Card from "../components/card";
import { ArrowDownOutlined } from "@ant-design/icons";

export default function Index() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="overflow-x-hidden scroll-smooth">
            {/* Hero Section */}
            <div className="bg-fellaRed h-screen w-screen flex flex-col-reverse md:flex-row relative text-start select-none">
                {/* Left Content */}
                <div className="basis-2/3 h-full flex flex-col justify-center md:mr-8">
                    <div>
                        <div className="mt-8 ml-6 text-white">
                            <h1 className="text-7xl font-semibold font-serif">Hello,</h1>
                            <h1 className="text-7xl font-semibold font-serif">World</h1>
                            <p className="text-lg my-1 font-mono mt-5 ml-2">User-Agent: Jorge Hernández</p>
                            <p className="text-lg my-1 font-mono ml-2">Accept-Language: es, en, de</p>
                            <p className="text-lg font-mono ml-2">Accept: preferred-role/backend, lang/python (and more...)</p>
                        </div>

                        {/* Scroll Icon */}
                        <div
                            className="text-center my-12 md:my-0 md:mt-12 h-fit cursor-pointer"
                            onClick={() => scrollTo("projects-header")}
                        >
                            <ArrowDownOutlined className="text-center text-white text-5xl animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex">
                    <img
                        src="../src/assets/hero.png"
                        className="bg-blue-500 rounded-full w-60 h-60 object-cover mx-auto mt-4 md:object-cover md:w-auto md:h-full md:rounded-none md:mt-0"
                        alt="Myself"
                    />
                </div>
            </div>

            {/* Projects Section */}
            <div className="bg-black text-white">
                <h1 id="projects-header" className="text-4xl font-semibold pt-2 text-center">
                    Projects
                </h1>

                <div className="grid grid-cols-3 gap-4 p-4">
                    <Card />
                </div>
            </div>
        </div>
    );
}
