import {
    PostContainer,
    PostInfoContainer,
    PostActions,
    RepostedContainer,
    Wrapper
} from './styles'

import { Avatar } from '../Avatar';
import {ArrowBendUpLeft} from "@phosphor-icons/react";

export function Post(props) {
    const {
        reposted,
        profileAsset,
        name,
        postedAt,
        description
    } = props

    return (
        <PostContainer>

            {reposted && (
                <RepostedContainer>
                    <ArrowBendUpLeft />
                    <p>Kazuha Nakamura repostou</p>
                </RepostedContainer>
            )}

            <Wrapper>
                <Avatar profileAsset={profileAsset} />

                <PostInfoContainer>
                    <div>
                        {name}
                    </div>
                    <div>
                        {postedAt}
                    </div>

                    <div>
                        {description}
                    </div>

                    <PostActions>
                        <div>Icon</div>
                        <div>Icon</div>
                        <div>Icon</div>
                    </PostActions>
                </PostInfoContainer>
            </Wrapper>
        </PostContainer>
    )
}
