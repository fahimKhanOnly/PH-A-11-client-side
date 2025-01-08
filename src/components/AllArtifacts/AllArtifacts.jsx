import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import empty from '../../assets/empty.svg';
import { Helmet } from "react-helmet";
import { ClockLoader } from "react-spinners";


const AllArtifacts = () => {
  const [loadingStatus, setLoading] = useState(true);
  const [getArtifact, setArtifact] = useState([]);
  const [getAllArtifacts, setAllArtifacts] = useState([]);


  useEffect(() => {
    fetch('https://ph-a-11-server-side.vercel.app/allArtifacts')
    .then(res => res.json())
    .then(data => {
      setArtifact(data);
      setAllArtifacts(data);
      setLoading(false);
    })
  }, [])
  const searchHandler = e => {
    e.preventDefault();
    const keyword = e.target.searchField.value.toLowerCase().trim().replace(/\s+/g, '');
    if(keyword){
      fetch(`https://ph-a-11-server-side.vercel.app/findArtifacts?name=${keyword}`)
        .then(res => res.json())
        .then(result => setArtifact(result));
    }
    setArtifact(getAllArtifacts);
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>HistoriX | All Artifacts</title>
      </Helmet>
      <div className="w-fit m-auto my-6 sm:w-1/2 xl:w-1/3">
        <form onSubmit={searchHandler}>
          <label className="input input-bordered flex items-center gap-2">
            <input name="searchField" type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </label>
        </form>
      </div>
      <h4 className="ml-4 my-6 font-bold text-lg">Total Available <span>({getArtifact.length})</span></h4>

      {
        loadingStatus ? <div className="w-full h-[70vh] mt-20 flex items-center justify-center">
        <ClockLoader size={100} color="gold" />
      </div> : <>
      {
        getArtifact.length === 0 ? <div className="flex justify-center items-center">
          <img className="xl:w-[720px]" src={empty} alt="No data Available" />
        </div> : <div className="space-y-4 mx-1.5 xl:grid gap-5 grid-cols-2">{
          getArtifact.map(data =>
            <div key={data._id} className="card lg:justify-between lg:card-side bg-base-100 shadow-xl">
              <figure className="">
                <img className="w-[280px] h-[300px]" src={data.artifactImage} alt={data.artifactName} />
              </figure>
              <div className="card-body ">
                <p className="text-lg font-medium text-gray-500">Artifact Name: <span className="text-lg font-semibold text-black">{data.artifactName}</span></p>
                <div className="divider my-0 h-0"></div>
                <p className="text-lg font-medium text-gray-500">Type: <span className="text-lg font-semibold text-black">{data.artifactType}</span></p>
                <div className="divider my-0 h-0"></div>
                <p className="text-lg font-medium text-gray-500">Present Location: <span className="text-lg font-semibold text-black">{data.presentLocation}</span></p>
                <div className="card-actions justify-end mt-5">
                  <Link to={`/allArtifacts/${data._id}`} className="btn btn-sm bg-[#FFCC6C]">View Details</Link>
                </div>
              </div>
            </div>
          )
        }</div>
      }</>
      }
    </div>
  );
};

export default AllArtifacts;