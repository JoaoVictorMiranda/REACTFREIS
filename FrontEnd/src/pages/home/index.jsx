import Card from "../../components/cards/Card.jsx";
import Header from "../../components/header/Header.jsx";
import { Link } from 'react-router-dom'


export default function App() {
    return (
        <div className="container_home">
            <Header />
            <Link to={"ex1"}>
                <Card title={"BOM DIA"} description={"LIÇÃO 1"} />
            </Link>


        </div>
    );
}