import { Link } from 'react-router-dom'

import * as S from './styles'

import Logo from '../../assets/logo.svg'

export function SlangHeader() {
  return (
    <S.Header>
      <S.Nav>
        <Link to="/">
          <S.Img src={Logo} alt="Slang logo" />
        </Link>
      </S.Nav>
    </S.Header>
  )
}
