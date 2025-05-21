import { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const FirstStyledComponent = styled.h1`
  color: red;
    border: 1px solid green;
    background-color: gray;
`;

const Handlestyledcomponent = () => {
    return (
        <div>


            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>

            <h1>
                Example heading <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
                Example heading <Badge bg="secondary">New</Badge>
            </h2>
            <h3>
                Example heading <Badge bg="secondary">New</Badge>
            </h3>
            <h4>
                Example heading <Badge bg="secondary">New</Badge>
            </h4>
            <h5>
                Example heading <Badge bg="secondary">New</Badge>
            </h5>
            <h6>
                Example heading <Badge bg="secondary">New</Badge>
            </h6>



        </div>
    );
};

export default Handlestyledcomponent;
