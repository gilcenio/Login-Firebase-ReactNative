import styled, { css } from 'styled-components/native';

interface TouchableOpacityProps {
  backgroundcolor: string;
}

interface TextProps {
  title: string;
  marginbottom: string;
  fontsize: string;
  margintop: string;
}

export const View = styled.View`
  flex: 1;
  background-color: #e5e3dd;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  border-radius: 50px;
  width: 319px;
  margin-bottom: 22px;
  height: 63px;
  background-color: #fff;
  padding-left: 30px;
`;

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
  border-radius: 50px;
  width: 319px;
  height: 63px;
  align-items: center;
  margin-bottom: 7px;
  justify-content: center;
  ${props =>
    props.backgroundcolor &&
    css`
      background-color: ${props.backgroundcolor};
    `}
`;

export const Text = styled.Text<TextProps>`
  ${props =>
    props.title &&
    css`
      color: ${props.title};
    `}
  ${props =>
    props.marginbottom &&
    css`
      margin-bottom: ${props.marginbottom};
    `}
  ${props =>
    props.fontsize &&
    css`
      font-size: ${props.fontsize};
    `}
  ${props =>
    props.margintop &&
    css`
      margin-top: ${props.margintop};
    `}
`;
