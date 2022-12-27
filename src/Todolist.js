function Todolist() {
    return (
        <div className="Todolist">
            <div className="continer">
                <div className="w-50 mx-auto my-3">
                    <h1>Todos</h1>
                    <div id="clicks">
                        <a className="btn btn-primary" data-action="add">Add</a>
                        <a className="btn btn-success" data-action="search">Search</a>
                    </div>
                    <div id="forms" className="mb-3 mt-3"></div>
                    <ul class="list-group" id="todos-list">
                        <li className="list-group-item"><span>shopping</span>
                            <img src="media/icon_trash.png" className="float-right " />
                        </li>
                        <li className="list-group-item"><span>watching</span>
                            <img src="media/icon_trash.png" className="float-right" />
                        </li>
                        <li className="list-group-item"><span>learning</span>
                            <img src="media/icon_trash.png" className="float-right" />
                        </li>
                        <li className="list-group-item"><span>buying</span>
                            <img src="media/icon_trash.png" className="float-right" />
                        </li>
                        <li className="list-group-item"><span>driving</span>
                            <img src="media/icon_trash.png" className="float-right" />
                        </li>
                    </ul>
                </div>
            </div> /
        </div>
    );
}
export default Todolist;
