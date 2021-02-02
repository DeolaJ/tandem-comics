import PropTypes from 'prop-types';

import ArtCard from './partials/art-card';

const ArtGrid = ({ drawings }) => (
  <section className="grid gap-8 place-content-between sm:gap-7 md:gap-10 sm:grid-cols-artgrid md:grid-cols-artgridMd lg:grid-cols-artgridLg">
    {drawings.reverse().map((drawing, index) => (
      <ArtCard drawing={drawing} key={drawing.id ? `${drawing.id}-${index}` : index} />
    ))}
  </section>
);

ArtGrid.propTypes = {
  drawings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtGrid;
