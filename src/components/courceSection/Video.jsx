import React from 'react'
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Video = ({ srcv = '' }) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Reset states when video source changes
        setIsLoaded(false);
        setHasError(false);
    }, [srcv]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVideoLoad = () => {
        setIsLoaded(true);
    };

    const handleVideoError = () => {
        setHasError(true);
        console.error('Video failed to load:', srcv);
    };

    return (
        <div className="w-100 relative w-full max-w-2xl mx-auto d-flex justify-content-center align-items-center mx-2 flex-column">
            {/* Video Element */}
            {!isLoaded && !hasError && (
                <div className="video-loading position-absolute top-50 start-50 translate-middle text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading video...</p>
                </div>
            )}
            
            {hasError && (
                <div className="video-error p-4 bg-light rounded text-center" style={{ width: '85%' }}>
                    <i className="fas fa-exclamation-triangle text-warning mb-2" style={{ fontSize: '2rem' }}></i>
                    <p className="mb-0">Failed to load video. Please try again later.</p>
                </div>
            )}

            <video
                ref={videoRef}
                className="w-full rounded-xl shadow-lg h-100"
                autoPlay
                loop
                muted={isMuted}
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                style={{ 
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', 
                    width: '85%',
                    display: hasError ? 'none' : 'block'
                }}
            >
                <source src={srcv} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mute/Unmute Button */}
            {isLoaded && !hasError && (
                <button
                    onClick={toggleMute}
                    className="justify align-content-end absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full align-self-end"
                    style={{ marginRight: '2.3rem', marginTop: '1rem' }}
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
            )}
        </div>
    )
}

export default Video
