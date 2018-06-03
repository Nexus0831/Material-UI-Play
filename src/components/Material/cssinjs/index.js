import styled, { injectGlobal } from 'styled-components';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export const CardContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

export const HeaderContainer = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / 2;
`;

export const MyButton = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  // backgroundColor: 'red',
  border-radius: 3;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);
`;

export const BaseContainer = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 20px 1fr 20px;
`;

export const globalStyles = injectGlobal`
  #material {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 20px 1fr 20px;
    height: 100%;
    
    @media (max-width: 619px) {
        grid-template-rows: 70px 1fr;
    }
  }
`;