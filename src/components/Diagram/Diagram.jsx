import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import tasksSelectors from '../../redux/tasks/tasks-selectors';
import styles from './Diagram.module.css';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

function Diagram({ onCloseModal, duration }) {
  const getAll = useSelector(tasksSelectors.getTasks);
  const months = ['JUL', 'AUG'];

  const sumRedLine = getAll.reduce(function (cnt, getAll) {
    return cnt + getAll.scheduledHours;
  }, 0); // Вирахування суми всіх годин запланованих на виконання тасок

  console.log('Сумма всіх годин:', sumRedLine); //Сумма всіх годин запланованих на виконання тасок

  const DaysRedLine = () => {
    let arr = [];
    let firstIndex = sumRedLine; //первый индекс массива 105 сумма всех часов;
    arr.push(firstIndex); // создаем первый индекс массива;
    let sumAllRedLine = sumRedLine / duration; // делим общее количество запланированых часов на кол-во дней спринта
    for (let i = 0; i <= duration; i += 1) {
      firstIndex = firstIndex - sumAllRedLine;
      let typeToNumber = Math.floor(firstIndex * 100) / 100; // обрезаем число до двух знаков после запятой;
      if (typeToNumber >= 0) {
        arr.push(typeToNumber);
        // пока первый индекс больше 0 пушим в массив числа;
      }
    }
    console.log('Массив элементов для красной линии:', arr);
    return arr;
  };

  // DaysRedLine();

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
