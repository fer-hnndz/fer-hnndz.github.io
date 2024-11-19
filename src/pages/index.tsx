import Card from "../components/card";

export default function Index() {
    return (
        <div className="overflow-x-hidden my-0">
            <div className="bg-fellaRed h-screen w-screen  flex flex-row relative">
                <div className="basis-2/3 bg-red-500 h-screen flex">
                    <div className="my-auto ml-12 text-white">
                        <h1 className="text-9xl font-semibold">Hello,</h1>
                        <h1 className="text-9xl font-semibold">World</h1>

                        <p className="text-2xl font-mono mt-5 ml-2">User-Agent: Jorge Hernandez 🇭🇳</p>
                        <p className="text-2xl font-mono ml-2">Accept-Language: es, en, de</p>
                        <p className="text-2xl font-mono ml-2">Accept: dev/backend, lang/python (and more...)</p>
                    </div>
                </div>

                <div className="bg-green-400 flex-1">
                    imagen
                </div>
            </div>

            <div className="bg-black text-white mt-0">
                <h1 className="text-4xl font-semibold mt-2 text-center">Projects</h1>

                <div className="grid grid-cols-3 gap-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}