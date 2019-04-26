import styled from 'src/styled'
import { path } from 'ramda'

export const H1 = styled.h1`
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'text'])};
  font-weight: 400;
  font-size: 4.6rem;
  line-height: 1.2;
  letter-spacing: -0.1rem;
`

export const H2 = styled.h2`
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'text'])};
  font-weight: 400;
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -0.1rem;
`

export const H3 = styled.h3`
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'text'])};
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;
`

export const H4 = styled.h4`
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'text'])};
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 1.35;
  letter-spacing: -0.08rem;
`

export const H5 = styled.h5`
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'text'])};
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.05rem;
`

export const H6 = styled.h6`
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'text'])};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.4;
  letter-spacing: 0;
`

export const P = styled.p`
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'text'])};
  font-weight: 400;
  font-size: 1.6rem;
`

export const A = styled.a`
  color: ${path(['theme', 'color', 'primary'])};
  font-family: ${path(['theme', 'fontFamily'])};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  text-decoration: none;

  &:visited {
    color: ${path(['theme', 'color', 'primary'])};
  }

  &:hover {
    text-decoration: underline;
  }
`

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  A,
}
