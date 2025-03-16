import React from 'react';
import './orders.css';

export default function OrdersPage() {
  return (
    <main>
      <div className="orders-header">
        <h1>Tus pedidos</h1>
      </div>
      <div className="orders-container">
        <h1 className="orders-title">Tus pedidos</h1>

        <div className="orders-empty">
          <h2 className="orders-empty-title">No tienes pedidos activos</h2>
          <p className="orders-empty-text">Cuando contactes a un vendedor y confirmes una compra, aparecerá aquí</p>
        </div>
      </div>
    </main>
  );
}