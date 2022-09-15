import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector} from 'react-redux';
import { fetchStream, updateStream } from "../../actions";
import StreamForm from './StreamForm';
import _ from 'lodash';


const StreamEdit = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        dispatch(fetchStream(id));
        
    }, [])
    const stream = useSelector(state => state.streams[id]);
    
    const onSubmit = (formVals) => {
        console.log(formVals);
        dispatch(updateStream(id, formVals));

    }
    
    
    return (
        <div className="StreamEdit">
           
            <StreamForm initialValues={_.pick(stream, 'title','description')} onSubmit={onSubmit} title="Edit a Stream"/>

        </div>
        
    )
}


export default StreamEdit;