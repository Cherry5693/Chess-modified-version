import React, { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import '../styles/video.css'; // newly added

const VideoChat = ({ room }) => {
    const [peerId, setPeerId] = useState("");
    const [remotePeerId, setRemotePeerId] = useState("");
    const [showVideo, setShowVideo] = useState(false); // newly added
    const peerRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const userVideoRef = useRef(null);
    const currentCall = useRef(null); // newly added

    useEffect(() => {
        const peer = new Peer();
        peer.on("open", (id) => {
            setPeerId(id);
        });

        peer.on("call", (call) => {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    userVideoRef.current.srcObject = stream;
                    call.answer(stream);
                    currentCall.current = call; // newly added
                    setShowVideo(true); // newly added

                    call.on("stream", (remoteStream) => {
                        remoteVideoRef.current.srcObject = remoteStream;
                    });

                    call.on("close", () => { // newly added
                        alert("User disconnected");
                        disconnectCall();
                    });
                });
        });

        peerRef.current = peer;
    }, []);

    const callPeer = () => {
        setShowVideo(true); // newly added
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                userVideoRef.current.srcObject = stream;
                const call = peerRef.current.call(remotePeerId, stream);
                currentCall.current = call; // newly added

                call.on("stream", (remoteStream) => {
                    remoteVideoRef.current.srcObject = remoteStream;
                });

                call.on("close", () => { // newly added
                    alert("User disconnected");
                    disconnectCall();
                });
            });
    };

    const disconnectCall = () => { // newly added
        currentCall.current?.close();
        userVideoRef.current.srcObject?.getTracks().forEach(track => track.stop());
        remoteVideoRef.current.srcObject?.getTracks().forEach(track => track.stop());
        setShowVideo(false);
    };

    return (
        <div>
            <h3>Your ID: {peerId}</h3>
            <input
                type="text"
                placeholder="Enter Remote ID"
                value={remotePeerId}
                onChange={(e) => setRemotePeerId(e.target.value)}
            />
            <button onClick={callPeer}>Call</button>
            {showVideo && <button onClick={disconnectCall}>Disconnect</button>} {/* newly added */}
            <div className={`video-chat-space ${showVideo ? "active" : ""}`}> {/* updated class */}
                <video className="videocall" ref={userVideoRef} autoPlay playsInline /> {/* added class */}
                <video className="videocall" ref={remoteVideoRef} autoPlay playsInline /> {/* added class */}
            </div>
        </div>
    );
};

export default VideoChat;
