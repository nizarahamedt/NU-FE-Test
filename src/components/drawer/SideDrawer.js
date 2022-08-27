import { memo } from 'react';
import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import useStyles from "./SideDrawer.style";
const SideDrawer = ({ open, onClose, data }) => {

    const classes = useStyles();
    return (

        <Drawer anchor='right' onClose={onClose} open={open}>
            <div className={classes.drawer}>
                <Typography variant='h4'> All Details</Typography>

                {data.map((item) =>

                    <>
                        <Typography variant='body1'>{`Name:${item.name}`}</Typography>
                        <li>{`Capital:${item.capital}`}</li>
                        <li>{`Region:${item.region}`}</li>
                        <li>{`Population:${item.population}`}</li>
                        <li>{`Area:${item.area}`}</li>
                        <li>{`Calling Codes:${item.callingCodes}`}</li>
                        <li>{`Subregion:${item.subregion}`}</li>
                    </>


                )}
            </div>








        </Drawer>


    )



}
SideDrawer.propTypes = {
    data: PropTypes.array,
    onClose: PropTypes.func,
    open: PropTypes.bool

}
SideDrawer.defaultProps = {
    data: [],
    open: false,
}

export default memo(SideDrawer);