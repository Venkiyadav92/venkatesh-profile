import reactImg from '../../assets/tag.png';
import './Header.css'
const reactDescription = ["Venki's","I've",'Through React I'];
function genRandomInt(max){
    return Math.floor(Math.random() * (max+1));
}

export default function Header(){
    const description = reactDescription[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="stylized atom" />
            <h1>Venkatesh profile</h1>
            <p>
                {description} developed a passion for creating intuitive user interfaces ! 
            </p>
        </header>
    );
}