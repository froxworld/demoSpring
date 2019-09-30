import React from 'react'
import logo from '../../picture/logo.svg'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import HeaderMenu from "./HeaderMenu";

const useStyles = makeStyles(theme => ({
    root: {
        width: '120%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

class HeaderCenter extends React.Component{

    render() {
        return  (
            <div>
            <Paper className={"ciucouc"}>
            <Table className={"cjdjs"}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"><img src={logo} className="App-logo" alt="climbing Zone logo"/></TableCell>
                        <TableCell align="center"> <HeaderMenu/></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            </Paper>
            </div>

        )
    }
}
export default HeaderCenter;