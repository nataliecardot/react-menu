import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      {/* Manual approach to filtering not ideal - not in sync with data; would need to add/change category names */}
      <button className="filter-btn" onClick={() => filterItems('all')}>
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems('breakfast')}>
        breakfast
      </button>
    </div>
  );
};

export default Categories;
