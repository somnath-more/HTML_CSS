import React from 'react';
// import { Icon } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MoreVert as MoreVertIcon,Download as FileDownloadIcon ,Search as SearchIcon,Delete as DeleteIcon, GitHub as GitHubIcon, VisibilityOff as VisibilityOffIcon, AddBox as AddBoxIcon } from '@mui/icons-material';
export type iconprops = {
  iconName: any | undefined;
  fontSize?: string | any |undefined;
};

export const iconMap:any = {
  Delete: DeleteIcon,
  Google: GoogleIcon,
  Github: GitHubIcon,
  Visibility:VisibilityOffIcon,
  AddBox:AddBoxIcon,
  Search:SearchIcon,
  Download:FileDownloadIcon,
  Filter:FilterListIcon,
  MoreVert:MoreVertIcon,
  Calender:CalendarTodayIcon ,
};



const CustomIcon: React.FC<iconprops> = ({ iconName, fontSize = '24px', ...rest }) => {
  const IconComponent = iconMap[iconName];
  return <IconComponent fontSize={fontSize} {...rest} />;
};

export default CustomIcon;
