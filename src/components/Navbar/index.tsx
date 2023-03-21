
import AvatarButton from './AvatarButton';
import { Header, NavbarMenu, Title } from './styled';

const Navbar = () => {
    return (
        <Header>
            <Title>DEX<strong>MONO</strong></Title>
            <NavbarMenu>
                <AvatarButton />
            </NavbarMenu>
        </Header>
    );
};

export default Navbar;
