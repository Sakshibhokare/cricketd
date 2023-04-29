import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,Overs,Maidens,Runs,Wickets,Econ,Dots,fours,sixs,Wd,Nb,Team,innings) {
  return {name,Overs,Maidens,Runs,Wickets,Econ,Dots,fours,sixs,Wd,Nb,Team,innings};
}



export default function BallingTable(props) {
    console.log(props)
    const rows = [ ];
    for(let i=0;i<props.data.length;i++){
        // rows.push(createData())
        rows.push(createData(props.data[i][0],props.data[i][1]
            ,props.data[i][2],
            props.data[i][3],props.data[i][4],
            props.data[i][5],props.data[i][6],
            props.data[i][7],props.data[i][8]
            ,props.data[i][9],props.data[i][10],props.data[i][11]
            ,props.data[i][12]))
    }
    // console.log(rows)
  return (
    <>
    <TableContainer component={Paper}>
    {/* <h2 style={{fontSize:"16px",textAlign:"center",background:"#6f6f6f",color:"white",margin:"0px",padding:"10px 0px"}}>{props.team} </h2> */}
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{background:"rgb(18 16 49 / 94%)",color:"white"}}>
            <TableCell style={{color:"white"}} >Bowler</TableCell>
            <TableCell style={{color:"white"}} align="center">Overs</TableCell>
            <TableCell style={{color:"white"}} align="center">Maidens&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">Runs&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">Wickets&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">Econ&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">Dots&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">4s&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">6s&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">Wd&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">Nb&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">Team&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="center">innings&nbsp;</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            
           ( row.Team===props.teamNum && <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:"blue"}} key={index} component="th" scope="row">{row.name}</TableCell>
              <TableCell key={index} align="center">{row.Overs}</TableCell>
              <TableCell key={index} align="center">{row.Maidens}</TableCell>
              <TableCell key={index} align="center">{row.Runs}</TableCell>
              <TableCell style={{color:"black",fontWeight:"600"}} key={index} align="center">{row.Wickets}</TableCell>
              <TableCell key={index} align="center">{row.Econ}</TableCell>
              <TableCell key={index} align="center">{row.Dots}</TableCell>
              <TableCell key={index} align="center">{row.fours}</TableCell>
              <TableCell key={index} align="center">{row.sixs}</TableCell>
              <TableCell key={index} align="center">{row.Wd}</TableCell>
              <TableCell key={index} align="center">{row.Nb}</TableCell>
              <TableCell key={index} align="center">{row.Team}</TableCell>
              <TableCell key={index} align="center">{row.innings}</TableCell>
              


            </TableRow>
           )   
                  ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* <TableContainer component={Paper} sx={{margin:"10px"}}>
      <h2>Team 2 Bowling</h2>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{background:"#6f6f6f",color:"white"}}>
            <TableCell style={{color:"white"}} >Name</TableCell>
            <TableCell style={{color:"white"}} align="right">Overs</TableCell>
            <TableCell style={{color:"white"}} align="right">Maidens&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">Runs&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">Wickets&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">Econ&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">Dots&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">4s&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">6s&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">Wd&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">Nb&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">Team&nbsp;</TableCell>
            <TableCell style={{color:"white"}} align="right">innings&nbsp;</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            
           ( row.Team===2 && <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:"blue"}} key={index} component="th" scope="row">{row.name}</TableCell>
              <TableCell key={index} align="right">{row.Overs}</TableCell>
              <TableCell key={index} align="right">{row.Maidens}</TableCell>
              <TableCell key={index} align="right">{row.Runs}</TableCell>
              <TableCell style={{color:"black",fontWeight:"600"}} key={index} align="right">{row.Wickets}</TableCell>
              <TableCell key={index} align="right">{row.Econ}</TableCell>
              <TableCell key={index} align="right">{row.Dots}</TableCell>
              <TableCell key={index} align="right">{row.fours}</TableCell>
              <TableCell key={index} align="right">{row.sixs}</TableCell>
              <TableCell key={index} align="right">{row.Wd}</TableCell>
              <TableCell key={index} align="right">{row.Nb}</TableCell>
              <TableCell key={index} align="right">{row.Team}</TableCell>
              <TableCell key={index} align="right">{row.innings}</TableCell>
              


            </TableRow>
           )   
                  ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    </>
    
  );
}