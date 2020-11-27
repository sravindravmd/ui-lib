import styled from 'styled-components'
import { theme } from '../../shared'

export const StyledColorContainer = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${theme.typography.caption};
  color: ${theme.palette.brand.primary.gray};
  margin: 20px;
`

export const StyledColor = styled.div`
  width: 41px;
  height: 41px;
  border-radius: 100px;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  border: 1px solid ${theme.palette.brand.primary.gray};
`

export const StyledColorsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
