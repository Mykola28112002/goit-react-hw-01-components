import styled from 'styled-components';

export const Wrapper = styled.section`
    text-align: center;
    
    display: inline-flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[5]}px;
    width: 100%;
    max-width: 400px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    background-color: #fff;
    border-radius: 6px;
    
`;
export const Label = styled.span`
  font-size: 20px;
`;
export const List = styled.ul`
  font-size: 20px;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  color: ${p => p.theme.white};
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 5px;
  padding: 10px 0;
`;


export const H2 = styled.span`
  color: slategrey;
  font-size: 35px;
  padding: 40px 0;  
`;

