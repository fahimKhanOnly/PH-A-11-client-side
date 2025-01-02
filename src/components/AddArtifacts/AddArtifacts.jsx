import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from 'sweetalert2'


const AddArtifacts = () => {
  const { userAvailability } = useContext(AuthContext);

  const submitHandler = e => {
    e.preventDefault();
    const userName = e.target.myName.value;
    const myEmail = e.target.myEmail.value;
    const artifactName = e.target.artifactName.value;
    const artifactImage = e.target.artifactImage.value;
    const artifactType = e.target.artifactType.value;
    const historicalContext = e.target.historicalContext.value;
    const createdAt = e.target.createdAt.value;
    const discoverdAt = e.target.discoverdAt.value;
    const discoverdBy = e.target.discoverdBy.value;
    const presentLocation = e.target.presentLocation.value;
    const likes = 0;
    const anArtifact = { userName, myEmail, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoverdAt, discoverdBy, presentLocation, likes };

    fetch('http://localhost:5000/allArtifacts', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(anArtifact)
    })
      .then(res => {
        if (res.ok) {
            Swal.fire({
              title: "Good job!",
              text: "You are successfully added a artifact.",
              icon: "success"
            });
          e.target.artifactName.value = "";
          e.target.artifactImage.value = "";
          e.target.artifactType.value = "";
          e.target.historicalContext.value = "";
          e.target.createdAt.value = "";
          e.target.discoverdAt.value = "";
          e.target.discoverdBy.value = "";
          e.target.presentLocation.value = "";
        }
      });
  }
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md dark:text-black">
      <Helmet>
        <title>HistoriX | Add Artifact</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6">Add Artifacts</h1>

      <form onSubmit={submitHandler} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">My Name</label>
            <input readOnly type="text" name="myName" value={userAvailability.displayName} className="input input-bordered mt-1 border-[#FFCC6C] w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">My Email</label>
            <input readOnly type="text" name="myEmail" value={userAvailability.email} className="input input-bordered mt-1 border-[#FFCC6C] w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Artifact Name</label>
            <input required type="text" name="artifactName" placeholder="Enter Artifacts name" className="input input-bordered mt-1 border-[#FFCC6C] w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Artifact Image (Valid URL)</label>
            <input type="text" name="artifactImage" placeholder="Artifact image" className="input input-bordered border-[#FFCC6C] mt-1 w-full" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Artifact Type</label>
            <select name="artifactType" required className="select border-[#FFCC6C] mt-1 block w-full border rounded-md shadow-sm sm:text-sm">
              <option>Select Artifact type</option>
              <option>Tools</option>
              <option>Weapons</option>
              <option>Documents</option>
              <option>Writings</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Historical Context</label>
            <textarea required name="historicalContext" placeholder="Context" className="w-full h-10 textarea mt-1 border-[#FFCC6C]"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Created At</label>
            <input required type="number" name="createdAt" placeholder='e.g., "100 BC"' className="input input-bordered mt-1 border-[#FFCC6C] w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Discovered At</label>
            <input required type="number" name="discoverdAt" placeholder='e.g., "1799"' className="input input-bordered border-[#FFCC6C] mt-1 w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Discovered By</label>
            <input required type="text" name="discoverdBy" placeholder="Discoverd By" className="input input-bordered border-[#FFCC6C] mt-1 w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Present Location</label>
            <input type="text" name="presentLocation" required placeholder="Present Location" className="input border-[#FFCC6C] input-bordered mt-1  w-full" />
          </div>
        </div>

        <input type="submit" value="Add Artifacts" className="btn btn-block bg-[#FFCC6C] hover:bg-[#2B3440] text-black hover:text-white rounded-md font-bold" />
      </form>
    </div>
  );
};

export default AddArtifacts;