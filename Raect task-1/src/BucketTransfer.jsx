import React, { useState } from 'react';

function ElementTransfer() {
  const [bucket1, setBucket1] = useState(['Element 1', 'Element 2', 'Element 3']);
  const [bucket2, setBucket2] = useState([]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selected => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const addToBucket2 = () => {
    setBucket2(bucket2.concat(selectedItems));
    setBucket1(bucket1.filter(item => !selectedItems.includes(item)));
    setSelectedItems([]);
  };

  const addToBucket1 = () => {
    setBucket1(bucket1.concat(selectedItems));
    setBucket2(bucket2.filter(item => !selectedItems.includes(item)));
    setSelectedItems([]);
  };

  const removeAllFromBucket1 = () => {
    setBucket2(bucket2.concat(bucket1));
    setBucket1([]);
  };

  const removeAllFromBucket2 = () => {
    setBucket1(bucket1.concat(bucket2));
    setBucket2([]);
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <h2 className="text-lg font-semibold mb-4">Bucket 1</h2>
        <ul className="border border-gray-300 p-4 rounded-md">
          {bucket1.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span>{item}</span>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleSelectItem(item)}
              />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between">
          <button onClick={addToBucket2} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Bucket 2</button>
          <button onClick={removeAllFromBucket1} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Remove All from Bucket 1</button>
        </div>
      </div>
      <div className="w-1/3 mx-4">
        <h2 className="text-lg font-semibold mb-4">Bucket 2</h2>
        <ul className="border border-gray-300 p-4 rounded-md">
          {bucket2.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span>{item}</span>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleSelectItem(item)}
              />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between">
          <button onClick={addToBucket1} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Bucket 1</button>
          <button onClick={removeAllFromBucket2} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Remove All from Bucket 2</button>
        </div>
      </div>
    </div>
  );
}

export default ElementTransfer;
