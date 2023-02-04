export default function Pizza() {
  return (
    <div className="card mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="fs-1">Card title</h5>
            <p className="card-text">
              La pizza napolitana, de masa tierna y delgada pero bordes altos,
              es la versión propia de la cocina napolitana de la pizza redonda.
              El término pizza napoletana, por su importancia histórica o
              regional, se emplea en algunas zonas como sinónimo de pizza tonda.
            </p>
            <p className="card-text">
              <small className="text-muted">
                mozzarella, tomates, jamón y orégano
              </small>
            </p>
            <div className="btn btn-outline-primary">Comprar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
