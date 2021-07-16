import React from 'react';
import Typography from '@material-ui/core/Typography';
import  './Ticker.css';

const ticker = (props) => {

    return ( 
        <div className="Root">
            <div className="TickerWrap">
                <div className="Ticker">
                    <div className="TickerItem">
                        <Typography color="secondary">
                            Please note that this website is owned by a private organisation & Not associated with Ministry of External Affairs (MEA)
                        </Typography>
                    </div>
                </div>
            </div> 
        </div> 
    );
}

export default ticker;