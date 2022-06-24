import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
const PieChart = ({dataChart}) => {
    ChartJS.register(ArcElement, Tooltip)
    return (
        <Pie data={dataChart}/>
    )
}

export default PieChart