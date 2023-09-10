function DetailItem({ id, comics, series, stories }) {
    return (
        <>
            <div>
                <div className="mb-5">
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        Comics
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-neutral-200 px-4 py-3 text-red-700">
                        {comics !== undefined && comics.map((comics) => (
                            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={comics.resourceURI}>
                                {comics.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mb-5">
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        Series
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-neutral-200 px-4 py-3 text-red-700">
                        {series !== undefined && series.map((series) => (
                            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={series.resourceURI}>
                                {series.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        Stories
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-neutral-200 px-4 py-3 text-red-700">
                        {stories !== undefined && stories.map((stories) => (
                            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={stories.resourceURI}>
                                {stories.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailItem;