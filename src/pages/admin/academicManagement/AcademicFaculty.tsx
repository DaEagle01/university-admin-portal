import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { TAcademicFaculty } from '../../../types';
import { useGetAcademicFacultiesQuery } from '../../../redux/features/admin/academicManagement.api';

export type TTableData = Pick<
  TAcademicFaculty,
  'name' | 'createdAt' | 'updatedAt'
>;

const AcademicFaculty = () => {
  const { data: facultyData, isFetching } = useGetAcademicFacultiesQuery(undefined);

  const tableData = facultyData?.data?.map(
    ({ _id, name, createdAt, updatedAt }) => ({
      key: _id,
      name,
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
      title: 'Created At',
      key: 'createdAt',
      dataIndex: 'createdAt',
    },
    {
      title: 'Updated At',
      key: 'updatedAt',
      dataIndex: 'updatedAt',
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

export default AcademicFaculty;
