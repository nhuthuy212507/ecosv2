import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import Card from './Card';

const LayoutWrap = ({ children }) => (
  <Layout>
    <Card bordered={false}>{children}</Card>
  </Layout>
);

LayoutWrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default LayoutWrap;
