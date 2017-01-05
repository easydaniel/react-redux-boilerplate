import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Base extends Component {
    static propTypes = {
        requiredProps: PropTypes.string.isRequired,
        defaultProps: PropTypes.string
    };
    static defaultProps = {
        defaultProps: 'default props'
    };
    render () {
        return (
            <div>
                <div>
                    <label>
                        Required Props:
                    </label>
                    <span>{ this.props.requiredProps }</span>
                </div>
                <div>
                    <label>
                        Default Props:
                    </label>
                    <span>{ this.props.defaultProps }</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Base)
