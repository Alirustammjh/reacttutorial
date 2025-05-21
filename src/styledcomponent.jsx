import { useState } from 'react';
import styled from 'styled-components';

const FirstStyledComponent = styled.h1`
  color: red;
    border: 1px solid green;
    background-color: gray;
`;

const Handlestyledcomponent = () => {
    return (
        <div>
            <FirstStyledComponent>Start Here</FirstStyledComponent>
        </div>
    );
};

export default Handlestyledcomponent;
