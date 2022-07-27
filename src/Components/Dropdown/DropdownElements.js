import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownItem= styled.li`
    background: #186db6;
    cursor: pointer;

    &:hover{
        background: #0d5da3;
    }
`
export const DropdownLink=styled(Link)`
    display: block;
    width: 100;
    height: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
`