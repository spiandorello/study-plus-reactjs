import { Link } from "react-router-dom";
import { House, UsersThree, Bell } from '@phosphor-icons/react'

import { Avatar } from '../'

import logo from '../../assets/logo.svg'

import {
    HeaderContainer,
    HeaderWrapper,
    SearchInput,
    NavigationContainer,
} from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Link to="/home">
                    <img src={logo} alt=""/>
                </Link>

                <SearchInput
                    id="search"
                    type="text"
                    placeholder="Pesquise no Estuda+"
                />

                <NavigationContainer>
                    <Link to="/home">
                        <House color="#444444" weight="fill" size={28} />
                    </Link>

                    <Link to="/community">
                        <UsersThree color="#444444" weight="fill" size={28} />
                    </Link>

                    <Link to="">
                        <Bell color="#444444" weight="fill" size={28} />
                    </Link>
                </NavigationContainer>

                <Link to="/profile">
                    <Avatar profileAsset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBMwRJfFeRL23d-4MB-yq_6NyJFUw7zprYQ&usqp=CAU" />
                </Link>
            </HeaderWrapper>
        </HeaderContainer>
    )
}
