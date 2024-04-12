import { useLoaderData, useParams } from "react-router-dom";

const ViewProperty = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data);

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
        <div>
            <h1>View details</h1>

            <div className="flex flex-col bg-white border border-gray-200 rounded-lg p-6 md:flex-row md:max-w-full">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[40%] md:rounded-none md:rounded-s-lg" src={image_url} alt="" />
                <div className="flex flex-col justify-between ml-6 leading-normal">
                    <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{estate_title}</h1>
                    <p className="mb-3 font-normal text-gray-700">{description}</p>
                    <div className="py-4 border-t-2 border-b-2 border-dashed mt-6 mb-6">
                        <p><span className="text-xl font-semibold">{segment_name}</span></p>
                    </div>
                    <p><span className="font-semibold">Price :</span> {price}</p>
                    <p><span className="font-semibold">Area :</span> {area}</p>
                    <p><span className="font-semibold">Location :</span> {location}</p>
                    <p><span className="font-semibold">Status :</span> {status}</p>
                    <p><span className="font-semibold">Facilities :</span> {facilities}</p>
                </div>
            </div>

        </div>
    );
};

export default ViewProperty;