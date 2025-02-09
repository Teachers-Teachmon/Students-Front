import * as S from './style.jsx';
import Error from '../../../assets/Error.svg';
import Error2 from '../../../assets/Error2.svg';

export default function ErrorModal( {message} ) {

    return (
        <S.Wrapper>
            <S.MainContent>
                <img src={Error} />
                <img src={Error2} />
            </S.MainContent>
            <h2>{message}</h2>
        </S.Wrapper>
    );
}