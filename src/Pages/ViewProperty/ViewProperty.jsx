import { useLoaderData, useParams } from "react-router-dom";

const ViewProperty = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(data);

    const matched = data.find(current => current.id === parseInt(id));
    
    return (
        <div>
            <h1>View details</h1>
            
        </div>
    );
};

export default ViewProperty;