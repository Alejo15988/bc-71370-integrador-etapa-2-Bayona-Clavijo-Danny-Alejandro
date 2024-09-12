import { useContext } from 'react';
import './TablaFila.scss';
import ProductosContext from '../context/ProductosContext';

const TablaFila = ({ producto }) => {
    const { setProductoAEditar, eliminarProductoContext } = useContext(ProductosContext);

    const handleEditar = (producto) => {
        console.log('Producto a editar...', producto.id);
        setProductoAEditar(producto);
    };

    const handleEliminar = (productoId) => {
        console.log('Producto a eliminar...', productoId);
        eliminarProductoContext(productoId);
    };

    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.marca}</td>
            <td>{producto.categoria}</td>
            <td>{producto.detalles}</td>
            <td>
                <img className="img-row" src={producto.foto} alt={producto.nombre} />
            </td>
            <td>{producto.envio ? 'SI' : 'NO'}</td>
            <td>
                <button onClick={() => handleEditar(producto)}>Editar</button>
                <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default TablaFila;
