import {
    PostContainer,
    PostInfoContainer,
    PostActions,
} from './styles'

import { Avatar } from '../Avatar';

export function Post(props) {
    const {
        profileAsset,
        name,
        postedAt,
        description
    } = props

    return (
        <PostContainer>
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
        </PostContainer>
    )
}
