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
        <div className="py-12 w-full ">
            <div className="w-[80%] h-[676px] rounded-lg absolute bg-cover bg-center bg-no-repeat z-[-1] blur-md" style={{ backgroundImage: `url(${image_url})` }}> </div>

            <div className="flex flex-col p-6 lg:flex-row md:max-w-full h-[676px] text-white">
                <div className="md:min-w-[40%]">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto lg:rounded-s-lg" src={image_url} alt="" />
                </div>
                <div className="flex flex-col justify-between lg:ml-6 mt-3 lg:mt-0 leading-normal">
                    <div className="bg-white bg-opacity-25 px-2 rounded-md">
                        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">{estate_title}</h1>
                        <p className="mb-3 font-normal text-white">{description}</p>
                    </div>
                    <div className="py-4 border-t-2 border-b-2 border-dashed mt-6 mb-6">
                        <p className="p-4 border-t border-gray-100 bg-white bg-opacity-30 rounded-lg w-fit shadow-md"><span className="text-xl font-semibold">{segment_name}</span></p>
                    </div>
                    <p className="py-1 pl-1 space-y-1 shadow-md bg-white bg-opacity-10 rounded-md"><span className="font-bold">Price :</span> {price}</p>
                    <p className="py-1 pl-1 space-y-1 shadow-md bg-white bg-opacity-10 rounded-md"><span className="font-bold">Area :</span> {area}</p>
                    <p className="py-1 pl-1 space-y-1 shadow-md bg-white bg-opacity-10 rounded-md"><span className="font-bold">Location :</span> {location}</p>
                    <p className="py-1 pl-1 space-y-1 shadow-md bg-white bg-opacity-10 rounded-md"><span className="font-bold">Status :</span> {status}</p>
                    <div className="py-1 pl-1 space-y-1 shadow-md bg-white bg-opacity-10 rounded-md"><p className="font-bold">Our facilities : </p>
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