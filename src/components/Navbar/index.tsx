import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import { useState } from 'react';
import avatarImg from '../../assets/images/avatar.png';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-brand">
                <span>DeckMono</span>
            </div>
            <div className="navbar-menu">
                <div className="navbar-avatar" onClick={() => setShowMenu(!showMenu)}>
                    <Image src={avatarImg} alt="Avatar" width={40} height={40} />
                </div>
                {showMenu && (
                    <div className="navbar-dropdown">
                        <a href="#">Perfil</a>
                        <button onClick={logout}>Cerrar sesión</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
