import styled, { css } from "styled-components"

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "outlined"
    active?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
width: 86px;
height: 30px;
top: 298px;
left: 20px;
border-radius: 5px;

 

${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
border: 2px solid #4E71FE;
color:#4E71FE;
background-color: transparent;

/* &:hover {
    background-color: #2f0101;
} */
`}

${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    border: 2px solid #4E71FE;
    background-color: ${props => props.color || "rgb(197, 111, 6)"};
    color: #ffffff;

    /* &:hover {
    background-color: #25a9dd;
 } */
`
}

${props => props.active && css<StyledBtnPropsType>`
    
`}

`