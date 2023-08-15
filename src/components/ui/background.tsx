export const Background = () => {
    return (
        <video
            muted
            autoPlay
            loop
            className="fixed top-0 left-0 object-cover w-full h-full -z-50 opacity-10">
            <source src="/background/background-video-02.mp4" type="video/mp4" />
        </video>
    )
}