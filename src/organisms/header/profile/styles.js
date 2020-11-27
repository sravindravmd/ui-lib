import styled from 'styled-components'
import { theme } from '../../../shared'

export const StyledUserAction = styled.div`
  .profile {
    .user-actions {
      display: flex;
      align-items: center;
      cursor: default;

      .avatar {
        width: 28px;
        height: 28px;
        background-color: #f7f7f7;
        border-radius: 50%;
        overflow: hidden;

        img {
          max-width: 100%;
          height: auto;
        }
      }
      .user-name {
        font-size: 14px;
        padding-left: 22px;
      }
    }
    .content {
      right: 0px;
      left: auto !important;
      transform: unset !important;

      .arrows {
        left: 61%;
      }
    }
  }
`

export const StyledPopoverContent = styled.div`
  padding: 36px 36px 15px;
  box-sizing: border-box;
  font-family: 'Gilroy-Regular';

  .header {
    display: flex;
    padding: 0px 0px 30px;

    .avatar {
      width: 40px;

      img {
        max-width: 100%;
        height: auto;
      }

      span {
        display: block;
        background-color: ${theme.palette.ui.neutral.grey2};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        overflow: hidden;
      }
    }
    .title {
      padding-left: 20px;

      strong {
        font-size: 18px;
        line-height: 150%;
        color: ${theme.palette.brand.primary.charcoal};
        font-family: 'Gilroy-Medium';
      }
      p {
        margin: 0px;
        color: ${theme.palette.brand.primary.gray};
        letter-spacing: 0.02em;
        font-size: 13px;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      a {
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-decoration: none;
        color: ${theme.palette.brand.primary.charcoal};
        padding: 10px 0px;
        display: block;
      }
    }
  }
`
