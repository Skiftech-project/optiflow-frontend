import PropTypes from 'prop-types';
import { blockStyle } from 'src/styles';

const Block = ({ padding, style, children, ...props }) => {
    return (
        <div style={{ padding: padding, ...blockStyle, ...style }} {...props}>
            {children}
        </div>
    );
};

Block.propTypes = {
    padding: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default Block;
