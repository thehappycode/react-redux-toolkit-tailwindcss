import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
const DoughnutChart = ({dataChart}) => {
    ChartJS.register(ArcElement, Tooltip)
    return (
        <Doughnut data={dataChart}/>
    )
}

export default DoughnutChart