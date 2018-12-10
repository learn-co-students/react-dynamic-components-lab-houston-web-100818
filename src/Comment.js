// add Comment component hereimport React, { Component } from 'react';
import React, { Component } from "react";

export default class Comment extends Component {

    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }

}
