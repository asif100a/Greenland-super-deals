import { useLoaderData, useParams } from "react-router-dom";

const ViewProperty = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const matched = data.find(current => current.id === parseInt(id));
    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image_url
    } = matched;

    return (
        <div className="py-12 w-full">
            <div className="flex flex-col bg-[#f4ecf4a1] border border-gray-200 rounded-lg p-6 lg:flex-row md:max-w-full">
                <div className="md:min-w-[40%]">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto lg:rounded-s-lg" src={image_url} alt="" />
                </div>
                <div className="flex flex-col justify-between lg:ml-6 mt-3 lg:mt-0 leading-normal">
                    <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{estate_title}</h1>
                    <p className="mb-3 font-normal text-gray-700">{description}</p>
                    <div className="py-4 border-t-2 border-b-2 border-dashed mt-6 mb-6">
                        <p className="p-4 border-t border-gray-100 rounded-lg w-fit shadow-md"><span className="text-xl font-semibold">{segment_name}</span></p>
                    </div>
                    <p className="py-1 pl-1 space-y-1 shadow-md"><span className="font-semibold">Price :</span> {price}</p>
                    <p className="py-1 pl-1 space-y-1 shadow-md"><span className="font-semibold">Area :</span> {area}</p>
                    <p className="py-1 pl-1 space-y-1 shadow-md"><span className="font-semibold">Location :</span> {location}</p>
                    <p className="py-1 pl-1 space-y-1 shadow-md"><span className="font-semibold">Status :</span> {status}</p>
                    <div className="py-1 pl-1 space-y-1 shadow-md"><p className="font-semibold">Our facilities : </p>
                        <ul className="list-disc ml-8">
                            {facilities.map((facility, i) => <li key={i} className="">{facility}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewProperty;