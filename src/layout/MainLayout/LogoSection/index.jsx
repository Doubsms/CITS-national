import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase,SvgIcon } from '@mui/material';
import logo from '../../../assets/images/logojpg.jpg'
import "../../../pages/page.css"
// project imports
import config from '../../../config';
import Logo from '../../../ui-component/Logo';
import { MENU_OPEN } from '../../../store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
     <img src={logo} alt="logo" className='w-[190px] h-[60px] object-cover object-center' />
    </ButtonBase>
  );
};

export default LogoSection;
