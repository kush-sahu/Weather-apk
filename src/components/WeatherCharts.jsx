import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const WeatherCharts = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.city),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temp),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Cities',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{width:'80vw',height:'70vh',margin:'auto'}}>
      <h3>Weather Chart</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default WeatherCharts;
