import React from 'react';
import styled from 'styled-components';

import Camera from '../../assets/igcameralogo.png';
import IGLogo from '../../assets/iglogo.png';

const Header = styled.header`
    border-bottom: 1px solid #3333;
    margin-bottom: 50px;
    height: 80px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;

    @media (max-width: 500px) {
        flex-direction: column;
        width: 50%;
        align-items: center;
        border: none;
        margin: 0 auto;
        margin-bottom: 60px;
    }
`;

const LogoHeader = styled.div`
    width: 300px;
    line-height: 75px;
`;

const LogoImage = styled.img`
    height: 50%;
    padding: 0px 15px;

    @media (max-width: 500px) {
        height: 30px;
    }
`;

const Divider = styled.span`
    width: 50px;
`;

const InputWrapper = styled.div`
    width: 300px;
    margin: auto;
    display: flex;

    @media (max-width: 500px) {
        width: 40%;
        margin-right: 53.5%;
    }
`;

const SearchInput = styled.input`
    width: 300px;
    height: 30px;
    text-align: center;
    border: 1px solid lightgray;
    border-radius: 5px;

`;

const IconsWrapper = styled.div`
    display: flex;
    width: 300px;

    @media (max-width: 500px) {
        display: none;
    }
`;

const SearchIcon = styled.i`
    position: absolute;
    display: inline;
    top: 33px;
    padding-left: 10px;

    @media (max-width: 500px) {
        top: 83px;
    }
`;

const IconDiv = styled.div`
    width: 50px;
`;


const SearchBar = props => {
    return (
    <Header>
        <LogoHeader>
            <LogoImage src={Camera} alt='instagram camera logo' />
            <Divider> | </Divider>
            <LogoImage src={IGLogo} alt='instagram logo' />
        </LogoHeader>
        <InputWrapper>
            <SearchIcon className='fas fa-search'/>
            <SearchInput 
                type='text'
                placeholder='Search'
                onKeyDown={props.searchPosts}
            />
        </InputWrapper>
        <IconsWrapper>
            <IconDiv>
                <i className='far fa-compass'/>
            </IconDiv>
            <IconDiv>
                <i className='far fa-heart'/>
            </IconDiv>
            <IconDiv>
                <i className='far fa-user-circle'/>
            </IconDiv>
        </IconsWrapper>
    </Header>
    );
};

export default SearchBar;