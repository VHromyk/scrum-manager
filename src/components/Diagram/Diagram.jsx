import { useSelector } from 'react-redux';
import tasksSelectors from '../../redux/tasks/tasks-selectors';
import styles from './Diagram.module.css';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

function Diagram({ duration, arrayOfDate }) {
  const getAll = useSelector(tasksSelectors.getTasks);

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
        lineTension: 0.4,
        backgroundColor: 'rgb(0, 89, 255)',
        borderColor: 'rgb(0, 89, 255)',
        data: daysBlueLine(),
      },
      {
        label: 'Planned remaining work in hours',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgb(255, 0, 0)',
        borderColor: 'rgb(255, 0, 0)',
        data: daysRedLine(),
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        left: 0,
        right: 10,
        top: 20,
        bottom: 10,
      },
    },
    responsive: true,
    title: {
      display: true,
      text: 'Burndown Chart(Calendar Team)                                                          ',
      fontColor: '#181C27',
      fontFamily: "'Montserrat', 'sans-serif'",
      fontSize: 23,
      padding: 0,
      position: 'top',
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        pointStyle: 'circle',
        borderWidth: 2,
        hoverRadius: 5,
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.2)',
        hoverBorderWidth: 2,
        radius: 2,
        hitRadius: 10,
      },
    },
    tooltips: {
      mode: 'index',
      titleFontSize: 16,
      titleMarginBottom: 10,
      bodyFontFamily: "'Montserrat', 'sans-serif'",
      bodyFontSize: 16,
      bodySpacing: 5,
      bodyAlign: 'center',
      xPadding: 8,
      yPadding: 8,
      caretPadding: 5,
      caretSize: 10,
      cornerRadius: 6,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Человеко-часы',
            fontFamily: "'Montserrat', 'sans-serif'",
            fontSize: 16,
            fontColor: '#181C27',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 14,
            fontColor: '#181C27',
          },
          gridLines: {
            display: true,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: false,
            fontSize: 14,
            fontColor: '#181C27',
          },
        },
      ],
    },
    legend: {
      display: true,
      fullWidth: false,
      labels: {
        fontColor: '#181C27',
        fontFamily: "'Montserrat', 'sans-serif'",
        fontSize: 12,
        boxWidth: 5,
        usePointStyle: true,
        padding: 20,
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Line data={data} options={chartOptions} />
    </div>
  );
}

export default Diagram;
