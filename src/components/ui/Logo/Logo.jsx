import PropTypes from 'prop-types';

import { Tooltip } from '@mui/material';

import { logo } from 'src/assets';

import { Link } from '..';

const Logo = ({ sx = {}, to = '/' }) => {
    return (
        <Link to={to} sx={sx}>
            <Tooltip color="primary" title="На головну" arrow>
                <img src={logo} alt="logo" />
            </Tooltip>
        </Link>
    );
};

Logo.propTypes = {
    to: PropTypes.string,
    sx: PropTypes.object,
};

export default Logo;
