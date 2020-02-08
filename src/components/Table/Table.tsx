import React from 'react'
import {Table as AntTable, Dropdown} from 'antd'
import cn from 'classnames'
import styles from './Table.module.less'

export interface TableProps {
    /**
     * className will be passed to the inner table component
     */
    className?: string,
    /**
     * Data items
     */
    data?: any[],
    /**
     * Actions panel will be shown for each row
     */
    showRowActions?: boolean
}

/**
 * Visualize data in table form
 */
export const Table: React.FC<TableProps> = (props) => {
    const floatMenuRef = React.useRef(null)
    return <div>
        <AntTable
            className={cn(
                styles.table,
                {
                    [styles.tableWithRowMenu]: props.showRowActions
                },
                props.className
            )}
            dataSource={props.data}
        />
        { props.showRowActions &&
            <div
                ref={floatMenuRef}
                className={styles.floatMenu}
                onMouseLeave={onFloatMenuMouseLeave}
            >
                <Dropdown
                    placement="bottomRight"
                    trigger={['click']}
                    onVisibleChange={onMenuVisibilityChange}
                    overlay={rowActionsMenu}
                    getPopupContainer={trigger => trigger.parentElement}
                >
                    <div className={styles.dots}>...</div>
                </Dropdown>
            </div>
        }
    </div>
}

Table.defaultProps = {
    data: [],
    showRowActions: false
}

export default Table
