import { Link } from "react-router-dom";
import Button from "../../../components/button";

export default function Home() {
  return (
    <div>
      <div className="my-10 flex items-center justify-center">
        Hello, I'm Enes Bilen. I am working as an Web Developer 🚀 📱
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <Link to='https://www.instagram.com/enesbln/'>
        <Button iconTitle="instagram" size='large' variant="instagram">Instagram</Button>
        </Link>
        <Link to='https://twitter.com/enesbilennn'>
        <Button iconTitle="twitter" size='large' variant="twitter">Twitter</Button>
        </Link>
        <Link to='https://github.com/enesbilen'>
        <Button iconTitle="github" size='large' variant="github">Github</Button>
        </Link>
        <Link to='https://www.linkedin.com/in/enesbln/'>
        <Button iconTitle="linkedin" size='large' variant="linkedin">Linkedin</Button>
        </Link>
        <Link to='https://www.youtube.com/'>
        <Button iconTitle="youtube" size='large' variant="youtube">Youtube</Button>
        </Link>
        <Link to='mailto:c.enesbilen@gmail.com'>
        <Button iconTitle="eposta" size='large' variant="eposta">E-posta</Button>
        </Link>
        <Link to='https://wa.me/+905465678969' className="w-full">
        <Button iconTitle="whatsapp" size='full' variant="whatsapp">WhatsApp</Button>
        </Link>

        
      </div>
      
    </div>
  );
}
