import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: green,
  },
});
