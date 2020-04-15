const LoginPage = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100 w-100">
        <div className="bg-secondary p-3 px-4 rounded">
          <div>
            <p className="m-0 text-center white">LOGIN</p>
            <p className="m-0 text-center white">SMART AQUARIUM</p>
          </div>
          <div className="input-group-sm mb-3 mt-3">
            <input className="form-control mb-2" placeholder="Nama Pengguna" />
            <input className="form-control" placeholder="Kata Sandi" />
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" class="btn btn-sm btn-info">Register</button>
            <button type="button" class="btn btn-sm btn-info">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
