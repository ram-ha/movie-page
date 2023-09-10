import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailItem from "../components/DetailItem";
function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCharic = async () => {
        const json = await (
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
        ).json();
        setDetail(json.data.results)
        setLoading(false)

    };
    useEffect(() => {
        getCharic();
    }, [])
    return (
        <>
            {loading ? (
                <strong className="absolute inset-y-2/4 inset-x-2/4">Please Wait...<br />Loading...</strong>
            ) : (
                <div className='flex flex-start h-full'>
                    <div className="flex flex-col items-center w-1/4 p-3 bg-stone-900">
                        <div className="flex flex-col items-center">
                            <img className="w-1/2 pt-6" src={'/marvel_logo.png'} alt="logo" />
                            {detail.map((detail) => (
                                <h1 className="font-serif text-center text-lg text-red-500" key={detail.id}>{detail.name}</h1>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col w-full p-5 justify-between'>
                        {detail.map((detail) => (
                            <DetailItem
                                key={detail.id}
                                id={detail.id}
                                comics={detail.comics.items}
                                series={detail.series.items}
                                stories={detail.stories.items}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Detail;