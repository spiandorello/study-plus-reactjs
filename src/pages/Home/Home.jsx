import { Avatar, Post } from '../../components/';

import {
    PostsList,
    Publication,
    PublicationWrapper,
} from './styles'
import {useContext} from "react";
import {PostsContext} from "../../contexts/PostsContext.jsx";

export function Home() {
    const { posts } = useContext(PostsContext)

    return (
        <>
            <Publication>
                <Avatar profileAsset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBMwRJfFeRL23d-4MB-yq_6NyJFUw7zprYQ&usqp=CAU" />

                <PublicationWrapper>
                    <textarea />
                    <button>Compartilhar</button>
                </PublicationWrapper>
            </Publication>


            <PostsList>
                {posts.map(({ id, name, profile_asset: profileAsset, posted_at: postedAt, description }) => (
                    <Post
                        key={id}
                        name={name}
                        profileAsset={profileAsset}
                        postedAt={postedAt}
                        description={description}
                    />
                ))}
            </PostsList>
        </>
    )
}
