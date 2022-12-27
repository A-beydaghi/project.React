import { Link } from "react-router-dom";
 function Article() {
    return (
        <div className="Article">
            <div className="container">
                <div className="mx-50">
                <ul>
                    <li><Link to="Home">Home</Link></li>
                    <li><Link to="Calculator">Calculator</Link></li>
                    <li><Link to="Todolist">Todolist</Link></li>
                    <li><Link to="Validation">Validation</Link></li>
                    <li><Link to="Slideshow">Slideshow</Link></li>
                </ul>
                <hr />
                </div>
            </div>
        </div>
    );
}

export default Article;
