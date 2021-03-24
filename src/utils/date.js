import { isValid, parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

function Date({ dateString }) {
  if (!isValid(parseISO(dateString))) {
    return 'No date';
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
}

Date.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default Date;
