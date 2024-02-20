import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const style = {
    padding: '13px 0',
    textAlign: 'center',
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
};

const TitleBlock = props => {
    return (
        <div style={style}>
            <Typography
                sx={{
                    color: '#1E55B3',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 21,
                }}
                component="h2"
            >
                {props.title}
            </Typography>
        </div>
    );
};

TitleBlock.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TitleBlock;
