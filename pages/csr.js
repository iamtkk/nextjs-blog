import React, { useEffect, useState } from 'react';

const CSR = () => {
  const [time, setTime] = useState();
  useEffect(() => {
    console.log('client');
    setTime(new Date().toISOString());
  }, []);
  return <div>{time}!</div>;
};

export default CSR;
