import React, { useState } from 'react';

const NestedList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Parent 1',
      children: [
        { id: 11, name: 'Child 1.1', children: [{ id: 111, name: 'Subchild 1.1.1' }] },
        { id: 12, name: 'Child 1.2', children: [{ id: 121, name: 'Subchild 1.2.1' }, { id: 122, name: 'Subchild 1.2.2' }] },
      ],
    },
    {
      id: 2,
      name: 'Parent 2',
      children: [{ id: 21, name: 'Child 2.1' }, { id: 22, name: 'Child 2.2' }],
    },
  ]);

  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const renderList = (items, level = 0) => {
    return (
      <ul className={`ml-${level * 4} list-disc`}>
        {items.map((item) => (
          <li key={item.id} onClick={() => toggleExpand(item.id)} className="cursor-pointer">
            {item.name}
            {item.children && expandedIds.includes(item.id) && renderList(item.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        {renderList(data)}
      </div>
    </div>
  );
};

export default NestedList;
