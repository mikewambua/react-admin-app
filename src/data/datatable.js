export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImage">
          <img className="cellImage" src={params.row.image} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: 'Michael',
    image: '/images/img-6.jpg',
    email: 'mike@gmail.com',
    status: 'pending',
    age: '37',
  },
  {
    id: 2,
    username: 'Charles',
    image: '/images/img-8.jpg',
    email: 'kiio@gmail.com',
    status: 'passive',
    age: '27',
  },
  {
    id: 3,
    username: 'Maryanne',
    image: '/images/img-4.jpg',
    email: 'mary@gmail.com',
    status: 'active',
    age: '26',
  },
  {
    id: 4,
    username: 'Susan',
    image: '/images/img-9.jpg',
    email: 'susan@gmail.com',
    status: 'passive',
    age: '30',
  },
  {
    id: 5,
    username: 'Joanne',
    image: '/images/img-2.jpg',
    email: 'joan@gmail.com',
    status: 'active',
    age: '42',
  },
];
