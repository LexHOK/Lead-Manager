import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props
        if (error !== prevProps.error) {
            if (error.msg.name) {
                alert.error('Name is required');
            };
            if (error.msg.email == "This field may not be blank.") {
                alert.error('Email is required');
            };
            if (error.msg.email == "lead with this email already exists.") {
                alert.error('This email already has a lead');
            };
            if (error.msg.message) {
                alert.error(`Message: ${error.msg.message.join()}`);
            };
            if (error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join());
            };
            if (error.msg.username) {
                alert.error(error.msg.username.join());
            }
        }

        if (message !== prevProps.message) {
            if (message.deleteLead) {
                alert.success(message.deleteLead);
            }
            if (message.addLead) {
                alert.success(message.addLead);
            }
            if (message.passwordsNotMatch) {
                alert.error(message.passwordsNotMatch);
            }
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.messagesReducer
})

export default connect(mapStateToProps)(withAlert(Alerts));
