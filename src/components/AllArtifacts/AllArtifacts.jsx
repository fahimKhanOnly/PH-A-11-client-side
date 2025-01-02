import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllArtifacts = () => {
  const allData = useLoaderData();
  const [getArtifact, setArtifact] = useState(allData);

  return (
    <div className="container mx-auto">
      <h1>All artifacts</h1>
      <div className="space-y-4 mx-1.5 xl:grid gap-5 grid-cols-2">
      {
        getArtifact.map(data => 
          <div className="card lg:justify-between lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-1/2">
              <img className="h-full" src={data.artifactImage} alt={data.artifactName}/>
            </figure>
            <div className="card-body ">
              <p className="text-lg font-medium text-gray-500">Artifact Name: <span className="text-lg font-semibold text-black">{data.artifactName}</span></p>
              <div className="divider my-0 h-0"></div>
              <p className="text-lg font-medium text-gray-500">Type: <span className="text-lg font-semibold text-black">{data.artifactName}</span></p>
              <div className="divider my-0 h-0"></div>
              <p className="text-lg font-medium text-gray-500">Present Location: <span className="text-lg font-semibold text-black">{data.artifactName}</span></p>
              <div className="card-actions justify-end mt-5">
                <Link className="btn btn-sm bg-[#FFCC6C]">View Details</Link>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  );
};

export default AllArtifacts;