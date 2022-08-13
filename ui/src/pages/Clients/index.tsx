import { memo, useContext, useEffect } from "react";
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { StateContext } from "../../store/DataProvider";
import Page from "../../components/Page";
import ClientTable from "./ClientTable";
import { getClients } from "../../services/api";
import ClientDetails from "./ClientDetails";
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Clients() {
  const { state, dispatch } = useContext(StateContext);
  const { clients } = state;

  useEffect(() => {
    getClients().then((clients) =>
      dispatch({ type: "FETCH_ALL_CLIENTS", data: clients })
    );
  }, [dispatch]);

  return (
    <Page>
      <Typography variant="h4" sx={{ textAlign: "start" }}>
        Clients
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <FormControl fullWidth sx={{ m: 1 }} size="small">
          <InputLabel htmlFor="outlined-adornment-search">Search for clients</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            // value={values.amount}
            // onChange={handleChange('amount')}
            endAdornment={<InputAdornment position="end"> <SearchIcon></SearchIcon> </InputAdornment>}
            label="Search for clients"
          />
        </FormControl>
        </Grid>
        <Grid item xs={4}>
            <ClientDetails />
        </Grid>
      </Grid>
      <Paper sx={{ margin: "auto", marginTop: 3 }}>
        <ClientTable clients={clients} />
      </Paper>
    </Page>
  );
}

export default memo(Clients);
