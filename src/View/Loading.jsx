import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

export const Loading = ({ loading }) => {
    return (
        // ${loading ? 'absolute' : 'opacity-100'}
        <div className={`${loading ? 'absolute' : 'opacity-0 pointer-events-none'} min-w-full min-h-screen bg-black flex justify-center items-center duration-500 absolute z-10`}>
            <BounceLoader
                color="rgb(99, 102, 241)"
                loading
                size={100}
                speedMultiplier={1}
            />
        </div>
    );
};
