import { useNavigate } from "react-router-dom";



function MyButton() {
    let navigate = useNavigate();
    function handleClick() {
        navigate(`/${props.card.id}`);
    };
    return <Link to="trip" className="button" onClick={handleClick}>Discover a trip</Link>
}
