import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { TAcademicDepartment } from '../../../types';
import { useGetAcademicDepartmentsQuery } from '../../../redux/features/admin/academicManagement.api';
import { formatDate } from '../../../utils/formatDate';

export type TTableData = Pick<
  TAcademicDepartment,
  'name' | 'academicFaculty' | 'createdAt' | 'updatedAt'
>;

const AcademicDepartment = () => {
  const { data: departmentData, isFetching } = useGetAcademicDepartmentsQuery(undefined);

  const tableData = departmentData?.data?.map(
    ({ _id, name, academicFaculty, createdAt, updatedAt }) => ({
      key: _id,
      name,
      academicFaculty,
      createdAt,
      updatedAt
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Faculty',
      key: 'academicFaculty',
      render: (text) => <div>{text.academicFaculty.name}</div>,
    },
    {
      title: 'Created At',
      key: 'createdAt',
      dataIndex: 'createdAt',
      render: text => <p>{formatDate(text)}</p>
    },
    {
      title: 'Updated At',
      key: 'updatedAt',
      dataIndex: 'updatedAt',
      render: text => <p>{formatDate(text)}</p>
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    />
  );
};

export default AcademicDepartment;
