import { useState, useEffect, createContext } from "react";

import { api } from '../lib/axios.js'

const INITIAL_VALUE = {
    posts: [],
}

export const PostsContext = createContext(INITIAL_VALUE)

export function PostsProvider({ children }) {
    const [posts, setPost] = useState([])

    async function fetchPosts() {
        const response = await api.get('posts')
        setPost(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <PostsContext.Provider value={{ posts }}>
            {children}
        </PostsContext.Provider>
    )
}
