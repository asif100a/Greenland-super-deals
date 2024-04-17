import { useEffect, useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import defaultPhoto from '../../assets/images.png';
import { MdOutlineInsertPhoto } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
    const { user, editUserProfile } = useAuth();
    console.log(editUserProfile)

    const [userPhoto, setUserPhoto] = useState();

    useEffect(() => {
        if (user?.photoURL?.includes('https')) {
            setUserPhoto(user?.photoURL);
        }
        else {
            setUserPhoto(defaultPhoto);
        }
    }, [user?.photoURL]);


    // Show input modal-----------------
    const textRef = useRef();

    // React hook form
    const {
        register,
        handleSubmit,
    } = useForm();

    const handleShowInputModal = (e) => {
        e.preventDefault();
        textRef.current.classList.remove('hidden');
    };

    // Get modal input value & Set changes
    const onSubmit = (data) => {

        const { name, photo_url } = data;
        console.log(name, photo_url)

        if (name === '') {
            return toast.error('Please provide a name');
        }
        else if (photo_url === '') {
            return toast.error('Please provide a photo url');
        }

        // Save edit in firebase
        editUserProfile(name, photo_url)
        handleHideInputModal();

        // .then(res => console.log(res))
        // .catch(err => console.error(err));

        // Remove the modal after submit
    };

    const handleHideInputModal = () => {
        // e.preventDefault();
        textRef.current.classList.add('hidden');
    };




    return (
        <div
            className="w-fit h-screen flex justify-center items-center mx-auto">
            <div
                className="w-[92%] md:w-[20rem] h-[27rem] rounded-lg bg-cover bg-center absolute -z-10 blur-lg"
                style={{ backgroundImage: `url(${user?.photoURL})` }}>
                <div
                    className="w-full h-full bg-black bg-opacity-20">
                </div>
            </div>

            <div className="flex flex-col justify-center border rounded-lg mx-auto p-8 w-[95%] md:w-auto">
                <div className="avatar mx-auto">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={userPhoto} />
                    </div>
                </div>
                <div className=" font-bold ju
                stify-normal space-y-3 mt-16">
                    <div className="font-noto_serif text-lg">
                        <p
                            className="text-white">Name :</p>
                        <p
                            className="border px-3 py-1 rounded-md pt-2 bg-white bg-opacity-40 text-white">
                            {user?.displayName}</p>
                    </div>
                    <div className="font-noto_serif text-sm">
                        <p
                            className="text-white">Email :</p>
                        <p
                            className="border px-3 py-1 rounded-md pt-2 bg-white bg-opacity-40 text-white">
                            {user?.email}</p>
                    </div>
                    <div className="font-noto_serif text-sm">
                        <p
                            className="text-white">Photo url :</p>
                        <p
                            className="border px-3 py-1 rounded-md pt-2 bg-white bg-opacity-40 text-white w-[20rem] whitespace-nowrap overflow-x-scroll">
                            {user?.photoURL}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        className="btn bg-white bg-opacity-40 hover:bg-white hover:bg-opacity-70 text-white font-bold text-lg font-pt_serif"
                        onClick={handleShowInputModal}
                    >Edit profile</button>


                </div>
            </div>

            {/* Input Modal Field */}
            <div
                ref={textRef}
                id=""
                className="absolute hidden"
            >
                <div className="w-full h-full flex justify-center items-center ">
                    <div
                        className="bg-white border w-fit h-fit rounded-lg p-6 pt-0 pr-0"
                    >
                        <div className="flex justify-end pt-2 pr-2">
                            <button
                                onClick={handleHideInputModal}
                                ref={textRef}
                                className="text-center rounded-full flex justify-center items-center border w-8 h-8 text-red-500 hover:cursor-pointer hover:bg-red-500 hover:text-white"
                            >X</button>
                        </div>
                        <form
                            action=""
                            onSubmit={handleSubmit(onSubmit)}
                            className="pt-6 pr-6 space-y-3"
                        >
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input
                                    type="text"
                                    className="grow"
                                    defaultValue={user?.displayName}
                                    {...register('name')}
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <MdOutlineInsertPhoto />
                                <input
                                    type="text"
                                    className="grow"
                                    defaultValue={user?.photoURL}
                                    {...register('photo_url')}
                                />
                            </label>
                            <button className="bg-green-400 px-3 py-1 rounded-md">Save the changes</button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default UpdateProfile;