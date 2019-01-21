import React from 'react';
import PropTypes from 'prop-types';

import CommentInput from './CommentInput';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({ 
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        } else {
            this.setComments();
        }
    }

    componentWillUnmount() {
        this.setComments();
    }

    setComments = ()=> {
        localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments));
    }

    handleComment = event=> {
        this.setState({ comment: event.target.value });
    };

    handleSubmitComment = event=> {
        event.preventDefault();
        const newComment = {
            text: this.state.comment,
            username: localStorage.getItem('user')
        };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        setTimeout(()=> {
            this.setComments();
        }, 500);
    };

    render() {
        return (
            <div>
               {this.state.comments.map((comment, index)=> <Comment comment={comment} key={index} />)}
               <CommentInput 
                comment={this.state.comment}
                submitComment={this.handleSubmitComment}
                changeComment={this.handleComment}
               />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
};

export default CommentSection;