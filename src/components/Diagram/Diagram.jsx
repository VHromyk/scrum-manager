import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
// import styles from './Diagram.module.scss';

const Diagram = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    /* генерируем дату для оси Х*/

    let dates = [];
    const datesRange = (startDate_, endDate_) => {
      let startDate = new Date(startDate_ + ' 00:00:00 UTC');
      let endDate = new Date(endDate_ + ' 00:00:00 UTC');
      const options = {
        month: 'short',
        day: 'numeric',
      };
      while (startDate <= endDate) {
        const locateUs = startDate.toLocaleString('en-US', options);
        dates.push(locateUs);
        startDate = new Date(
          Date.UTC(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate() + 1,
          ),
        );
      }
    };
    datesRange('2021-06-26', '2021-07-08');

    // const RedLine = () => {
    //   let arr = [];
    //   let sumAllRedLine = sumRedLine;

    //   for (let i = 0; i <= getAll[0].hoursWastedPerDay.length; i++) {
    //     sumAllRedLine -= sumRedLine / getAll[0].hoursWastedPerDay.length;
    //     arr.push(sumAllRedLine);
    //   }
    //   return arr;
    // };

    // const BlueLine = () => {
    //   let arrBlueLine = [];
    //   let multipleHoursWasted = _.flattenDeep(
    //     _.map(getAll, 'hoursWastedPerDay'),
    //   );
    //   multipleHoursWasted = _.groupBy(multipleHoursWasted, 'currentDay');
    //   arrBlueLine = _.map(multipleHoursWasted, i => {
    //     return _.sumBy(i, i => i.singleHoursWasted);
    //   });
    //   return arrBlueLine;
    // };

    const chart = () => {
      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Запланированные оставшиеся трудозатраты',
            data: [250, 230, 210],
            fill: false,
            lineTension: 0.1,
            borderDashOffset: 0.0,
            pointRadius: 3,
            pointHitRadius: 10,
            borderCapStyle: 'butt',
            backgroundColor: '#FA3B3F',
            borderColor: '#FA3B3F',
          },
          {
            label: 'Актуальные оставшиеся трудозатраты в часах ',
            data: [250, 232, 228],
            fill: false,
            lineTension: 0.1,
            borderDashOffset: 0.0,
            pointRadius: 3,
            pointHitRadius: 10,
            borderCapStyle: 'butt',
            backgroundColor: '#1988EE',
            borderColor: '#1988EE',
          },
        ],
      });
    };
    chart();
  }, []);

  return (
    <div>
      <h1>BurnDown Chart (Calendar Team)</h1>

      <Line
        data={chartData}
        height={900}
        width={400}
        options={{
          responsive: true,
          scales: {
            y: {
              ticks: {
                autoSkip: true,
                beginAtZero: true,
              },
            },

            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Diagram;
