import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <div className="mt-5 flex items-center justify-center">
            Thank you so much for supporting. 
            <Link to='https://enesbilen.com/'
            className="ml-2 font-bold text-[#c5b5ff] hover:text-[#0d00ca]"
            >enesbilen.com</Link>
        </div>
    )
}