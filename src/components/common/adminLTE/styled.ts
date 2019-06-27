import styled from 'vue-styled-components'

export const Layout = styled.div`
    height: auto;
    min-height: 100%;
`

export const BtnGroup = styled('div', { marginTop: String })`
    display: block; 
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    text-align: center;

    button {
        margin: 0 10px;
    }
`

export const Btn = styled.button`
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-image: none;
    border-radius: 3px;
    box-shadow: none;
    border: 1px solid transparent;

    &.btn-lg {
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
    }

    &.primary {
        color: #fff;
        background-color: #3c8dbc;
        border-color: #367fa9;
    }
    &.success {
        color: #fff;
        background-color: #00a65a;
        border-color: #008d4c;
    }
`

export const Section = styled.section`
    margin-bottom: 10px;
`

export const SearchAreaStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 30px;
`