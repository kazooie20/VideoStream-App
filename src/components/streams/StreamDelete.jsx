import React, { useEffect } from 'react';
import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StreamDelete = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStream(id));
    }, []);

    const stream = useSelector(state => state.streams[id]);

    const actions = (
        <>
            <button onClick={()=> dispatch(deleteStream(id))} className='ui button negative'>Delete</button>
            <Link className='ui button' to="/streams/show">Cancel</Link>
        </>
    );

    const renderNoStream = () => {
        if (!stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream with title: ${stream.title}`
    }

    return (

        <Modal
            header='Delete Stream'
            content={renderNoStream()}
            actionButton={actions}
            onDismiss={() => history.push('/streams/show')}

        />

    )
}

export default StreamDelete;