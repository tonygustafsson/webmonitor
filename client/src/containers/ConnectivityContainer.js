import { connect } from 'react-redux';
import Connectivity from '../components/Connectivity';

const mapStateToProps = state => {
    return {
        isOnline: state.isOnline
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Connectivity);