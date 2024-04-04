import React, { useEffect, useState } from 'react';

const PerformanceInfo = () => {
  const [pageLoadTime, setPageLoadTime] = useState(0);

  useEffect(() => {
    const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    setPageLoadTime(pageLoadTime);
  }, []);

  return (
    <div>
      <h2>Информация о производительности</h2>
      <p>Время загрузки страницы: {pageLoadTime} миллисекунд</p>
    </div>
  );
};

export default PerformanceInfo;