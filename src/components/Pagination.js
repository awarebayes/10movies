import {selectPage} from "../store/actions";
import React, { Component } from "react";
import {connect} from "react-redux";
import './css/Pagination.css';

function mapDispatchToProps(dispatch) {
    return {
        selectPage: page => dispatch(selectPage(page))
    };
}

const mapStateToProps = state => {
    return { page: state.page };
};

class Pagination_ extends Component {

    render() {

        let pagList = (
            <ul className="pagination-list">

                <li><a className="pagination-link"  onClick={()=>this.props.selectPage(1)}>1</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a className="pagination-link" onClick={()=>this.props.selectPage(this.props.page-1)} >{this.props.page-1}</a></li>
                <li><a className="pagination-link is-current"  onClick={()=>this.props.selectPage(this.props.page)}>{this.props.page}</a></li>
                <li><a className="pagination-link" aria-label="Goto page 47" onClick={()=>this.props.selectPage(this.props.page+1)}>{this.props.page+1}</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a className="pagination-link" onClick={()=>this.props.selectPage(Math.ceil(window.movies.length/15))} >{Math.ceil(window.movies.length/15)}</a></li>
            </ul>
        );

        if (this.props.page <= 2){
            pagList = (
                <ul className="pagination-list">
                    <li><a className="pagination-link" onClick={()=>this.props.selectPage(1)}>1</a></li>
                    <li><a className="pagination-link is-current" onClick={()=>this.props.selectPage(this.props.page)}>{this.props.page}</a></li>
                    <li><a className="pagination-link" onClick={()=>this.props.selectPage(this.props.page+1)}>{this.props.page+1}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={()=>this.props.selectPage(Math.ceil(window.movies.length/15))}>{Math.ceil(window.movies.length/15)}</a></li>
                </ul>
            );
        }

        if (this.props.page == 1){
            pagList = (
                <ul className="pagination-list">
                    <li><a className="pagination-link is-current" onClick={()=>this.props.selectPage(this.props.page)}>{this.props.page}</a></li>
                    <li><a className="pagination-link" onClick={()=>this.props.selectPage(this.props.page+1)}>{this.props.page+1}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={()=>this.props.selectPage(Math.ceil(window.movies.length/15))}>{Math.ceil(window.movies.length/15)}</a></li>
                </ul>
            );
        }

        if (this.props.page == 1819){
            pagList = (
                <ul className="pagination-list">
                    <li><a className="pagination-link"  onClick={()=>this.props.selectPage(1)}>1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={()=>this.props.selectPage(this.props.page-1)}>{this.props.page-1}</a></li>
                    <li><a className="pagination-link is-current" onClick={()=>this.props.selectPage(this.props.page)}>{this.props.page}</a></li>
                </ul>
            );
        }

        return (
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next page</a>
                {pagList}
            </nav>
        )
    }
}

const Pagination = connect(mapStateToProps, mapDispatchToProps)(Pagination_);
export default Pagination;
