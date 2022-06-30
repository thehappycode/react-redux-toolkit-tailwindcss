import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
const BarChart = (props) => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
    const { data, options, width, height } = props
    return (
        <Bar data={data}
            // width={width}
            height={height}
            options={options}
        />
    )
}

export default BarChart