import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  buttonRoot: {
    background: '#03A383',
    '&:hover': {
      background: '#03A383',
    },
    borderRadius: '6px',
    fontSize: '13px',
    fontFamily: 'raleway',
    fontWeight: '600',
    lineHeight: '19px',
    textAlign: 'center',
    height: '40px',
    width: '165px',
    color: '#FFFF',
    marginTop: '31px',
    '&$buttonDisabled': {
      backgroundColor: '#03A383',
      opacity: '0.3',
      border: '3px solid grey',
      color: '#FFFF',
      fontWeight: '600',
      fontFamily: 'raleway',
      fontSize: '13px',
      lineHeight: '11px',
      textAlign: 'center',
    },
  },
  noDisplay: {
    display: 'none',
  },
  buttonDisabled: {

  },
});

const linkStyle = {
  textDecoration: 'none',
  cursor: 'auto',
};

const CustomFooter = ({
  classes,
  count,
  page,
  rowsPerPage,
  onChangePage,
  onChangeRowsPerPage,
  text,
}) => (
  <TableFooter>
    <TableRow>
      <TableCell>
        <Link to={count > 0 && 'mycasesfiles'} style={linkStyle}>
          <Button disabled={count < 1} variant="contained" color="primary" classes={{ root: classes.buttonRoot, disabled: classes.buttonDisabled }}>
            {text}
          </Button>
        </Link>
      </TableCell>
      <TablePagination
        className={count >= 11 ? classes.root : classes.noDisplay}
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </TableRow>
  </TableFooter>
);

export default withStyles(styles)(CustomFooter);
