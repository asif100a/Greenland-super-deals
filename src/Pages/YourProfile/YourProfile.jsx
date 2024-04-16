const YourProfile = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col gap-6 justify-normal border w-fit mx-auto p-6">
                <div className="avatar mx-auto">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="text-xl font-bold flex flex-col gap-2 justify-normal">
                    <p className="font-noto_serif">User : </p>
                    <p className="font-noto_serif">Email : </p>
                    <p className="font-noto_serif">Photo url : </p>
                </div>
            </div>
        </div>
    );
};

export default YourProfile;