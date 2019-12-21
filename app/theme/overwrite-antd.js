import { createGlobalStyle } from 'styled-components';

const OverwriteAntd = createGlobalStyle`
  /* Start Form */
  .ant-form-item {
    margin-bottom: 15px;
    label {
      color: ${props => props.theme.colorText};
    }
  }

  .ant-input, .ant-checkbox-inner {
    border-radius: 0px;
  }

  .ant-select-dropdown {
    background-color: ${props => props.theme.colorBackground} !important;
    border-radius: 0px !important;
    .ant-select-dropdown-menu-item {
      text-align: center;
      border-radius: 0px;
      color: ${props => props.theme.colorText};
      &:hover {
        background-color: ${props => props.theme.colorHover} !important;
      }
      &:first-child, &:last-child {
        border-radius: 0px;
      }
      img {
        width: max-content;
      }
      &.ant-select-dropdown-menu-item-selected, 
      &.ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
        background-color: ${props => props.theme.colorBorder};
      }
    }
  }

  .ant-btn {
    border-radius: 0px;
    &:disabled {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .ant-input, .ant-select-selection {
    background: transparent;
    color: ${props => props.theme.colorText};
    border: 1px solid ${props => props.theme.colorFieldsBorder};
    border-radius: 0px;
    &:focus {
      box-shadow: none;
    }
  }

  .ant-select-arrow, .ant-input-affix-wrapper .ant-input-prefix {
    color: ${props => props.theme.colorText};
  }
  .ant-input[disabled], .ant-select-disabled .ant-select-selection {
    color: ${props => props.theme.colorText};
    background-color: ${props => props.theme.colorBackgroundBody};
  }
  .has-error .ant-input, .has-error .ant-input:hover {
    background: transparent;
  }
  /* End Form */

  /* Start Table */
  .ant-table-small {
    border-radius: 0px;
    border-color: ${props => props.theme.colorBorder};
  }

  .ant-table-placeholder {
    border-radius: 0px;
    background: transparent;
  }
  
  .ant-table-small.ant-table-bordered .ant-table-content,
  .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {
    border-color: ${props => props.theme.colorBorder};
  }

  .ant-table-thead > tr:first-child > th {
    &:first-child, &:last-child {
      border-radius: 0px;
    }
  }

  .ant-table-thead, .ant-table-thead > tr > th {
    background-color: ${props => props.theme.colorHover};
  }

  .ant-table-tbody > tr.ant-table-row-selected td {
    background-color: ${props => props.theme.colorBackgroundBody};
  }

  .ant-table-content, .ant-table-header-column {
    color: ${props => props.theme.colorText};
  }

  .ant-table-small > .ant-table-content > .ant-table-body {
    margin: 0px;
  }

  .ant-table-fixed-left, .ant-table-fixed-right,
  .ant-table-fixed-left table, .ant-table-fixed-right table {
    background: ${props => props.theme.colorBackground};
    border-radius: 0px;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, 
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, 
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, 
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background: ${props => props.theme.colorBackgroundBody};
  }

  .ant-table-thead > tr:hover.ant-table-row-selected > td, 
  .ant-table-tbody > tr:hover.ant-table-row-selected > td {
    background: ${props => props.theme.colorFolderHover};
  }

  .ant-table-small.ant-table-bordered .ant-table-fixed-left .ant-table-thead > tr > th:last-child, 
  .ant-table-small.ant-table-bordered .ant-table-fixed-left .ant-table-tbody > tr > td:last-child {
    border-right-color: ${props => props.theme.colorTextAdditional};
  }

  .ant-table-small.ant-table-bordered .ant-table-fixed-right {
    border-right-color: ${props => props.theme.colorBorder};
    border-left-color: ${props => props.theme.colorTextAdditional};
  }
  /* End Table */

  /* Start Pagination */
  .ant-pagination li {
    border-radius: 0px;
    border-color: ${props => props.theme.colorBorder};
    background-color: ${props => props.theme.colorBackground};

    &.ant-pagination-item-active {
      border-color: #1890ff;
    }

    &.ant-pagination-disabled {
      > a.ant-pagination-item-link {
        background-color: ${props => props.theme.colorBackgroundBody};
        color: ${props => props.theme.colorText};
        &:hover {
          border-color: transparent;
        }
      }
    }

    a {
      color: ${props => props.theme.colorText};
    }

    > a.ant-pagination-item-link {
      border-radius: 0px;
      border-color: ${props => props.theme.colorBorder};
      background-color: ${props => props.theme.colorBackground};
    }
  }
  /* End Pagination */

  /* Start Collapse */
  .ant-collapse {
    border-radius: 0px;
    border-color: ${props => props.theme.colorBorder};

    .ant-collapse-item {
      border-bottom-color: ${props => props.theme.colorTextAdditional};

      &.ant-collapse-item-disabled {
        .ant-collapse-header {
          background: ${props => props.theme.colorHover};
          color: ${props => props.theme.colorTextAdditional};
        }
      }

      .ant-collapse-header {
        background: ${props => props.theme.colorBackgroundBody};
        color: ${props => props.theme.colorText};
        padding: 7px 16px 7px 40px;
      }

      &:last-child {
        border-radius: 0px;
        .ant-collapse-header, .ant-collapse-content {
          border-radius: 0px;
        }
      }

      .ant-collapse-content {
        border-top-color: ${props => props.theme.colorTextAdditional};
        background: ${props => props.theme.colorBackground};
      }
    }

  }
  /* End Collapse */

  /* Start Collapse */
  .ant-modal {
    .ant-modal-content {
      border-radius: 0px;
    }
  }
  /* End Collapse */
`;

export default OverwriteAntd;
