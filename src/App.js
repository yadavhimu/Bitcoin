import React from 'react';
import { AppBar, Toolbar, Typography, Button, Tabs, Tab,MenuItem,TextField, Box, Card, CardContent, Divider, IconButton, Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample Bitcoin Data
const data = [
  { time: '10:00 AM', price: 11400 },
  { time: '10:30 AM', price: 11420 },
  { time: '11:00 AM', price: 11460 },
  { time: '11:30 AM', price: 11430 },
  { time: '12:00 PM', price: 11470 },
];

export default function BitcoinPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Navbar */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left side - Logo */}
        
          <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="h5" sx={{ flexGrow: 1 , marginRight:"40px" }}>
            Coinbase
          </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Prices</Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="contained">Trade</Button>
            <Button variant="outlined">Send</Button>
            <Button variant="outlined">Receive</Button>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
            <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ display: 'flex', p: 3, gap: 3 }}>
        {/* Left Side - Bitcoin Info and Chart */}
        <Box sx={{ flex: 2 }}>
          {/* Bitcoin title */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <img
              src="images/bitcoin.png" 
              alt="Bitcoin Logo"
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Typography variant="h4">
              Bitcoin <Typography variant="caption">(BTC)</Typography>
            </Typography>
          </Box>

          {/* Price and Change */}
          <Typography variant="h3" gutterBottom>
            $411,446.31 <Typography variant="subtitle1" color="green" component="span">+1.58%</Typography>
          </Typography>

          {/* Time Tabs */}
          <Tabs value={0} sx={{ mb: 2 }}>
            <Tab label="24H" />
            <Tab label="1W" />
            <Tab label="1M" />
            <Tab label="1Y" />
            <Tab label="ALL" />
          </Tabs>

          {/* Chart */}
          <Card elevation={3}>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="time" />
                  <YAxis domain={['auto', 'auto']} />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#1976d2" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Metrics */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Box>
              <Typography variant="subtitle2">Market cap</Typography>
              <Typography variant="body2">$211.4B</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Volume (24 hours)</Typography>
              <Typography variant="body2">$23.0B</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Circulating supply</Typography>
              <Typography variant="body2">18.5M BTC</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Popularity</Typography>
              <Typography variant="body2">#1 most held</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Buy/Sell/Convert */}

        <Box sx={{ flex: 1 , marginTop:"50px"}}>
          <Card elevation={3} sx={{ borderRadius: 4 }}>
            <CardContent>
              {/* Tabs */}
              <Tabs value={0} variant="fullWidth" textColor="primary" indicatorColor="primary">
                <Tab label="Buy" />
                <Tab label="Sell" />
                <Tab label="Convert" />
              </Tabs>

              <Divider sx={{ my: 2 }} />

              {/* Amount */}
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" fontWeight="bold">$0</Typography>
                <Typography variant="body2" color="text.secondary">You can buy up to $25,000.00</Typography>
              </Box>

              {/* One time purchase button */}
              <Button fullWidth variant="outlined" sx={{ textTransform: 'none', mb: 2 }}>
                One time purchase
              </Button>

              {/* Buy Bitcoin */}
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Buy</Typography>
              <TextField
                select
                fullWidth
                value="Bitcoin"
                sx={{ mb: 2 }}
              >
                <MenuItem value="Bitcoin">Bitcoin</MenuItem>
                <MenuItem value="Ethereum">Ethereum</MenuItem>
                <MenuItem value="Litecoin">Litecoin</MenuItem>
              </TextField>

              {/* Pay With */}
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Pay with</Typography>
              <TextField
                select
                fullWidth
                value="Bank"
                sx={{ mb: 2 }}
              >
                <MenuItem value="Bank">Bank Account</MenuItem>
                <MenuItem value="Card">Debit Card</MenuItem>
              </TextField>

              {/* Buy Button */}
              <Button fullWidth variant="contained" color="primary" size="large">
                Buy Bitcoin
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
