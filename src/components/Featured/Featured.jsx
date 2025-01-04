import { useEffect, useState } from "react";
import empty from '../../assets/empty.svg';
import { Link } from "react-router-dom";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

const Featured = () => {
  const [getFeaturedData, setFeaturedData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/featuredArtifacts')
      .then(res => res.json())
      .then(data => setFeaturedData(data))
      .catch(err => console.log(err.message))
  }, [])
  console.log(getFeaturedData);
  return (
    <div className="container mx-auto flex flex-col items-center py-20">
      <h1 className="text-center font-bold text-4xl mb-12"><span className="border-orange-400 border-b-4">Featured</span> Artifacts</h1>

      {
        getFeaturedData.length === 0 ? <div className="flex justify-center items-center">
          <img className="xl:w-[740px]" src={empty} alt="No data Available" />
        </div> : <div className="space-y-4 mx-1.5 xl:grid gap-5 grid-cols-2">{
          getFeaturedData.map(data =>
            <div key={data._id} className="card lg:justify-between lg:card-side bg-base-100 shadow-xl">
              <figure className="lg:w-1/2">
                <img className="h-full" src={data.artifactImage} alt={data.artifactName} />
              </figure>
              <div className="card-body xl:w-1/2">
                <p className="text-lg font-medium text-gray-500">Artifact Name: <span className="text-lg font-semibold text-black">{data.artifactName}</span></p>
                <div className="divider my-0 h-0"></div>
                <p className="text-lg font-medium text-gray-500">Short Description: <span className="text-lg font-semibold text-black">{data.description}</span></p>
                <div className="divider my-0 h-0"></div>
                <p className="text-lg font-medium text-gray-500">: <span className="text-lg font-semibold text-black">{data.presentLocation}</span></p>
                <div className="flex mt-9 gap-2 items-center justify-between">
                  <div className="flex items-center border w-fit rounded-lg">
                    <Link className="btn btn-sm" to={`/allArtifacts/${data._id}`}><FaThumbsUp className="hover:cursor-pointer text-xl" /></Link>
                    <div className="flex items-center px-2 justify-center">
                      <p className="text-center font-medium">{data.likes} Likes</p>
                    </div>
                  </div>
                  <Link to={`/allArtifacts/${data._id}`} className="btn btn-sm bg-[#FFCC6C]">View Details</Link>
                </div>
              </div>
            </div>
          )
        }</div>
      }
      <Link className="btn mt-12 bg-[#FDCC6D] hover:bg-black hover:text-white text-lg px-7" to="/allArtifacts">See All</Link>
    </div>
  );
};

export default Featured;