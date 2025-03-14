import { useNavigate, useLocation } from 'react-router-dom'
import * as S from './style.jsx'
import teachmonLogo from '../../assets/teachmon.svg'
import BookLogo from '../../assets/Book.svg'
import EyesLogo from '../../assets/Eyes.svg'
import HouseLogo from '../../assets/House.svg'
import ListChecksLogo from '../../assets/ListChecks.svg'
import AdminSetting from '../../assets/AdminSetting.svg'
import Logout from '../../assets/logout.svg'
import {useLogout} from "../../hooks/useAuth.js";
import useAuth from "../../zustand/auth.js";

const MENU = [
  { label: '메인', path: '/main', logo: HouseLogo },
  { label: '자습감독', path: '/supervision', logo: EyesLogo },
  { label: '학생관리', path: '/manage', logo: ListChecksLogo },
  { label: '방과후 수업', path: '/after-school', logo: BookLogo },
  { label: '관리자', path: '/admin', logo: AdminSetting },
]

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const {mutate:logout} = useLogout();
  let username = localStorage.getItem('name');
  let userprofile = localStorage.getItem('profile');
  const {role} = useAuth();

  return (
    <S.HeaderContainer>
      <S.Logo draggable="false" src={teachmonLogo} onClick={() => { navigate('/main') }} />
      <S.NavList>
        {
          MENU.map((menu, index) => {
            const isActive = location.pathname.startsWith(menu.path);
            if(menu.path === '/admin' && role !== 'ADMIN') {
              return null
            }
            return (
              <S.MenuItem key={index} onClick={() => { navigate(menu.path) }} $active={isActive}>
                <S.MenuIcon draggable="false" src={menu.logo} $active={isActive} />
                {menu.label}
              </S.MenuItem>
            )
          })
        }
      </S.NavList>
      <S.Bottom>
          <S.BottomText href="https://forms.gle/tmEfEqewhny9XTtM9" target = "_blank">버그 제보</S.BottomText>
          <div>
              <S.BottomProfile src={userprofile} />
              <span>{username}</span>
          </div>
      </S.Bottom>
        <S.Logout onClick={() => { logout() }}>
            <img draggable="false" src={Logout} alt={"logoutIcon"} width={24}/>
            <p>로그아웃</p>
        </S.Logout>
    </S.HeaderContainer>
  )
}