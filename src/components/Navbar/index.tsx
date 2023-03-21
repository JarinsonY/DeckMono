
import AvatarButton from './AvatarButton';
import { Header, NavbarMenu, Title } from './styled';

const Navbar = () => {
    return (
        <Header>
            <Title href="/">DEX<strong>MONO</strong></Title>
            <NavbarMenu>
                <AvatarButton />
            </NavbarMenu>
        </Header>
    );
};

export default Navbar;
