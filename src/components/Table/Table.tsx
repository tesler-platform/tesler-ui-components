import React from 'react'
import {Table as AntTable} from 'antd'

export interface TableProps {
    /**
     * Data items
     */
    data?: any[]
}

/**
 * Visualize data in table form
 */
export const Table: React.FC<TableProps> = (props) => {
    return <div>
        <AntTable dataSource={props.data} />
    </div>
}

Table.defaultProps = {
    data: []
}

export default Table
