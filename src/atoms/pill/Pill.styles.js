import styled from 'styled-components'
import theme from '../../shared/theme'

export const StyledPill = styled.span`
  font-family: ${theme.typography.link.fontFamily};
  font-size: ${theme.typography.caption.fontSize};
  line-height: 0.87875rem;
  letter-spacing: 0.075em;
  background: ${({ background }) => background && `${background}`};
  color: ${({ txtcolor }) => txtcolor && `${txtcolor}`};
  padding: 6px 16px 6px 16px;
  border-radius: 16px;
  text-transform: uppercase;
`

export const pillTypes = {
  success: {
    background: theme.palette.ui.cta.green,
    txtcolor: theme.palette.brand.primary.white,
  },
  warning: {
    background: theme.palette.ui.cta.yellow,
    txtcolor: theme.palette.brand.primary.charcoal,
  },
  alert: {
    background: theme.palette.ui.cta.red,
    txtcolor: theme.palette.brand.primary.white,
  },
}
