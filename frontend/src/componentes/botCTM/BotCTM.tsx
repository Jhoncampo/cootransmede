const imgChatBot =
    "https://www.cootransmede.com/wp-content/uploads/2021/12/Banner-WhatsApp2021.jpg ";

const BotCTM = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="w-full h-full flex items-center justify-center">
                <img
                    src="https://www.cootransmede.com/wp-content/uploads/2021/12/Banner-WhatsApp2021.jpg"
                    alt=""
                    className=" lg:max-w-6xl lg:max-h-80"
                />
            </div>
            <div className="flex items-center justify-stretch w-full h-[210px] max-w-4xl px-2 sm:h-[368px]  md:h-[480px]  ">
                <iframe
                    className=" w-full h-full "
                    src="https://www.youtube.com/embed/tZSZcIQ47rM?si=K9iFnBvVMq3KkVRq"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default BotCTM;
