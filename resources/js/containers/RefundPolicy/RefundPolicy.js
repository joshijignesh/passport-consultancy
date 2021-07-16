import React, { Fragment } from 'react'; 
import Typography from '@material-ui/core/Typography'; 
import Layout from '../../hoc/Layout/Layout';
import SectionHead from '../../components/UI/SectionHead/SectionHead'; 
import Box from '@material-ui/core/Box';

const refundPolicy = (props) => {

    return (
        <Fragment>
            <Typography color="primary" variant="h4" component="h1" align="center" style={{ marginBottom:'20px' }}>REFUND POLICY</Typography>
            <SectionHead>Refund of payment received</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    For the passport services that are given to you,ind-seva.com, will only accept refunds if the service is not provided.ind-seva.com, reserves the right to determine a fair value of the product on return and the same shall be binding on both parties. The refund process will be initiated once we confirmation of the services not provided. In case of refund request accepted, amount will be refunded (20% deduction) in the same mode you have paid.
                </Typography>
            </Box>
            <SectionHead>Refund request</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    Refund request can be send at support@ind-seva.com. Refund request can be made within 5 days of online application made with valid reason. Standard deduction should be applied if you dont have valid reason.
                </Typography>
            </Box>
            <SectionHead>Cancellation of application</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    You cannot cancel the application once processed from our side. No refund will be provided once the application is proceed or done.
                </Typography>
            </Box>
            <SectionHead>Issuance of passport</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    Passport applied, will be delivered within 30 to 45 days at the same address provided in the application form.
                </Typography>
            </Box>
            <SectionHead>Clarification about application</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    If you have any query about application process, you can write us mail support@ind-seva.com in case we need any additional clarification about your passport application, our team will reach you by email or call.
                </Typography>
            </Box>
            <SectionHead>Force majeure</SectionHead>
            <Box style={{ margin: '20px 0' }}>
                <Typography>
                    ind-seva.com shall not be considered in breach of its satisfaction guarantee policy or default under any terms of service, and shall not be liable to the client for any cessation, interruption, or delay in the performance of its obligations by reason of earthquake, flood, fire, storm, lightning, drought, landslide, hurricane, cyclone, typhoon, tornado, natural disaster, act of god or the public enemy, epidemic, famine or plague, action of a court or public authority, change in law, explosion, war, terrorism, armed conflict, labor strike, lockout, boycott or similar event beyond our reasonable control, whether foreseen or unforeseen (each a "Force majeure event").
                </Typography>
            </Box>  
        </Fragment>
    );
}

export default refundPolicy;