import styled from 'styled-components';

export const Container = styled.div`
      background-color: lightblue;
      height:380px;
      padding: 0;
      margin: 0;  
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
`;
export const Item = styled.div`
    background-color: white;
    padding: 5px;
    height: 200px;
    width: 150px;
    margin: 10px;
    line-height: 20px;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
    margin: 15px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    box-shadow: 0px 5px 25px #aaa;
    border-radius: 10px;
`;

export const Picture = styled.img.attrs({
    src: (props)=> props.src,
})`
    width: 100px;
    height: 150px;
`;

export const Button = styled.button`
    color: white;
    background-color: #6AA84F;
    zxfont-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #6AA84F;
    border-radius: 3px;
`;

export const Description = styled.p`
    padding-bottom:15px;
`;