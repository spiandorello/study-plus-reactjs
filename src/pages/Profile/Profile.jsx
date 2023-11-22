import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    Followage,
} from './styles'
import {Post} from "../../components/index.js";
import {PostsList} from "../Home/styles.jsx";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext.jsx";

export function Profile() {
    const { posts } = useContext(PostsContext)

    return (
        <>
            <Container>
                <Banner imageUrl="https://developers.redhat.com/sites/default/files/styles/article_feature/public/ST-java1_1x%20%283%29_3.png?itok=y36CMCts">
                    <Avatar imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXqbWMJ6udZtkYbuZzWZol1nAhyN7u3FyEg&usqp=CAU" />
                </Banner>

                <ProfileData>
                    <h1>Kazuha Nakamura</h1>

                    <Followage>
                    <span>
                        Seguindo <strong>100</strong>
                    </span>

                        <span>
                        Seguidores <strong>100</strong>
                    </span>

                        <span>
                        Contribuições <strong>100</strong>
                    </span>
                    </Followage>

                    <div>
                        <button>Seguir</button>
                        <button>XP:385</button>
                    </div>
                </ProfileData>
            </Container>

            <PostsList>
                {posts.slice(2).map(({ id, name, profile_asset: profileAsset, posted_at: postedAt, description }) => (
                    <Post
                        reposted
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
