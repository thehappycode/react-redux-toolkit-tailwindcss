import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

export const colorChart = {
  inbox: [27, 185, 52],
  discuss: [30, 183, 255],
  sendbox: [38, 43, 64]
}

export const rgba = (r, g, b, a) => {
  if (!a) {
    a = 1
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`
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

export const dataAriaChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      //label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: rgba(...colorChart.inbox, .2),
      borderColor: rgba(...colorChart.inbox),
    }
  ]
};

export const jobs = [
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": null,
      "createdDepartment": "Phòng Quản lý và Phát triển ứng dụng",
      "createdUser": null,
      "deadline": null,
      "deadlineApp": null,
      "description": null,
      "id": "e3db961d-ab1f-4eb3-80c9-fc26c91d0991",
      "isControl": false,
      "isFollow": false,
      "name": "49/2022/QT3.4DD/QLPTUD",
      "pending": false,
      "sendDate": "2022-06-06T17:25:43.81",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Nhân viên HO khởi tạo phiếu yêu cầu",
      "startDate": "2022-06-06T17:25:43.81",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": null,
      "createdDepartment": "Phòng Quản lý và Phát triển ứng dụng",
      "createdUser": null,
      "deadline": null,
      "deadlineApp": null,
      "description": null,
      "id": "362d5abc-a999-4d07-a0d0-bc03a0d8a57a",
      "isControl": false,
      "isFollow": false,
      "name": "48/2022/QT3.4DD/QLPTUD",
      "pending": false,
      "sendDate": "2022-06-06T17:24:58.6",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Nhân viên Phòng HO khởi tạo phiếu yêu cầu",
      "startDate": "2022-06-06T17:24:58.6",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": null,
      "createdDepartment": "Phòng Quản lý và Phát triển ứng dụng",
      "createdUser": null,
      "deadline": null,
      "deadlineApp": null,
      "description": null,
      "id": "002789c0-f4d3-46aa-bb03-17352a8b4456",
      "isControl": false,
      "isFollow": false,
      "name": "42/2022/QT3.4DD/QLPTUD",
      "pending": false,
      "sendDate": "2022-04-13T11:59:26.843",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Lãnh đạo Phòng HO khởi tạo phiếu yêu cầu",
      "startDate": "2022-04-13T11:59:26.843",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": null,
      "createdDepartment": "Phòng Quản lý và Phát triển ứng dụng",
      "createdUser": null,
      "deadline": null,
      "deadlineApp": null,
      "description": null,
      "id": "7b68a0f4-e29f-4259-a127-35c92dd31f92",
      "isControl": false,
      "isFollow": false,
      "name": "7/2022/QT2.1TD/QLPTUD",
      "pending": false,
      "sendDate": "2022-04-08T13:37:47.967",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Lãnh đạo Phòng HO khởi tạo phiếu yêu cầu",
      "startDate": "2022-04-08T13:37:47.967",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": null,
      "createdDepartment": "Phòng Quản lý và Phát triển ứng dụng",
      "createdUser": null,
      "deadline": null,
      "deadlineApp": null,
      "description": null,
      "id": "da216454-f587-430d-b5f2-eaee194a3664",
      "isControl": false,
      "isFollow": false,
      "name": "1/2022/QT3.7 ĐĐTT/QLPTUD",
      "pending": false,
      "sendDate": "2022-03-07T09:55:54.227",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Lãnh đạo  ban phê duyệt",
      "startDate": "2022-03-07T09:55:54.227",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "e8b9cdf0-4a55-47e6-995e-0a6bf24a6f3d",
      "comment": "xx",
      "createdDepartment": "Ban Quản lý Đề án công nghệ",
      "createdUser": "sonlhg",
      "deadline": "2022-01-28T04:25:14.493",
      "deadlineApp": "2022-01-24T18:22:43.653",
      "description": "Trích yếu test ABCD1234",
      "id": "80ed18bd-602c-4975-b457-bdfc4329a3a0",
      "isControl": false,
      "isFollow": false,
      "name": "25/2022/QT3.4DD/QLĐACN-QLPTUD",
      "pending": false,
      "sendDate": "2022-01-28T11:25:01.297",
      "sendDepartment": "Phòng Quản lý và Phát triển ứng dụng",
      "sendUser": "ductc",
      "stage": "Lãnh đạo ban tiếp nhận",
      "startDate": "2022-01-24T18:22:43.653",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": "2022-01-24T18:22:43.653",
      "statusApplication": {
          "id": 2,
          "percent": 100,
          "isExtend": false,
          "remain": -151
      },
      "userApproveName": "Lê Hoàng Giang Sơn",
      "userApprovePositionName": "Giám đốc Ban"
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": "asd",
      "createdDepartment": "Ban Pháp chế",
      "createdUser": null,
      "deadline": null,
      "deadlineApp": null,
      "description": "Về việc Điều động đối với cán bộ Trưởng nhóm  Ban Pháp chế Khối Hành chính sang công tác tại Thành viên Phòng Chuyển đổi số  Ban triển khai Chuyển đổi số ",
      "id": "9103d074-ec46-48d9-9a49-60cd783bbc40",
      "isControl": false,
      "isFollow": false,
      "name": "4/2022/QT3.4DD/PC",
      "pending": false,
      "sendDate": "2022-01-19T17:18:31.947",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Nhân viên HO khởi tạo phiếu yêu cầu",
      "startDate": "2022-01-19T17:17:33.763",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": null,
      "createdDepartment": "Ban Pháp chế",
      "createdUser": null,
      "deadline": null,
      "deadlineApp": null,
      "description": null,
      "id": "d165417c-f584-4dbc-8b19-62fa2a2bd0e8",
      "isControl": false,
      "isFollow": false,
      "name": "1/2022/QT3.4DD/PC",
      "pending": false,
      "sendDate": "2022-01-18T19:03:18.937",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Nhân viên HO khởi tạo phiếu yêu cầu",
      "startDate": "2022-01-18T19:03:18.937",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": null,
      "createdDepartment": "Ban Pháp chế",
      "createdUser": "tamnt4",
      "deadline": null,
      "deadlineApp": null,
      "description": null,
      "id": "0bb74e2b-886e-4dd2-8218-8b724e989e3e",
      "isControl": false,
      "isFollow": false,
      "name": "37/2021/QT3.4DD/PC",
      "pending": false,
      "sendDate": "2021-12-28T10:20:06.05",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Nhân viên HO khởi tạo phiếu yêu cầu",
      "startDate": "2021-12-28T10:20:06.05",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  },
  {
      "applicationTypeId": "5f24729a-1a2d-4b87-a4c1-b3dbdb2f2cca",
      "comment": "asdsa",
      "createdDepartment": "Ban Pháp chế",
      "createdUser": "tamnt4",
      "deadline": null,
      "deadlineApp": null,
      "description": "Về việc Điều động đối với cán bộ Trưởng nhóm  Ban Pháp chế Khối Hành chính sang công tác tại Trưởng nhóm Phòng Quản lý và Phát triển ứng dụng  Khối Tác nghiệp ",
      "id": "114bd9f1-d496-4962-a617-52dbda1b4682",
      "isControl": false,
      "isFollow": false,
      "name": "36/2021/QT3.4DD/PC",
      "pending": false,
      "sendDate": "2021-12-28T09:49:55.283",
      "sendDepartment": null,
      "sendUser": null,
      "stage": "Nhân viên HO khởi tạo phiếu yêu cầu",
      "startDate": "2021-12-28T08:51:12.877",
      "status": false,
      "isAccept": false,
      "isFinished": false,
      "isCompleted": false,
      "acceptDate": null,
      "startedDateApplicationLog": null,
      "statusApplication": {
          "id": 4,
          "percent": 100,
          "isExtend": false,
          "remain": 0
      },
      "userApproveName": null,
      "userApprovePositionName": null
  }
]

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];