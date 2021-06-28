import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../Components/AddButton';

import Sprint_table from './sprint_table';

const Sprint = () => {
  return (
    <>
      <h1 className="main_header">Sprint Burndown Chart 1</h1>
      <button></button>
      <AddButton />
      <h2>Create a task</h2>
      <Sprint_table />
      <button></button>
    </>
  );
};
export default Sprint;
