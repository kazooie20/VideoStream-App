
import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamShow extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link className='ui button primary' to={`/streams/edit/${stream.id}`}>Edit</Link>
                    <Link className='ui button negative' to={`/streams/delete/${stream.id}`}>Delete</Link>

                </div>);
        }

    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}  {/*THE BUTTONS ARE PLACED ONTOP OF THE DIV SUCH THAT SEMANTIC UI CAN PROPERLY STYLE IT TO THE RIGHT*/}
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        <Link className='header' to={`/streams/display/${stream.id}`}>{stream.title}</Link>
                        <div className='description'>{stream.description}</div>
                    </div>

                </div>
            )

        })
    }

    //IF USER IS LOGGED IN, DISPLAY CREATE STREAM BUTTON 
    renderCreateStreamButton() {
        return (
            <Link to='/streams/new'>
            <div className="ui animated primary button " tabIndex="0">
                <div className="visible content">Create Stream</div>
                <div className="hidden content">
                    <i className="right arrow icon"></i>
                </div>
            </div>
            </Link>
        )
    }


    render() {
        return (
            <div className="StreamShow ui container">
                <h2>Streams</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                {this.props.isSignedIn && this.renderCreateStreamButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), //Turn the Object of state.streams back to an array with Object.values(obj)
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamShow);