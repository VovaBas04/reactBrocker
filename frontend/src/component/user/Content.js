import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Iconify from "../Iconify";
import Link from "@mui/material/Link";
import UserTable from "./UserTable";
import StockTable from '../stock/StockTable';
export default function Content() {
    return (
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            {/*<Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>*/}
            <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
                <Link href="/signup">Новый польователь</Link>
            </Button>
            {/*</Button>*/}
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
            </AppBar>
            <UserTable></UserTable>
        </Paper>
    );
}