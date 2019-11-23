import React from "react";
import { setProductByCategory, setProductByName, setAllProducts } from '../../redux/actions/ProductsOperations';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Left from "@material-ui/icons/ChevronLeft";
import Right from "@material-ui/icons/ChevronRight";
import First from "@material-ui/icons/FirstPage";
import Last from "@material-ui/icons/LastPage";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';

class Paging extends React.Component {

    metodoPaginacion(page) {
        switch (this.props.metodo) {
            case "todos":
                return (this.props.setAllProducts(page))
            case "buscador":
                return (this.props.setProductByName(this.props.consulta, page))
            case "categorias":
                return (this.props.setProductByCategory(this.props.category, page))
            default:
                return "";
        }
    }

    render() {
        let itemsPerPage = parseInt(this.props.itemsPerPage);
        let page = parseInt(this.props.page);
        let totalPages = Math.ceil(this.props.totalItemsCount / itemsPerPage);
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <IconButton
                    size="small"
                    color="primary"
                    disabled={page === 1}
                    onClick={() => {
                        this.metodoPaginacion()
                    }}
                    style={{ marginRight: 10 }}
                >
                    <First />
                </IconButton>
                <IconButton
                    size="small"
                    color="primary"
                    disabled={page === 1}
                    onClick={() => {
                        this.metodoPaginacion(page - 2)
                    }}
                    style={{ marginRight: 10 }}
                >
                    <Left />
                </IconButton>
                <Typography variant="body1">Página {page} de {totalPages}</Typography>
                <IconButton
                    size="small"
                    color="primary"
                    disabled={page >= totalPages.toString()}
                    onClick={() => {
                        this.metodoPaginacion(page)
                    }}
                    style={{ marginLeft: 10, marginRight: 10 }}
                >
                    <Right />
                </IconButton>
                <IconButton
                    size="small"
                    color="primary"
                    disabled={page >= totalPages.toString()}
                    onClick={() => {
                        let totalpage = totalPages - 1
                        this.metodoPaginacion(totalpage)
                    }}
                    style={{ marginRight: 10 }}
                >
                    <Last />
                </IconButton>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setProductByCategory: (category, page) => dispatch(setProductByCategory(category, page)),
    setProductByName: (name, page) => dispatch(setProductByName(name, page)),
    setAllProducts: (page) => dispatch(setAllProducts(page)),
})

export default withRouter(connect(null,
    mapDispatchToProps
)(Paging));