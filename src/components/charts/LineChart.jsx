import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)
  const { data, options, width, height } = props
  return (
    <Line data={data}
      // width={width}
      height={height}
      options={options}
    />
  )
}

export default LineChart