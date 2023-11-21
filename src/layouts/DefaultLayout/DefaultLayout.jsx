import { Outlet } from 'react-router-dom'

import { Header } from '../../components/index.js'

import { LayoutContainer, LayoutContainerWrapper } from './styles'
import { PostsProvider } from "../../contexts/PostsContext.jsx";

export function DefaultLayout() {
    return (
        <PostsProvider>
            <LayoutContainer>
                <Header />
                <LayoutContainerWrapper>
                    <Outlet />
                </LayoutContainerWrapper>
            </LayoutContainer>
        </PostsProvider>
    )
}
