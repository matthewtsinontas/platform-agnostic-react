import React, { Component } from 'react';
import { TitleWrapper, TitleText } from './Styles';

const Title = ({ text }) => (
    <TitleWrapper>
        <TitleText>{text}</TitleText>
    </TitleWrapper>
)

export default Title;
