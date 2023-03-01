import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { RestaurantsDataGrid } from './RestaurantsDataGrid';
export const Main = () => {

  return (
    <div className="App" style={{height:"100vh", width:"100vw"}}>

      <AppBar position="absolute" >
        <Toolbar
          sx={{
            gap: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Welcome to the Serverless E-Commerce Store!
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack>

      <div style={{ height: "50px" }}></div>
        <div className="container">
          <RestaurantsDataGrid/>
        </div>
      </Stack>
    </div>
  );
}

