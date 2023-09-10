import { useEffect, useState } from "react";
import Charic from "../components/Charic";
import Sidebar from "../components/Sidebar";

function Home() {
    const [loading, setLoading] = useState(true);
    const [charic, setCharic] = useState([]);

    const getCharic = async () => {
        const json = await (
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=2021,2023`)
        ).json();
        console.log(json.data.results);
        setCharic(json.data.results);
        setLoading(false)
    }
    useEffect(() => {
        getCharic();
    }, [])
    return (
        <div>
            {loading ? (
                <strong className="absolute inset-y-2/4 inset-x-2/4">Please Wait...<br />Loading...</strong>
            ) : (
                <div className='flex flex-start h-full'>
                    <Sidebar />
                    <div className='w-4/5 p-4'>
                        <div className="grid grid-rows-4 grid-flow-col gap-4">
                            {charic.map((charic) => (
                                <Charic
                                    key={charic.id}
                                    id={charic.id}
                                    name={charic.name}
                                    profileImg={`${charic.thumbnail.path}.${charic.thumbnail.extension}`}
                                    series={charic.series.items}
                                    desciption={charic.desciption}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default Home;