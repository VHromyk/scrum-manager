import { useSelector } from 'react-redux';
import tasksSelectors from '../../redux/tasks/tasks-selectors';
import styles from './Diagram.module.css';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

function Diagram() {
  const getAll = useSelector(tasksSelectors.getTasks);
  const months = ['JUL', 'AUG'];

  console.log('Взять все таски:', getAll); //Массив всіх тасок

  const countDayForSprints = 12; //Захардкожена кількість днів спринта

  const sumRedLine = getAll.reduce(function (cnt, getAll) {
    return cnt + getAll.scheduledHours;
  }, 0); // Вирахування суми всіх годин запланованих на виконання тасок

  console.log('Сумма всіх годин:', sumRedLine); //Сумма всіх годин запланованих на виконання тасок

  const DaysRedLine = () => {
    let arr = [];

    for (let i = 0; i <= getAll.length; i += 1) {
      let sumAllRedLine = sumRedLine / countDayForSprints;
      let typeToNumber = Math.floor(sumAllRedLine * 100) / 100;
      console.log(typeToNumber);
      arr.push(typeToNumber);
    }
    console.log(arr);
    return arr;
  };

  console.log(DaysRedLine());

  const DaysBlueLine = () => {
    let arrBlueLine = [];
    let multipleHoursWasted = [5, 8, 13, 24];
    // _.flattenDeep(_.map(getAll, 'hoursWastedPerDay'));
    multipleHoursWasted = _.groupBy(multipleHoursWasted, 'currentDay');
    arrBlueLine = _.map(multipleHoursWasted, i => {
      return _.sumBy(i, i => i.singleHoursWasted);
    });
    return arrBlueLine;
  };

  const labelsDate = getAll.map(i => i.currentDay);

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
