import Lottie from "lottie-react";

import loader from '../../assets/animations/loader.json';

const Loader = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Lottie animationData={loader} loop={true} />
        </div>
    );

};

export default Loader;