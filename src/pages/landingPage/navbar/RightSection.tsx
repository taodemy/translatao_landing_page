import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const RightSection = () => {
    return (
      <div className="w-[200] h-12 gap-6">
          <div className="w-32 h-12 gap-6 flex justify-between items-center">
            <SettingsOutlinedIcon />
            <AppsRoundedIcon />
            <AccountCircleOutlinedIcon />
          </div>
        {/* Add your component content here */}
      </div>
    );
  };
  
  export default RightSection;