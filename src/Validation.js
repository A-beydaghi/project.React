function Validation() {
    return (
        <div className="Validation">
            <div className="container">
                <div className="m-3">
                    <h1>Validaton</h1>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h6>
                                Username:
                                <span id="username"><i>Please write something</i></span>
                            </h6>
                            <h6>
                                Password:
                                <span id="password"><i>Please select a password</i></span>
                            </h6>
                            <hr />
                            <form className="form">
                                <div className="form-group">
                                    <label for="Username">Username:</label>
                                    <input type="text" name="username" id="Username" className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label for="Password">Password:</label>
                                    <input type="password" name="password" id="Password" className="form-control" placeholder="Password" />
                                </div>
                                <input type="submit" name="submit" value="Submit" className="btn btn-primary" />
                            </form>
                            <hr />
                            <h6>
                                See password:
                                <span id="show-password"><i>Please select a password</i></span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Validation;
