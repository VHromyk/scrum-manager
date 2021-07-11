import { useSelector } from 'react-redux';
import tasksSelectors from '../../redux/tasks/tasks-selectors';
import styles from './Diagram.module.css';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

function Diagram({ onCloseModal, duration, arrayOfDate }) {
  const getAll = useSelector(tasksSelectors.getTasks);

  console.log('Возьми все даты:', getAll);

  const sumRedLine = getAll.reduce(function (cnt, getAll) {
    return cnt + getAll.scheduledHours;
  }, 0); // Вирахування суми всіх годин запланованих на виконання тасок

  const daysRedLine = () => {
    let arrRedLine = [];
    arrRedLine.push(sumRedLine); // создаем первый индекс массива;
    let currentIndex = sumRedLine; //первый индекс массива 105 сумма всех часов;
    let sumAllRedLine = sumRedLine / duration; // делим общее количество запланированых часов на кол-во дней спринта
    for (let i = 0; i <= duration; i += 1) {
      currentIndex = currentIndex - sumAllRedLine;
      let typeToNumber = Math.floor(currentIndex * 100) / 100; // обрезаем число до двух знаков после запятой;
      if (typeToNumber >= 0) {
        arrRedLine.push(typeToNumber);
        // пока первый индекс больше 0 пушим в массив числа;
      }
    }
    return arrRedLine;
  };

  const daysBlueLine = () => {
    let arrBlueLine = [];
    arrBlueLine.push(sumRedLine);
    let firstIndex = sumRedLine;

    let multipleHoursWasted = _.groupBy(getAll, 'taskDate');

    const arrOfDate = arrayOfDate();

    for (let i = 0; i <= arrOfDate.length; i += 1) {
      if (arrOfDate[i] in multipleHoursWasted) {
        let date = arrOfDate[i];
        const totalNumber = multipleHoursWasted[date].reduce(
          (acc, value) => acc + value.spentTime,
          0,
        );
        firstIndex = firstIndex - totalNumber;
        arrBlueLine.push(firstIndex);
      }
    }
    return arrBlueLine;
  };

  const data = {
    labels: arrayOfDate(),
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
        data: daysBlueLine(),
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
        data: daysRedLine(),
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
