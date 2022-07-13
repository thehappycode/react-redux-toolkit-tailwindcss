import { FaChartPie } from 'react-icons/fa';
import { GrTasks } from 'react-icons/gr';

export const rgba = (r, g, b, a) => {
  if (!a) {
    a = 1
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
export const SECRET_KEY = 'b6oaGHXMFI7OsgS9CMXOlAP4deD80rQ4'
export const VERSION_API_SSO = 'api/v1'
export const SYSTEM_CODES = ["ECM", "BOS", "LOS", "BMS", "TMS"]
export const APPLICATION_CODES = ['inbox', 'cc', 'discuss']
export const SIZE = 10
export const BASE_URL = {
  API_SSO: 'http://api.sso.cbbank.vn',
  API_LOGIN: 'http://api.login.cbbank.vn',
  API_HRM: 'http://api.login.cbbank.vn',
  // ECM: 'http://ecmtest.cbbank.vn',
  ECM: 'http://ecmsso.cbbank.vn',
  BOS: 'http://testbos.cbbank.vn',
  LOS: 'http://testlos.cbbank.vn',
  BMS: 'http://bms.test.cbbank.vn',
  TMS: 'http://tms.test.cbbank.vn'
}

export const USER_NAME = () => localStorage.getItem("userName")
export const FULL_NAME = () => localStorage.getItem("fullName")

export const HEADER = () => ({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem("acceptToken")
})

export const SIDE_BAR_MENU = [
  {
    name: 'Dashboard',
    to: '/',
    icon: <FaChartPie />,
    breadcrumb: [],
    children: []
  },
  {
    name: 'Danh sách công việc',
    to: null,
    icon: <GrTasks />,
    breadcrumb: [],
    children: [
      {
        name: 'Hồ sơ ECM',
        to: '/ecm',
        icon: null,
        breadcrumb: [{ name: 'Danh sách công việc', to: null }, { name: 'Hồ sơ ECM', to: '/ecm' }],
        children: []
      },
      {
        name: 'Hồ sơ BOS',
        to: '/bos',
        icon: null,
        breadcrumb: [{ name: 'Danh sách công việc', to: null }, { name: 'Hồ sơ BOS', to: '/bos' }],
        children: []
      },
      {
        name: 'Hồ sơ LOS',
        to: '/los',
        icon: null,
        breadcrumb: [{ name: 'Danh sách công việc', to: null }, { name: 'Hồ sơ LOS', to: '/los' }],
        children: []
      },
      {
        name: 'Hồ sơ BMS',
        to: '/bms',
        icon: null,
        breadcrumb: [{ name: 'Danh sách công việc', to: null }, { name: 'Hồ sơ BMS', to: '/bms' }],
        children: []
      },
      {
        name: 'Hồ sơ TMS',
        to: '/tms',
        icon: null,
        breadcrumb: [{ name: 'Danh sách công việc', to: null }, { name: 'Hồ sơ TMS', to: '/tms' }],
        children: []
      },
    ]
  }
]

export const colorChart = {
  inbox: [27, 185, 52],
  discuss: [30, 183, 255],
  sendbox: [38, 43, 64],
  cc: [255, 193, 7],
  success: [27, 185, 52],
  primary: [30, 183, 255],
  secondary: [38, 43, 64],
  warning: [255, 193, 7],
  danger: [220, 53, 69],
  alternate: [121, 76, 138]
}

export const dataDoughnutChart = {
  labels: ['Hồ sơ đến', 'Hồ sơ thảo luận', 'Hồ sơ đã xử lý'],
  datasets: [
    {
      //label: '# of Votes',
      data: [3, 5, 13],
      backgroundColor: [
        rgba(...colorChart.inbox, .5),
        rgba(...colorChart.discuss, .5),
        rgba(...colorChart.sendbox, .5)
      ],
      borderColor: [
        rgba(...colorChart.inbox),
        rgba(...colorChart.discuss),
        rgba(...colorChart.sendbox)
      ],
      borderWidth: 1,
    },
  ]
}

export const dataInboxAriaChart = data => ({
  labels: SYSTEM_CODES,
  datasets: [
    {
      data,
      fill: true,
      lineTension: .3,
      backgroundColor: rgba(...colorChart.inbox, .2),
      borderColor: rgba(...colorChart.inbox),
    }
  ]
})

export const dataCCAriaChart = data => ({
  labels: SYSTEM_CODES,
  datasets: [
    {
      data,
      fill: true,
      lineTension: .3,
      backgroundColor: rgba(...colorChart.cc, .2),
      borderColor: rgba(...colorChart.cc),
    }
  ]
})

export const dataDiscussAriaChart = (data) => ({
  labels: SYSTEM_CODES,
  datasets: [
    {
      data,
      fill: true,
      lineTension: .3,
      backgroundColor: rgba(...colorChart.discuss, .2),
      borderColor: rgba(...colorChart.discuss),
    }
  ]
})


export const dataVerticalBarChart = (inbox, cc, discuss) => ({
  labels: SYSTEM_CODES,
  datasets: [
    {
      label: 'HS đến',
      data: inbox,
      fill: true,
      lineTension: .3,
      backgroundColor: rgba(...colorChart.inbox),
      borderColor: rgba(...colorChart.inbox),
    },
    {
      label: 'HS CC',
      data: cc,
      fill: true,
      lineTension: .3,
      backgroundColor: rgba(...colorChart.cc),
      borderColor: rgba(...colorChart.cc),
    },
    {
      label: 'HS Thảo luận',
      data: discuss,
      fill: true,
      lineTension: .3,
      backgroundColor: rgba(...colorChart.discuss),
      borderColor: rgba(...colorChart.discuss),
    }
  ]
})
