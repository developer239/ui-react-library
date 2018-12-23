import styled from 'src/styled'

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 4.6rem;
  line-height: 1.2;
  letter-spacing: -0.1rem;
`

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -0.1rem;
`

export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 2.8rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;
`

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 2.2rem;
  line-height: 1.35;
  letter-spacing: -0.08rem;
`

export const H5 = styled.h5`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.05rem;
`

export const H6 = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.4;
  letter-spacing: 0;
`

export const P = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 1.6rem;
`

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
}
