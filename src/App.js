
import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Button, Avatar, Tabs, Tab, Grid, Paper } from '@mui/material';
import { Home, PieChart, Notifications, CardGiftcard, Menu, ChevronLeft } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


const drawerWidth = 240;

const Main = styled('main')(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: `-${drawerWidth}px`,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
  }),
}));

const App = () => {
  const [open, setOpen] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const sidebarItems = [
    { icon: <Home />, text: 'Home' },
    { icon: <PieChart />, text: 'Portfolio' },
    { icon: <PieChart />, text: 'Prices' },
    { icon: <CardGiftcard />, text: 'For you' },
    { icon: <CardGiftcard />, text: 'Earn rewards' },
    { icon: <Notifications />, text: 'Notifications' },
  ];

  const priceCorrelation = [
    { name: 'XRP', price: '$0.24', correlation: '89%' },
    { name: 'Ethereum', price: '$375.69', correlation: '85%' },
    { name: 'Dash', price: '$66.90', correlation: '68%' },
    { name: 'Algorand', price: '$0.31', correlation: '55%' },
    { name: 'Civic', price: '$0.0273', correlation: '45%' },
    { name: 'Numeraire', price: '$28.90', correlation: '39%' },
    { name: 'NEM', price: '$0.11', correlation: '-4%' },
    { name: 'Celsius', price: '$1.23', correlation: '-5%' },
  ];

  const data = {
    labels: ['1:34 PM', '5:44 PM', '9:54 PM', '2:05 AM', '6:15 AM', '10:25 AM'],
    datasets: [
      {
        label: 'BTC Price',
        data: [11000, 11200, 11100, 11400, 11300, 11459],
        fill: false,
        borderColor: '#3f51b5',
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'white', color: 'black' }}>
        <Toolbar>
          
          <IconButton onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}>
            {open ? <ChevronLeft /> : <Menu />}
          </IconButton>
          <Typography sx={{color:"blue",marginRight:"20px"}}>coinbase</Typography>
          <Typography variant="h6" noWrap component="div">
            Prices
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" color="primary" sx={{ mx: 1 }}>Buy / Sell</Button>
          <Button variant="outlined" color="primary" sx={{ mx: 1 }}>Send / Receive</Button>
          <Avatar sx={{ ml: 2 }}>R</Avatar>
          <Typography sx={{marginLeft:"5px"}}>Rowland</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Toolbar />
        <Box>
          <Box sx={{ display: 'flex', justifyContent:"space-between", alignItems: 'center', mb: 2 }}>
            <Box sx={{display:'flex'}}>
            <Avatar src="./images/bitcoin.png" sx={{ mr: 2 }} />
            <Typography variant="h5">Bitcoin BTC</Typography>
            </Box>
            <Button sx={{ ml: 2 }} variant="outlined" size="small">⭐ Watchlist</Button>
          </Box>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="tabs">
            <Tab label="Overview" />
            <Tab label="Wallet" />
            <Tab label="Vault" />
          </Tabs>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h4">$411,446.31 <Typography variant="caption" color="green">+0.97%</Typography></Typography>
                <Line data={data} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography>Market Cap: $212.2B</Typography>
                  <Typography>Volume (24h): $19.8B</Typography>
                  <Typography>Circulating Supply: 18.5M BTC</Typography>
                </Box>
              </Paper>
              <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6">About Bitcoin</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button size="small">Official website</Button>
                  <Button size="small">Whitepaper</Button>
                </Box>
              </Paper>
            </Grid>
            <Grid size={{xs:6,md:4}} >
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Price correlation with</Typography>
                <Divider sx={{ my: 2 }} />
                {priceCorrelation.map((coin, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}>
                    <Typography>{coin.name}</Typography>
                    <Typography>{coin.price} ({coin.correlation})</Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box>
  );
};

export default App;








// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Tabs, Tab,MenuItem,TextField, Box, Card, CardContent, Divider, IconButton, Avatar } from '@mui/material';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// // Sample Bitcoin Data
// const data = [
//   { time: '10:00 AM', price: 11400 },
//   { time: '10:30 AM', price: 11420 },
//   { time: '11:00 AM', price: 11460 },
//   { time: '11:30 AM', price: 11430 },
//   { time: '12:00 PM', price: 11470 },
// ];

// export default function BitcoinPage() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* Top Navbar */}
//       <AppBar position="static" color="default" elevation={1}>
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           {/* Left side - Logo */}
        
//           <Box sx={{ display: 'flex', gap: 2 }}>
//           <Typography variant="h5" sx={{ flexGrow: 1 , marginRight:"40px" }}>
//             Coinbase
//           </Typography>
//             <Button color="inherit">Home</Button>
//             <Button color="inherit">Portfolio</Button>
//             <Button color="inherit">Prices</Button>
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             <Button variant="contained">Trade</Button>
//             <Button variant="outlined">Send</Button>
//             <Button variant="outlined">Receive</Button>
//             <IconButton>
//               <NotificationsNoneIcon />
//             </IconButton>
//             <Avatar alt="User" src="/static/images/avatar/1.jpg" />
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Main Content */}
//       <Box sx={{ display: 'flex', p: 3, gap: 3 }}>
//         {/* Left Side - Bitcoin Info and Chart */}
//         <Box sx={{ flex: 2 }}>
//           {/* Bitcoin title */}
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <img
//               src="images/bitcoin.png" 
//               alt="Bitcoin Logo"
//               style={{ width: 32, height: 32, marginRight: 8 }}
//             />
//             <Typography variant="h4">
//               Bitcoin <Typography variant="caption">(BTC)</Typography>
//             </Typography>
//           </Box>

//           {/* Price and Change */}
//           <Typography variant="h3" gutterBottom>
//             $411,446.31 <Typography variant="subtitle1" color="green" component="span">+1.58%</Typography>
//           </Typography>

//           {/* Time Tabs */}
//           <Tabs value={0} sx={{ mb: 2 }}>
//             <Tab label="24H" />
//             <Tab label="1W" />
//             <Tab label="1M" />
//             <Tab label="1Y" />
//             <Tab label="ALL" />
//           </Tabs>

//           {/* Chart */}
//           <Card elevation={3}>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={data}>
//                   <XAxis dataKey="time" />
//                   <YAxis domain={['auto', 'auto']} />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="price" stroke="#1976d2" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>

//           {/* Metrics */}
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//             <Box>
//               <Typography variant="subtitle2">Market cap</Typography>
//               <Typography variant="body2">$211.4B</Typography>
//             </Box>
//             <Box>
//               <Typography variant="subtitle2">Volume (24 hours)</Typography>
//               <Typography variant="body2">$23.0B</Typography>
//             </Box>
//             <Box>
//               <Typography variant="subtitle2">Circulating supply</Typography>
//               <Typography variant="body2">18.5M BTC</Typography>
//             </Box>
//             <Box>
//               <Typography variant="subtitle2">Popularity</Typography>
//               <Typography variant="body2">#1 most held</Typography>
//             </Box>
//           </Box>
//         </Box>

//         {/* Right Side - Buy/Sell/Convert */}

//         <Box sx={{ flex: 1 , marginTop:"50px"}}>
//           <Card elevation={3} sx={{ borderRadius: 4 }}>
//             <CardContent>
//               {/* Tabs */}
//               <Tabs value={0} variant="fullWidth" textColor="primary" indicatorColor="primary">
//                 <Tab label="Buy" />
//                 <Tab label="Sell" />
//                 <Tab label="Convert" />
//               </Tabs>

//               <Divider sx={{ my: 2 }} />

//               {/* Amount */}
//               <Box sx={{ textAlign: 'center', mb: 2 }}>
//                 <Typography variant="h4" fontWeight="bold">$0</Typography>
//                 <Typography variant="body2" color="text.secondary">You can buy up to $25,000.00</Typography>
//               </Box>

//               {/* One time purchase button */}
//               <Button fullWidth variant="outlined" sx={{ textTransform: 'none', mb: 2 }}>
//                 One time purchase
//               </Button>

//               {/* Buy Bitcoin */}
//               <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Buy</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 value="Bitcoin"
//                 sx={{ mb: 2 }}
//               >
//                 <MenuItem value="Bitcoin">Bitcoin</MenuItem>
//                 <MenuItem value="Ethereum">Ethereum</MenuItem>
//                 <MenuItem value="Litecoin">Litecoin</MenuItem>
//               </TextField>

//               {/* Pay With */}
//               <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Pay with</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 value="Bank"
//                 sx={{ mb: 2 }}
//               >
//                 <MenuItem value="Bank">Bank Account</MenuItem>
//                 <MenuItem value="Card">Debit Card</MenuItem>
//               </TextField>

//               {/* Buy Button */}
//               <Button fullWidth variant="contained" color="primary" size="large">
//                 Buy Bitcoin
//               </Button>
//             </CardContent>
//           </Card>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
