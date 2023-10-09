import { Link } from "react-router-dom";

export default function NotFound () {
    return(
        <div className="flex flex-col items-center justify-center mt-9">
            <h1 className="my-2 text-3xl font-extrabold">404 Not-Found</h1>
            <p>Böyle bir sayfa bulunamadı. <Link to="/" className="text-[#0ee3ff] font-bold text-xl" >Anasayfa</Link> </p>
        </div>
    )
}