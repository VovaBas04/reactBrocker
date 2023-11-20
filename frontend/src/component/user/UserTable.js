import {useEffect, useRef, useState} from 'react';
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
import {Input, Table, TableHead} from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";

// ----------------------------------------------------------------------

export default function UserTable() {
    const [open, setOpen] = useState(null);
    const [brockers,setBrockers] = useState([])
    const [edit,setEdit] = useState([])
    let inputDef= useRef(null)
    // let deleteButton = useRef(null)
    // const handleOpenMenu = (event) => {
    //     setOpen(event.currentTarget);
    // };
    const editToggle =(event)=>{
        let id = event.currentTarget.id
        let number = event.currentTarget.value
        console.log(id,edit)
        if (edit[number]) {
            fetch(`http://localhost:3030/brocker/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    money:Number(inputDef.current.children[0].value)
                }),
                mode:"cors"
            })
            brockers[number].money = Number(inputDef.current.children[0].value)
        }
        edit[number] = !edit[number]
        setEdit([...edit])
    }
    const deleteRow=(id,index)=>{
        console.log(id,index)
        fetch(`http://localhost:3030/brocker/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            mode:"cors"
        }).then(()=>{
            brockers.splice(index,1)
            setBrockers([...brockers])
        })
    }
    const handleCloseMenu = () => {
        setOpen(null);
    };
    useEffect(()=> {
        fetch('http://localhost:3030/brocker', {
            method: 'GET',
            mode: "cors",
        }).then(res => res.json())
            .then(data => {
                console.log("Дата", data);
                setBrockers(data)
                setEdit(Array(data.length).fill(false))
            })
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
                <TableCell>Деньги</TableCell>
                <TableCell>Опции</TableCell>
            </TableHead>
            {brockers.map((brocker,index)=>
                <TableRow hover tabIndex={-1} role="checkbox">
                    <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                                {brocker.fullName ?? "Вова"}
                            </Typography>
                        </Stack>
                    </TableCell>


                    <TableCell>{brocker.company ?? "Компания"}</TableCell>

                    {edit[index]?<TableCell><Input name="money" type="number" required={true} defaultValue={brocker.money} ref={inputDef}></Input></TableCell>:<TableCell>{brocker.money ?? 123}</TableCell>}
                        <MenuItem onClick={handleCloseMenu}>
                            <Iconify icon="eva:edit-fill" sx={{mr: 2}}/>
                            <Button onClick={editToggle} id={brocker.id} value={index}>Изменить </Button>
                        </MenuItem>

                        <MenuItem onClick={handleCloseMenu} sx={{color: 'error.main'}}>
                            <Iconify icon="eva:trash-2-outline" sx={{mr: 2}}/>
                            <Button onClick={()=>{deleteRow(brocker.id,index)}}>Удалить </Button>
                        </MenuItem>

                </TableRow>)
            ??<Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                    No users for this project yet
                </Typography>}
        </Table>)
}