import Pagenotfound from '../assets/pageNotFound.png';

const PageNotFound = () => {
  return (
    <div>
        <img src={Pagenotfound} alt="Page Not Found"  className="w-9/13" draggable={false}/>
        <h1 className="text-center font-family text-2xl mb-2">Something went wrong</h1>
        <p className="text-center font-family">Sorry, We can’t find the page you’re looking for.</p>
        <button className="bg-primary text-white bg-[#007DFE] cursor-pointer px-4 py-2 rounded-md block mx-auto mt-4 font-family">Go Back Home</button>
    </div>
  )
}

export default PageNotFound;