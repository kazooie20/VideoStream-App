import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchStream } from "../../actions";
import flv from 'flv.js';

const DisplayStream = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const videoRef = React.createRef();
    const stream = useSelector(state => state.streams[id]);

    useEffect(() => {
        dispatch(fetchStream(id));
        const player = flv.createPlayer({
            type: 'flv',
            url : `http://localhost:8000/live/${id}.flv`
        })
        player.attachMediaElement(videoRef.current);
        player.load();
        if (player || !stream) {
            return () =>{};
        }

        return ()=>{
            player.destroy();
        }
    
    }, [])
    

    const renderStream = () => {
        if (!stream) {
            return <div>Display Stream</div>
        }
        return (
            <div className="ui container">
            <video ref={videoRef} style={{width: '100%'}} controls={true} />
            <div className="ui raised segment">
                <h1>{stream.title}</h1>
                <p>{stream.description}</p>
            </div>
            </div>
        )
    }



    return (renderStream())
}

export default DisplayStream;