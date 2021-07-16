import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import Navigation from '../../components/Navigation/Navigation'; 
import Ticker from '../../components/Ticker/Ticker';
import Footer from '../../components/Footer/Footer';

const layout = (props) => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Navigation />
            <Ticker/>
            <Container component="main" style={{ margin: '1rem auto' }}>
                 { props.children }
            </Container> 
            <Footer/>
        </ThemeProvider>
    );
}

export default layout;