import React, { Component } from 'react';
import dummyData from '../../data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    handleSearchPosts = event=> {
        const posts = this.state.posts.filter(post=> {
            if (post.username.includes(event.target.value)) {
                return post;
            }
        });
        this.setState({ filteredPosts: posts });
    };

    render() {
        return (
            <div className='App'>
                <SearchBar 
                    searchTerm={this.state.searchTerm}
                    searchPosts={this.handleSearchPosts}
                />
                <PostsContainer 
                    posts={
                        this.state.filteredPosts.length > 0
                        ? this.state.filteredPosts
                        : this.state.posts
                    }
                />
            </div>
        );
    }
}

export default PostsPage;