import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Charic({ id, name, profileImg }) {
    let navigate = useNavigate();
    function handleClick() {
        navigate(`/character/${id}`)
    }
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg h-72 w-52 cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-red-500 hover:border" onClick={handleClick}>
                <img class="w-full h-48" src={profileImg} alt={name} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{name}</div>
                </div>
            </div>
        </div>
    )
}

Charic.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
}
export default Charic;