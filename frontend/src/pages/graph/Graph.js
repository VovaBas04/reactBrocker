import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GraphViews from "./graph-views";
import Navigator from "../../component/Navigator";
import Header from "../../component/Header";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Table, TableHead} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {store} from "../../redux";
export default function Graph() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    let {id} = useParams()
    let [stocks, setStocks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/stock/${id}`, {
            method: "GET",
            mode: "cors"
        }).then(
            res => res.json()
        ).then(
            (dataAny) => {
                console.log("price", dataAny.priceDate);
                setData(dataAny.priceDate)
                setStocks(dataAny.priceDate)
                setName(dataAny.company)
            })
    }, [data.length])
    useEffect(() => {
        console.log("Тут был", data)
        store.getState().socket.on('date', (date) => {
            console.log(data, date)
            let index = data.findIndex(item => item.date.substring(0, 2) == date.substring(8, 10))
            console.log("Инлекс", index, stocks)
            if (index === -1) {
                setStocks([...data])
                console.log("Потом", data)
            } else
                setStocks([...data.slice(index)])
        })},[stocks.length])
    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 5 }}>
                График акций
            </Typography>
            <Grid container spacing={3}>

                <Grid xs={12} md={6} lg={8}>
                    <GraphViews
                        title={name}
                        subheader="Стоимость в долларах"
                        chart={{
                            labels: stocks.map(item=>item.date.substring(3,5)+'/'+item.date.substring(0,2)+'/'+'20'+item.date.substring(6)),
                            series: [
                                {
                                    name: name,
                                    type: 'line',
                                    fill: 'solid',
                                    data: stocks.map(item=>item.open)
                                },
                            ],
                        }}
                    />
                </Grid>

            </Grid>
            <Table>
                <TableHead>
                    <TableCell>Дата</TableCell>
                    <TableCell>Цена</TableCell>
                </TableHead>
                {stocks.map((item)=>
                <TableRow hover tabIndex={-1} role="checkbox">
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.open}</TableCell>
                </TableRow>
            )}
            </Table>
        </Container>
    );
}
