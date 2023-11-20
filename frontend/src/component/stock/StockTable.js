import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import Label from 'src/components/label';
import Iconify from '../Iconify';
import {Table, TableHead} from "@mui/material";
import {Label} from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility"
import {Link} from "react-router-dom";
import * as React from "react";

// ----------------------------------------------------------------------

export default function UserTableRow() {
    const [open, setOpen] = useState(null);

    // const handleOpenMenu = (event) => {
    //     setOpen(event.currentTarget);
    // };
    //
    // const handleCloseMenu = () => {
    //     setOpen(null);
    // };
    const [stocks,setStocks] = useState([])
    const editActive = (id,number)=>{
        stocks[number].is_active = !stocks[number].is_active
        setStocks([...stocks])
        fetch(`http://localhost:3030/stock/${id}`,{
            method:'PATCH',
            mode:"cors",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                is_active :stocks[number].is_active
            })
        })
    }
    useEffect(()=>{
        fetch('http://localhost:3030/stock',{
            method:"GET",
            mode:"cors"
        }).then(res=>res.json())
            .then(data=>setStocks(data))
    },[])
    return(
        <Table>
            <TableHead>
                <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2" noWrap>
                            Полное имя
                        </Typography>
                    </Stack>
                </TableCell>
                <TableCell>Компания</TableCell>
                <TableCell>Участвует в акциях</TableCell>
                <TableCell>Посмотреть</TableCell>
            </TableHead>
            {stocks.map((stock,number)=>
            <TableRow hover tabIndex={-1} role="checkbox">


                <TableCell>{stock.company??"Компания"}</TableCell>
                <TableCell>{stock.companyEng??"КомпанияENG"}</TableCell>
                 <TableCell>
                   {/*<Label color={(stock.is_active === 'banned' && 'error') || 'success'}>{stock.is_active}</Label>*/}
                    <Checkbox defaultChecked={stock.is_active} onChange={()=>{editActive(stock.id,number)}}></Checkbox>
                 </TableCell>
                <TableCell>
                <Link to={`/graph/${stock.id}`}>
                    <VisibilityIcon></VisibilityIcon>
                    Show
                </Link>
                </TableCell>
                {/*<Popover*/}
                {/*    open={!!open}*/}
                {/*    anchorEl={open}*/}
                {/*    onClose={handleCloseMenu}*/}
                {/*    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}*/}
                {/*    transformOrigin={{ vertical: 'top', horizontal: 'right' }}*/}
                {/*    PaperProps={{*/}
                {/*        sx: { width: 140 },*/}
                {/*    }}*/}
                {/*>*/}
                {/*    /!*<MenuItem onClick={handleCloseMenu}>*!/*/}
                {/*    /!*</MenuItem>*!/*/}

                {/*</Popover>*/}


                {/*<TableCell align="right">*/}
                {/*    <IconButton onClick={handleOpenMenu}>*/}
                {/*        <Iconify icon="eva:more-vertical-fill" />*/}
                {/*    </IconButton>*/}
                {/*</TableCell>*/}
            </TableRow>
                )}
        </Table>)
}