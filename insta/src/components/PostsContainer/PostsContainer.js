import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from 'styled-components';

const PostWrapper = styled.div`
    height: 50%;
    width: 54%;
    min-width: 300px;
    margin: 5px auto;

    @media (max-width: 500px) {
        width: 98%;
        margin-left: 2%;
    }
`;

const PostsContainer = props => {
    return (
        <PostWrapper>
            {props.posts.map(post => <Post post={post} key={post.imageUrl} />)}
        </PostWrapper>
    );
};

export default PostsContainer;