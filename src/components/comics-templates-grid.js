import React from 'react';
import PropTypes from 'prop-types';

import ComicsTemplatesCard from './partials/comics-templates-card';

const ComicsTemplatesGrid = ({ templates }) => (
  <section className="grid gap-8 p-4 my-10 md:p-8 place-content-between sm:gap-7 md:gap-10 sm:grid-cols-artgrid md:grid-cols-artgridMd">
    {templates.reverse().map((template) => (
      <ComicsTemplatesCard template={template} key={template.title} />
    ))}
  </section>
);

ComicsTemplatesGrid.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ComicsTemplatesGrid;
