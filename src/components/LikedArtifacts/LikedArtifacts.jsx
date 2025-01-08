import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Firebase/AuthProvider";
import empty from '../../assets/empty.svg';


const LikedArtifacts = () => {
  const { userAvailability } = useContext(AuthContext);
  const [getLikedArtifacts, setLikedArtifacts] = useState([]);
  useEffect(() => {
    fetch(`https://ph-a-11-server-side.vercel.app/likedArtifacts?email=${userAvailability.email}`)
      .then(res => res.json())
      .then(result => setLikedArtifacts(result))
  }, [])
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>HistoriX | Liked Artifacts</title>
      </Helmet>
      <h4 className="ml-4 my-6 font-bold text-lg">Total liked <span>({getLikedArtifacts.length})</span></h4>

      {
        getLikedArtifacts.length === 0 ?
          <div className="flex mt-6 justify-center items-center">
            <img className="xl:w-[720px]" src={empty} alt="No data Available" />
          </div> : <div className="space-y-6 mx-1.5">
            {
              getLikedArtifacts.map(data =>
                <div key={data._id} className="card lg:justify-between lg:items-start lg:card-side bg-base-100 shadow-xl">
                  <figure className="h-[200px] lg:w-[40%] lg:h-[250px]">
                    <img className="h-full" src={data.artifactImage} alt={data.artifactName} />
                  </figure>
                  <div className="card-body space-y-1">
                    <p className="text-lg font-medium text-gray-500">Artifact Name: <span className="text-lg font-semibold text-black">{data.artifactName}</span></p>
                    <p className="text-md font-medium text-gray-500">Type: <span className="text-md font-semibold text-black">{data.artifactType}</span></p>
                    <p className="text-lg font-medium text-gray-500">Present Location: <span className="text-lg font-semibold text-black">{data.presentLocation}</span></p>
                  </div>
                </div>
              )
            }

          </div>
      }
    </div>
  );
};

export default LikedArtifacts;