import SpeedIcon from '@mui/icons-material/Speed';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const sidebarLinks = [
  {
    title: 'main',
    path: '/',
    linkTitle: 'Dashboard',
    icon: <SpeedIcon />,
  },
  {
    title: 'list',
    path: '/users',
    linkTitle: 'Users',
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    title: 'list',
    path: '/products',
    linkTitle: 'Products',
    icon: <InventoryOutlinedIcon />,
  },
  {
    title: 'list',
    path: '/orders',
    linkTitle: 'Orders',
    icon: <ShoppingBasketOutlinedIcon />,
  },
  {
    title: 'list',
    path: '/delivery',
    linkTitle: 'Delivery',
    icon: <LocalShippingIcon />,
  },
  {
    title: 'useful',
    path: '/statistics',
    linkTitle: 'Statistics',
    icon: <InsightsOutlinedIcon />,
  },
  {
    title: 'useful',
    path: '/notifications',
    linkTitle: 'Notifications',
    icon: <NotificationsActiveIcon />,
  },
  {
    title: 'service',
    path: '/system-health',
    linkTitle: 'System Health',
    icon: <DisplaySettingsIcon />,
  },
  {
    title: 'service',
    path: '/logs',
    linkTitle: 'Logs',
    icon: <ManageHistoryIcon />,
  },
  {
    title: 'service',
    path: '/settings',
    linkTitle: 'Settings',
    icon: <SettingsIcon />,
  },

  {
    title: 'user',
    path: '/profile',
    linkTitle: 'Profile',
    icon: <AccountCircleIcon />,
  },
  {
    title: 'user',
    path: '/logout',
    linkTitle: 'Logout',
    icon: <PowerSettingsNewIcon />,
  },
];

export const rows = [
  {
    id: 112211,
    product: 'Normal bag',
    img: '/images/img-1.jpg',
    customer: 'Charles Kiio',
    date: '1 April',
    amount: '2400',
    method: 'Cash on delivery',
    status: 'Approved',
  },
  {
    id: 222211,
    product: 'Travelling bag',
    img: '/images/img-2.jpg',
    customer: 'Rosemary Ndunge',
    date: '4 April',
    amount: '2100',
    method: 'Online payment',
    status: 'Pending',
  },
  {
    id: 332211,
    product: 'Office bag',
    img: '/images/img-3.jpg',
    customer: 'Joan Anne',
    date: '2 April',
    amount: '2300',
    method: 'Cash on delivery',
    status: 'Approved',
  },
  {
    id: 442211,
    product: 'Normal bag',
    img: '/images/img-4.jpg',
    customer: 'Maryanne Nduku',
    date: '4 May',
    amount: '2700',
    method: 'Online payment',
    status: 'Approved',
  },
  {
    id: 552211,
    product: 'Multipurpose bag',
    img: '/images/img-5.jpg',
    customer: 'Michael Wambua',
    date: '1 June',
    amount: '1900',
    method: 'Cash on delivery',
    status: 'Pending',
  },
];
