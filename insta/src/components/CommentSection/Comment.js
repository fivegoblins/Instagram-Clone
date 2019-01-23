import React from 'react';
import PropTypes from 'prop-types';
import { UserName } from '../PostsContainer/PostHeader';
import styled, { css } from 'styled-components';

export const FlexWrapper = styled.div`
    display: flex;

    @media (max-width: 500px) {
        width: 95%;
    }

    ${props =>
        props &&
        css`
          line-height: 10px;
        `};
`;

const CommentParagraph = styled.p`
        font-weight: 400;
        padding: 0 5px;
        text-align: left;
        line-height: 1;

        @media (max-width: 500px) {
            font-size: 14px;
        }
`;



const Comment = props => {
    return (
        <FlexWrapper>
            <UserName>{props.comment.username}</UserName>
            <CommentParagraph>{props.comment.text}</CommentParagraph>
        </FlexWrapper>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;