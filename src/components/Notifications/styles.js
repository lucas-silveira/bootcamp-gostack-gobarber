import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: none;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 8px;
        height: 8px;
        background-color: #ff892e;
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')}
  position: absolute;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  width: 260px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px 5px;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    padding-top: 15px;
    margin-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    color: ${lighten(0.2, '#7159c1')};
    background: none;
    font-size: 12px;
    padding: 0 5px;
    margin: 0 5px;
    border: none;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #ff892e;
        border-radius: 50%;
        vertical-align: middle;
      }
    `}
`;
