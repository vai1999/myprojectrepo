import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/DynamicForm';
import SettingsIcon from '@mui/icons-material/Settings';
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Dashboard",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "Tables",
        link: "table"
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        text: "Form",
        link: "form"
    }
]