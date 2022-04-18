import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import Image from 'next/image';
import Link from 'next/link';
import AIlearn from "../AIlearn/AIlearn"
const Home = ({ courses, error, isLoading, actionGetCourses }) => {
    useEffect(() => {
        actionGetCourses();
    }, []);
    return (
<div>
        <div className="body">
            <div className="banner">
                <img src="logoAI.png"/>
            </div>
        </div>
</div>
);
    };

Home.defaultProps = {
    courses: null,
    isLoading: true,
    error: null,
};

Home.propTypes = {
    courses: PropTypes.array,
    error: PropTypes.object,
    isLoading: PropTypes.bool,
    actionGetCourses: PropTypes.func,
};

const mapStateToProps = (state) => ({
    courses: state.homeReducer.courses,
    error: state.homeReducer.error,
    isLoading: state.homeReducer.isLoading,
});

export function mapDispatchToProps(dispatch) {
    return {
        actionGetCourses: (payload) => dispatch(getCourses(payload)),
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);