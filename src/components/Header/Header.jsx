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
                <img src={logo} alt=""/>

                <SearchInput
                    id="search"
                    type="text"
                    placeholder="Pesquise no Estuda+"
                />

                <NavigationContainer>
                    <Link href="">
                        <House color="#444444" weight="fill" size={28} />
                    </Link>

                    <Link href="">
                        <UsersThree color="#444444" weight="fill" size={28} />
                    </Link>

                    <Link href="">
                        <Bell color="#444444" weight="fill" size={28} />
                    </Link>
                </NavigationContainer>

                <Avatar profileAsset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBMwRJfFeRL23d-4MB-yq_6NyJFUw7zprYQ&usqp=CAU" />
            </HeaderWrapper>
        </HeaderContainer>
    )
}
