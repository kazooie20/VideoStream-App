import React from 'react';

import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        //Action Creator of create Stream
        this.props.createStream(formValues);
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                
                <StreamForm  onSubmit={this.onSubmit} title="Create a Stream" />
            </div>
            
        );
    }

}




export default connect(null, {createStream})(StreamCreate);