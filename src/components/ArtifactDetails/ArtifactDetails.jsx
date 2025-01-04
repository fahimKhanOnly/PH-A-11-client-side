import { useLoaderData } from "react-router-dom";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { Helmet } from "react-helmet";


const ArtifactDetails = () => {
  const { userName, myEmail, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoverdAt, discoverdBy, presentLocation, description, likes } = useLoaderData();
  return (
    <div className="container mx-auto pt-9">
      <Helmet>
        <title>HistoriX | Details</title>
      </Helmet>
      <div className="card lg:justify-between mx-1.5 lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img className="h-full" src={artifactImage} alt={artifactName} />
        </figure>
        <div className="card-body px-2 sm:px-7">
          <p className="text-lg font-medium text-gray-500">Adder Name: <span className="text-lg font-semibold text-black">{userName}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Adder Email: <span className="text-lg font-semibold text-black">{myEmail}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Artifact Name: <span className="text-lg font-semibold text-black">{artifactName}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Type: <span className="text-lg font-semibold text-black">{artifactType}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Present Location: <span className="text-lg font-semibold text-black">{presentLocation}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Created At: <span className="text-lg font-semibold text-black">{createdAt}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Discoverd At: <span className="text-lg font-semibold text-black">{discoverdAt}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Discoverd by: <span className="text-lg font-semibold text-black">{discoverdBy}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Historical Context: <span className="text-lg font-semibold text-black">{historicalContext}</span></p>
          <div className="divider my-0 h-0"></div>
          <p className="text-lg font-medium text-gray-500">Description: <span className="text-lg font-semibold text-black">{description}</span></p>
          <div className="divider my-0 h-0"></div>

          <div className="flex items-center gap-2 mt-5 border w-fit rounded-lg">
            <div className="btn">
              <FaRegThumbsUp className="hover:cursor-pointer text-xl" />
              {/* <FaThumbsUp className="text-xl" /> */}
            </div>
            <div className="flex items-center px-4 justify-center">
              <p className="text-center font-medium">{likes} Likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;