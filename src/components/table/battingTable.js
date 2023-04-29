import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Desc, Runs, Balls, fours,sixs,SR,Team,innings) {
  return { name, Desc, Runs, Balls, fours,sixs,SR,Team,innings};
}



export default function BattingTable(props) {
    
    const rows = [ ];
    for(let i=0;i<props.data.length;i++){
        // rows.push(createData())
        rows.push(createData(props.data[i][0],props.data[i][1],props.data[i][2],props.data[i][3],props.data[i][4],props.data[i][5],props.data[i][6],props.data[i][7],props.data[i][8]))
    }
    // console.log(rows)
  return (
    <>
    
    <TableContainer component={Paper}>
      {/* {props.data[18][6]} */}
    <h2 style={{fontSize:"16px",textAlign:"center",background:"#6f6f6f",color:"white",margin:"0px",padding:"10px 0px"}}>{props.team} Innings </h2>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{background:"#ecebeb",color:"white"}}>
            <TableCell style={{color:"black"}} >Batter</TableCell>
            <TableCell align="right" style={{color:"black"}}>Desc</TableCell>
            <TableCell align="center" style={{color:"black"}}>Runs&nbsp;</TableCell>
            <TableCell align="center" style={{color:"black"}}>Balls&nbsp;</TableCell>
            <TableCell align="center" style={{color:"black"}}>4s&nbsp;</TableCell>
            <TableCell align="center" style={{color:"black"}}>6s&nbsp;</TableCell>
            <TableCell align="center" style={{color:"black"}}>SR&nbsp;</TableCell>
            <TableCell align="center" style={{color:"black"}}>Team&nbsp;</TableCell>
            <TableCell align="center" style={{color:"black"}}>innings&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (

          

    ( row.Team=== props.teamNum && <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:row.name==="TOTAL"?"black":"blue",fontWeight:row.name==="TOTAL"?"600":""}} component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.Desc}</TableCell>
              <TableCell style={{color:"black",fontWeight:"600"}} align="center">{row.Runs}</TableCell>
              <TableCell align="center">{row.Balls}</TableCell>
              <TableCell align="center">{row.fours}</TableCell>
              <TableCell align="center">{row.sixs}</TableCell>
              <TableCell align="center">{row.SR}</TableCell>
              <TableCell align="center">{row.Team}</TableCell>
              <TableCell align="center">{row.innings}</TableCell>

            </TableRow>)
          ))}
        </TableBody>
      </Table>
    </TableContainer>

{/* <TableContainer component={Paper} sx={{margin:"10px"}}>
<h2 style={{textAlign:"center"}}>Team 2</h2>
      <Table sx={{ minWidth: 650 ,marginTop:"10px"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{background:"#6f6f6f",color:"white"}}>
            <TableCell style={{color:"white"}} >Name</TableCell>
            <TableCell align="right" style={{color:"white"}}>Desc</TableCell>
            <TableCell align="center" style={{color:"white"}}>Runs&nbsp;</TableCell>
            <TableCell align="center" style={{color:"white"}}>Balls&nbsp;</TableCell>
            <TableCell align="center" style={{color:"white"}}>4s&nbsp;</TableCell>
            <TableCell align="center" style={{color:"white"}}>6s&nbsp;</TableCell>
            <TableCell align="center" style={{color:"white"}}>SR&nbsp;</TableCell>
            <TableCell align="center" style={{color:"white"}}>Team&nbsp;</TableCell>
            <TableCell align="center" style={{color:"white"}}>innings&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (

          
( row.Team===2 &&
     <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:"blue"}} component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.Desc}</TableCell>
              <TableCell style={{color:"black",fontWeight:"600"}} align="center">{row.Runs}</TableCell>
              <TableCell align="center">{row.Balls}</TableCell>
              <TableCell align="center">{row.fours}</TableCell>
              <TableCell align="center">{row.sixs}</TableCell>
              <TableCell align="center">{row.SR}</TableCell>
              <TableCell align="center">{row.Team}</TableCell>
              <TableCell align="right">{row.innings}</TableCell>

            </TableRow>)
          ))}
        </TableBody>
      </Table>
</TableContainer> */}
    
    </>
  );
}