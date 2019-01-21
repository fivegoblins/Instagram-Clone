import React from 'react';
import './Posts.css';
import styled, { css } from 'styled-components';

const PostHeaderDiv = styled.div`
    display: flex;
    padding: 10px;
`;

const PostThumbnailWrapper = styled.div`
    height: 30px;
    width: 30px;
`;

export const UserName = styled.div`
    font-weight: 500;
    padding: 0 5px;

    ${props =>
        props.bold &&
        css`
          font-weight: 600;
          font-size: 0.9em;
          padding: 5px;
        `};
`;

const PostHeader = props => {
    return (
        <PostHeaderDiv>
            <PostThumbnailWrapper>
                <img 
                    alt='thumbnail image'
                    className='post-thumb'
                    src={props.thumbnailUrl}
                />
            </PostThumbnailWrapper>
            <UserName bold>{props.username}></UserName>
        </PostHeaderDiv>
    );
}

export default PostHeader;