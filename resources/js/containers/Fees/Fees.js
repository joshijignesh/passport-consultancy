import React, { Component, Fragment } from 'react';  
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import SectionHead from '../../components/UI/SectionHead/SectionHead';
import axios from '../../shared/axios';
import Loading from '../../components/UI/Loading/Loading';

 
class Fees extends Component {
    state = {
        feesdata:null
    }
    
    componentDidMount(){
        axios.get('/settings')
        .then(res => {
           this.setState({feesdata: res.data});
        }).catch(err => {

        });
    }

    render() {
        const classes = this.props.classes;
        return (
            <Fragment> 
                <SectionHead>Fees Structure for New / Fresh Passport Application</SectionHead> 
                {
                    this.state.feesdata ? (
                        <Fragment>
                            <Table size="small" style={{ margin: "50px 0" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Age of Applicant</TableCell>
                                        <TableCell>Fees for Normal Application</TableCell>
                                        <TableCell>Additional Fees for Tatkal Application</TableCell>
                                        <TableCell>Fees Upto 36 Pages</TableCell>
                                        <TableCell>Additional Fees for Extra Pages (36+24=60)</TableCell>
                                        <TableCell>Consultancy Fees</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody> 
                                    <TableRow hover> 
                                        <TableCell>Below 18</TableCell> 
                                        <TableCell>{this.state.feesdata.basic_fees}</TableCell> 
                                        <TableCell>2000</TableCell> 
                                        <TableCell>No Fees</TableCell> 
                                        <TableCell>Not Applicable</TableCell> 
                                        <TableCell>{this.state.feesdata.consultancy_fees}</TableCell> 
                                    </TableRow>
                                    <TableRow hover> 
                                        <TableCell>Above 18</TableCell> 
                                        <TableCell>{this.state.feesdata.basic_fees}</TableCell> 
                                        <TableCell>2000</TableCell> 
                                        <TableCell>No Fees</TableCell> 
                                        <TableCell>{this.state.feesdata.additional_page_fees}</TableCell> 
                                        <TableCell>{this.state.feesdata.consultancy_fees}</TableCell> 
                                    </TableRow> 
                                </TableBody>
                            </Table>
                            <Divider style={{ width: '80%', margin:'50px auto' }} light/>
                            <SectionHead>Fees Structure for Reissues Passport Application</SectionHead> 
                            <Table size="small" style={{ margin: "20px 0" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Age of Applicant</TableCell>
                                        <TableCell>Fees for Normal Application</TableCell>
                                        <TableCell>Additional Fees for Tatkal Application</TableCell>
                                        <TableCell>Fees Upto 36 Pages</TableCell>
                                        <TableCell>Additional Fees for Extra Pages (36+24=60)</TableCell>
                                        <TableCell>Lost / Damaged but Not Expired</TableCell>
                                        <TableCell>Consultancy Fees</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody> 
                                    <TableRow hover> 
                                        <TableCell>Below 18</TableCell> 
                                        <TableCell>{this.state.feesdata.basic_fees}</TableCell> 
                                        <TableCell>2000</TableCell> 
                                        <TableCell>No Fees</TableCell> 
                                        <TableCell>Not Applicable</TableCell> 
                                        <TableCell>{this.state.feesdata.lost_damaged_fees}</TableCell> 
                                        <TableCell>{this.state.feesdata.consultancy_fees}</TableCell> 
                                    </TableRow>
                                    <TableRow hover> 
                                        <TableCell>Above 18</TableCell> 
                                        <TableCell>{this.state.feesdata.basic_fees}</TableCell> 
                                        <TableCell>2000</TableCell> 
                                        <TableCell>No Fees</TableCell> 
                                        <TableCell>{this.state.feesdata.additional_page_fees}</TableCell> 
                                        <TableCell>{this.state.feesdata.lost_damaged_fees}</TableCell> 
                                        <TableCell>{this.state.feesdata.consultancy_fees}</TableCell> 
                                    </TableRow> 
                                </TableBody>
                            </Table> 
                        </Fragment>
                    ) : <Loading isOpen={!this.state.feesdata} loadingText="Getting data..."/>
                } 
            </Fragment>
        );
    }
}

export default Fees;
