import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SideDrawer from "./components/drawer/SideDrawer"
import axios from "axios";
import "./App.css";

const countriesURL = "https://restcountries.com/v2/all";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);

  const classes = useStyles();

  const getCountriesWithAxios = async () => {
    const response = await axios.get(countriesURL);
    setCountriesData(response.data);
  };
  const showMoreDetails = useCallback((country) => {
    console.log(country);

    setShowDrawer(true);
  });

  useEffect(() => {
    getCountriesWithAxios();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Flag</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Capital</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Population</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Region</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countriesData.map((country, index) => (
                  <TableRow key={index} onClick={(country) => showMoreDetails(country)}>
                    <TableCell component="th" scope="row">ss
                      {country.capital}
                    </TableCell>
                    <TableCell align="right">
                      <img src={country.flags.svg} alt="" width="32px" />
                    </TableCell>
                    <TableCell align="right">{country.name}</TableCell>
                    <TableCell align="right">{country.population}</TableCell>
                    <TableCell align="right">{country.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {showDrawer && <SideDrawer open={showDrawer} data={countriesData} onClose={() => setShowDrawer(false)} />}
        </Grid>

      </Grid>
    </>
  );
}

export default App;
