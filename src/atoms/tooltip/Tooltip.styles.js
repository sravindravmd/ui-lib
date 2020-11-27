import styled from 'styled-components'
import { theme } from '../../shared'

const StyledBaseTooltip = styled.div`
  font-family: ${theme.typography.caption.fontFamily};
  display: inline-block;
  position: absolute;
  text-align: left;
  width: 160px;
  padding: 8px;
  background: ${theme.palette.brand.primary.charcoal};
  border-radius: 1px;
  color: white;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.2s ease-in-out;
  z-index: ${theme.zIndex.tooltip};
  font-size: ${theme.typography.link.fontSize};
  line-height: ${theme.typography.kicker.lineHeight};
  pointer-events: none;
  :before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    z-index: ${theme.zIndex.tooltip};
  }
`

export const StyledTooltip = styled(StyledBaseTooltip)`
  width: auto;
  padding: 0 8px;
  white-space: nowrap;
  left: ${({ x }) => x && `${x}px`};
  top: ${({ y }) => y && `${y}px`};
`

export const Title = styled.div`
  font-size: ${theme.typography.kicker.fontSize};
  line-height: ${theme.typography.kicker.lineHeight};
  text-transform: uppercase;
  letter-spacing: 0.075em;
  margin-bottom: 4px;
`

export const Text = styled.div`
  font-size: ${theme.typography.kicker.fontSize};
  line-height: ${theme.typography.caption.lineHeight};
`

const StyledRightTooltip = styled(StyledBaseTooltip)`
  left: calc(100% + 12px);
  bottom: 0;
  :before {
    left: -11px;
    bottom: 8px;
    border-right-color: ${theme.palette.brand.primary.charcoal};
  }
`
const StyledBottomTooltip = styled(StyledBaseTooltip)`
  top: calc(100% + 12px);
  right: 0;
  :before {
    right: 8px;
    top: -11px;
    border-bottom-color: ${theme.palette.brand.primary.charcoal};
  }
`
export const Tooltip_types = {
  right: StyledRightTooltip,
  bottom: StyledBottomTooltip,
}
