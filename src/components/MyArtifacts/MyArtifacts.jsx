import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import empty from '../../assets/empty.svg';
import { Helmet } from "react-helmet";
import axios from "axios";


const MyArtifacts = () => {
  const [getMyArtifact, setArtifact] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  useEffect(() => {
  axios.get(`https://ph-a-11-server-side.vercel.app/myArtifacts${search}`, {withCredentials: true})
  .then(data => setArtifact(data.data))

  }, []);

  const deleteHandler = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ph-a-11-server-side.vercel.app/allArtifacts/${id}`, {
          method: "DELETE",
          headers: { 'content-type': 'application/json' },
        }).then(res => {
          if (res.ok) {
            Swal.fire({
              title: "Delete",
              text: "You are successfully deleted an artifact.",
              icon: "success"
            });
            navigate("/allArtifacts");
          }
        })
      }
    });
  }
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>HistoriX | My Artifacts</title>
      </Helmet>
      <h4 className="ml-4 my-6 font-bold text-lg">Total Available <span>({getMyArtifact.length})</span></h4>
      {
        getMyArtifact.length === 0 ? 
        <div className="flex mt-6 justify-center items-center">
          <img className="xl:w-[720px]" src={empty} alt="No data Available" />
        </div> : <div className="space-y-4 mx-1.5 xl:grid gap-5 grid-cols-2">
          {
            getMyArtifact.map(data =>
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
                    <button onClick={() => deleteHandler(data._id)} className="btn btn-sm border-red-500"><MdOutlineDeleteForever className="text-2xl text-red-500" />
                    </button>
                    <Link to={`/myArtifacts/update/${data._id}`} className="btn btn-sm btn-success text-white">Update</Link>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      }
    </div>
  );
};

export default MyArtifacts;