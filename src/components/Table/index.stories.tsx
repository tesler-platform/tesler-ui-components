import React from 'react'
import Table from './Table'

export default {
    component: Table,
    title: 'Table',
};

export const basicExample = () => {
    return <div>
        <h2>Basic example</h2>
        <Table data={[]} />
    </div>
}

export const emptyData: React.FC = (props) => {
    return <Table />
}
