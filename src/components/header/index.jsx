import { useNavigate, useLocation } from 'react-router-dom'
import * as S from './style.jsx'
import teachmonLogo from '../../assets/teachmon.svg'
import BookLogo from '../../assets/Book.svg'
import EyesLogo from '../../assets/Eyes.svg'
import HouseLogo from '../../assets/House.svg'
import ListChecksLogo from '../../assets/ListChecks.svg'
import Logout from '../../assets/logout.svg'
import {useLogout} from "../../hooks/useAuth.js";

const MENU = [
  { label: '메인', path: '/main', logo: HouseLogo },
  { label: '자습감독', path: '/supervision', logo: EyesLogo },
  { label: '학생관리', path: '/manage', logo: ListChecksLogo },
  { label: '방과후 수업', path: '/after-school', logo: BookLogo },
]

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const {mutate:logout} = useLogout();
  let username = '오주현'; //String
  let userprofile = 'https://avatars.githubusercontent.com/u/177971300?v=4'; //URL일듯
  return (
    <S.HeaderContainer>
      <S.Logo src={teachmonLogo} onClick={() => { navigate('/main') }} />
      <S.NavList>
        {
          MENU.map((menu, index) => {
            const isActive = location.pathname.includes(menu.path);
            return (
              <S.MenuItem key={index} onClick={() => { navigate(menu.path) }} $active={isActive}>
                <S.MenuIcon src={menu.logo} $active={isActive} />
                {menu.label}
              </S.MenuItem>
            )
          })
        }
      </S.NavList>
      <S.Bottom>
        <S.BottomProfile src={userprofile} />
        {username}
      </S.Bottom>
        <S.Logout onClick={() => { logout() }}>
            <img src={Logout} alt={"logoutIcon"} width={24}/>
            <p>로그아웃</p>
        </S.Logout>
    </S.HeaderContainer>
  )
}