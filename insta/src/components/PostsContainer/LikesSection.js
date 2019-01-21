import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../CommentSection/Comment';

const LikesSectionDiv = styled.div`
    height: 10px;
    width: 10px;
    margin: 10px;
    padding-bottom: 15px;
`;

const LikesSection = props=> {
    return [
        <div>
        <FlexWrapper
            key='likes-icons-container'
            onClick={props.incrementLikes}
            comment
        >
            <LikesSectionDiv>
                <i className='far fa-heart'/>
            </LikesSectionDiv>
            <LikesSectionDiv>
                <i className='far fa-comment'/>
            </LikesSectionDiv>
        </FlexWrapper>
        <FlexWrapper key='likes-container' comment>
            <LikesSectionDiv>{props.likes}</LikesSectionDiv>
        </FlexWrapper>
        </div>
    ];
}

export default LikesSection;
