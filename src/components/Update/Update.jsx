import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const {_id, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoverdAt, discoverdBy, presentLocation } = useLoaderData();
  useEffect(() => {
    let type = document.querySelector("#artifactTypeDropDown");
    for (const element of type) {
      if (element.value === artifactType) {
        element.setAttribute("selected", true);
      }
    }
  }, [])

  const updateHandler = e => {
    e.preventDefault();
    const artifactName = e.target.artifactName.value;
    const artifactImage = e.target.artifactImage.value;
    const artifactType = e.target.artifactType.value === "Select Artifact type" ? null : e.target.artifactType.value;
    const historicalContext = e.target.historicalContext.value;
    const createdAt = e.target.createdAt.value;
    const discoverdAt = e.target.discoverdAt.value;
    const discoverdBy = e.target.discoverdBy.value;
    const presentLocation = e.target.presentLocation.value;
    const latestArtifact = { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoverdAt, discoverdBy, presentLocation };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myArtifacts/${_id}`, {
          method: "PATCH",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(latestArtifact)
        }).then(res => {
            if (res.ok) {
                Swal.fire({
                  title: "Updated",
                  text: "Updated successfully.",
                  icon: "success"
                });
            }
          });
      }
    });
  }
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md dark:text-black">
      <Helmet>
        <title>HistoriX | Update</title>
      </Helmet>
      <div>
        <form onSubmit={updateHandler} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Artifact Name</label>
              <input required type="text" defaultValue={artifactName} name="artifactName" placeholder="Enter Artifacts name" className="input input-bordered mt-1 border-[#FFCC6C] w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Artifact Image (Valid URL)</label>
              <input type="text" defaultValue={artifactImage} name="artifactImage" placeholder="Artifact image" className="input input-bordered border-[#FFCC6C] mt-1 w-full" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Artifact Type</label>
              <select id="artifactTypeDropDown" name="artifactType" required className="select border-[#FFCC6C] mt-1 block w-full border rounded-md shadow-sm sm:text-sm">
                <option>Select Artifact type</option>
                <option>Tools</option>
                <option>Weapons</option>
                <option>Documents</option>
                <option>Writings</option>
                <option>Statue</option>
                <option>Paintings</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Historical Context</label>
              <textarea defaultValue={historicalContext} style={{ resize: "none" }} required name="historicalContext" placeholder="Context" className="w-full textarea mt-1 h-12 border-[#FFCC6C]"></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Created At</label>
              <input defaultValue={createdAt} required type="text" name="createdAt" placeholder='e.g., "100 BC"' className="input input-bordered mt-1 border-[#FFCC6C] w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Discovered At</label>
              <input defaultValue={discoverdAt} required type="text" name="discoverdAt" placeholder='e.g., "1799"' className="input input-bordered border-[#FFCC6C] mt-1 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Discovered By</label>
              <input defaultValue={discoverdBy} required type="text" name="discoverdBy" placeholder="Discoverd By" className="input input-bordered border-[#FFCC6C] mt-1 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Present Location</label>
              <input defaultValue={presentLocation} type="text" name="presentLocation" required placeholder="Present Location" className="input border-[#FFCC6C] input-bordered mt-1  w-full" />
            </div>
          </div>

          <input type="submit" value="Update Artifact" className="btn btn-block bg-[#FFCC6C] hover:bg-[#2B3440] text-black hover:text-white rounded-md font-bold" />
        </form>
      </div>
    </div>
  );
};

export default Update;