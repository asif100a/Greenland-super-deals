import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import defaultPhoto from '../../assets/images.png';

const YourProfile = () => {
    const { user } = useAuth();

    const [userPhoto, setUserPhoto] = useState();

    useEffect(() => {
        if (user?.photoURL?.includes('https')) {
            setUserPhoto(user?.photoURL);
        }
        else {
            setUserPhoto(defaultPhoto);
        }
    }, [user?.photoURL]);

    return (
        <div className="w-fit h-screen flex justify-center items-center mx-auto">
            <div className="w-[20rem] h-[28rem] rounded-lg bg-cover bg-center absolute -z-10 blur-lg" style={{ backgroundImage: `url(${user?.photoURL})` }}><div className="w-full h-full bg-black bg-opacity-20"></div></div>
            <div className="flex flex-col justify-center border rounded-lg mx-auto p-8" >
                <div className="avatar mx-auto">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={userPhoto} />
                    </div>
                </div>
                <div className=" font-bold justify-normal space-y-3 mt-16">
                    <div className="font-noto_serif text-lg">
                        <p className="text-white">Name :</p>
                        <p className="border px-3 py-1 rounded-md pt-2 bg-white bg-opacity-40 text-white">{user?.displayName}</p>
                    </div>
                    <div className="font-noto_serif text-sm">
                        <p className="text-white">Email :</p>
                        <p className="border px-3 py-1 rounded-md pt-2 bg-white bg-opacity-40 text-white"> {user?.email}</p>
                    </div>
                    <div className="font-noto_serif text-sm">
                        <p className="text-white">Photo url :</p>
                        <p className="border px-3 py-1 rounded-md pt-2 bg-white bg-opacity-40 text-white w-[20rem] whitespace-nowrap overflow-x-scroll">{user?.photoURL}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="btn bg-white bg-opacity-40 hover:bg-white hover:bg-opacity-70 text-white font-bold text-lg font-pt_serif">Edit profile</button>
                </div>
            </div>
        </div>
    );
};

export default YourProfile;