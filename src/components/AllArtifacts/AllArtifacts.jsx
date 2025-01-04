import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import empty from '../../assets/empty.svg';
import { Helmet } from "react-helmet";


const AllArtifacts = () => {
  const allData = useLoaderData();
  const [getArtifact, setArtifact] = useState(allData);
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>HistoriX | All Artifacts</title>
      </Helmet>
      <h4 className="ml-4 my-6 font-bold text-lg">Total Available <span>({getArtifact.length})</span></h4>
      {
        getArtifact.length === 0 ? <div className="flex justify-center items-center">
          <img className="xl:w-[720px]" src={empty} alt="No data Available" />
        </div> : <div className="space-y-4 mx-1.5 xl:grid gap-5 grid-cols-2">{
          getArtifact.map(data =>
            <div key={data._id} className="card lg:justify-between lg:card-side bg-base-100 shadow-xl">
              <figure className="lg:w-1/2">
                <img className="h-full" src={data.artifactImage} alt={data.artifactName} />
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
      }
    </div>
  );
};

export default AllArtifacts;