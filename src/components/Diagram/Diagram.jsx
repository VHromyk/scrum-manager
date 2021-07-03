import { useSelector } from 'react-redux';
import taskSelectors from '../../redux/tasks/task-selectors';
import styles from './Diagram.module.css';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

function Diagram() {
  const getAll = useSelector(taskSelectors.getTasks);
  const months = ['JUL', 'AUG'];

  const sumRedLine = getAll.reduce(function (cnt, getAll) {
    return cnt + getAll.hoursPlanned;
  }, 0);

  const DaysRedLine = () => {
    let arr = [];
    let sumAllRedLine = sumRedLine;

    for (let i = 0; i <= getAll[0].hoursWastedPerDay.length; i++) {
      sumAllRedLine -= sumRedLine / getAll[0].hoursWastedPerDay.length;
      arr.push(sumAllRedLine);
    }
    return arr;
  };

  const DaysBlueLine = () => {
    let arrBlueLine = [];
    let multipleHoursWasted = _.flattenDeep(_.map(getAll, 'hoursWastedPerDay'));
    multipleHoursWasted = _.groupBy(multipleHoursWasted, 'currentDay');
    arrBlueLine = _.map(multipleHoursWasted, i => {
      return _.sumBy(i, i => i.singleHoursWasted);
    });
    return arrBlueLine;
  };

  const labelsDate = getAll[0].hoursWastedPerDay.map(i => i.currentDay);

  const result = labelsDate.map(day => {
    const arr = day.split('-');
    return `${arr[2]} ${months[arr[1].replace(/(^|\s)0/g, '$1')]}`;
  });
  const data = {
    labels: result,
    datasets: [
      {
        label: 'Actual remaining labor in hours',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'blue',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [sumRedLine, ...DaysBlueLine()],
      },
      {
        label: 'Planned remaining work in hours',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(150,150,0,0.4)',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [sumRedLine, ...DaysRedLine()],
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2>Burndown Chart (Calendar Team)</h2>
      <div>
        <Line
          data={data}
          width={900}
          height={460}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

export default Diagram;
