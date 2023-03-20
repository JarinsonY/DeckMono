import avatarImg from '../../assets/images/avatar.png';
import AvatarButton from './AvatarButton';
import { Header, NavbarMenu, Title } from './styled';

const Navbar = () => {
    return (
        <Header>
            <Title>
                <span>DeckMono</span>
            </Title>
            <NavbarMenu>
                <AvatarButton avatarImg={avatarImg} />
            </NavbarMenu>
        </Header>
    );
};

export default Navbar;
