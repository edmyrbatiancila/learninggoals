import React, { useEffect, useState } from "react";

interface MessagePopProps {
    message:    string;
    isVisible:  boolean;
    onClose:    () => void
}

const MessagePop: React.FC<MessagePopProps> = ({ message, isVisible, onClose}) => {

    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setFadeOut(true);
            }, 4000);

            return () => clearTimeout(timer);
        }else {
            setFadeOut(false);
        }
    }, [isVisible]);

    useEffect(() => {
        if (fadeOut) {
            const timer = setTimeout(() => {
                onClose();
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [fadeOut, onClose]);

    if(!isVisible && !fadeOut) return null;

    return(
        <aside
            className={ `fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white 
                transition-opacity duration-500 ease-out 
                ${fadeOut ? 'opacity-0' : 'opacity-100'}` }
        >
            <p>
                {message}
            </p>
        </aside>

    )
}

export default MessagePop;

