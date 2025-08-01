import React from 'react';
import { Table, Button, Popconfirm, Space, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {  } from '@ant-design/icons';
import ActionButton from '../../../../components/common/ActionButton';
import { PayFrequency } from '../../types'; // Enum import for type usage and value mapping
import type { CompensationItem } from '../../types';
import dayjs from 'dayjs';
import { usePermissions } from '../../../../hooks/usePermissions';

const { Text } = Typography;

// Helper to get display label for PayFrequency enum
const getPayFrequencyLabel = (freq: PayFrequency): string => {
  switch (freq) {
    case PayFrequency.MONTHLY:
      return 'Monthly';
    case PayFrequency.BI_WEEKLY:
      return 'Bi-Weekly';
    case PayFrequency.WEEKLY:
      return 'Weekly';
    default:
      return freq;
  }
};

interface CompensationTableProps {
  dataSource: CompensationItem[];
  loading: boolean;
  onEdit: (record: CompensationItem) => void;
  onDelete: (id: number) => void;
}

const CompensationTable: React.FC<CompensationTableProps> = ({ dataSource, loading, onEdit, onDelete }) => {
  const { hasPermission } = usePermissions();

  const canEdit = hasPermission('employee_compensation:edit');
  const canDelete = hasPermission('employee_compensation:delete');

  const columns: ColumnsType<CompensationItem> = [
    {
      title: 'Effective Date',
      dataIndex: 'effective_date',
      key: 'effective_date',
      sorter: (a, b) => dayjs(a.effective_date).unix() - dayjs(b.effective_date).unix(),
      render: (text) => dayjs(text).isValid() ? dayjs(text).format('YYYY-MM-DD') : 'N/A',
    },
    {
      title: 'Basic Salary',
      dataIndex: 'basic_salary',
      key: 'basic_salary',
      align: 'right',
      sorter: (a, b) => a.basic_salary - b.basic_salary,
      render: (val) => typeof val === 'number' ? val.toFixed(2) : 'N/A',
    },
    {
      title: 'Allowances',
      dataIndex: 'allowances',
      key: 'allowances',
      align: 'right',
      sorter: (a, b) => (a.allowances || 0) - (b.allowances || 0),
      render: (val) => typeof val === 'number' ? val.toFixed(2) : (val === null || val === undefined ? '0.00' : 'N/A'), 
    },
    {
      title: 'Total Salary',
      dataIndex: 'total_salary',
      key: 'total_salary',
      align: 'right',
      sorter: (a, b) => (a.total_salary || 0) - (b.total_salary || 0),
      render: (val) => typeof val === 'number' ? val.toFixed(2) : 'N/A',
    },
    {
      title: 'Pay Frequency',
      dataIndex: 'pay_frequency_lookup_value_id',
      key: 'pay_frequency_lookup_value_id',
      // TODO: Render using lookup map
      render: (lookupValueId: number) => lookupValueId, // Placeholder
      // TODO: Add filters using lookup map
      // filters: Object.values(PayFrequency).map(pf => ({ text: getPayFrequencyLabel(pf), value: pf })),
      // onFilter: (value, record) => record.payFrequency === value,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      render: (text) => text || 'CNY',
    },
    {
      title: 'Reason for Change',
      dataIndex: 'changeReason',
      key: 'changeReason',
      ellipsis: true,
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 'remarks',
      ellipsis: true,
    },
  ];

  if (canEdit || canDelete) {
    columns.push({
      title: 'Actions',
      key: 'actions',
      align: 'center',
      fixed: 'right',
      width: 120,
      render: (_, record) => (
        <Space size="small">
          {canEdit && (
            <ActionButton
              actionType="edit"
              onClick={() => onEdit(record)}
              tooltipTitle="编辑薪资记录"
            />
          )}
          {canDelete && (
            <Popconfirm
              title="Are you sure you want to delete this record?"
              onConfirm={() => onDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
            {/* The delete button is rendered within ActionButton, so no direct replacement here */}
              <ActionButton actionType="delete" danger tooltipTitle="删除薪资记录" />
            </Popconfirm>
          )}
        </Space>
      ),
    });
  }

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey="id"
      pagination={false} // Assuming pagination is handled by parent Tab component
      scroll={{ x: 'max-content' }}
      size="small"
    />
  );
};

export default CompensationTable; 