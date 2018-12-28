import { keyframes } from 'styled-components'

export default {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `,
  spin: keyframes`
    to { -webkit-transform: rotate(360deg); }
 `,
}
