import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { tableGetRequest } from '../../actions/table';
import FlowTable from '../../components/FlowTable';

export class GithubPage extends React.Component {

    tableHead = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Name', sortable: true},
        {id: 'full_name', label: 'Full Name', sortable: true},
        {id: 'stargazers_count', label: 'Stars', sortable: true},
        {id: 'forks_count', label: 'Forks', sortable: true},
    ];


    componentDidMount(){
        this.props.dispatch(tableGetRequest());
    }

    normalize = () => {
        const { data } = this.props
        if (!data) return null;
        const tableData = [];

        data.forEach(item => {
            const { id, name, full_name, stargazers_count, forks_count } = item;
            tableData.push({
                id: item.id,
                cells: [
                    id,
                    name,
                    full_name,
                    stargazers_count,
                    forks_count
                ],
            });
        });

        return tableData;
    };

    render() {
        return (
            <FlowTable
                dataHead={this.tableHead}
                normalizeTableData={this.normalize()}
            />
        )
    }
}

const mapStateToProps = (state) => {
    let data = state && state.table && state.table.items

    return { data }
};

const withConnect = connect(mapStateToProps);

export default compose(
    withRouter,
    withConnect,
)(GithubPage);