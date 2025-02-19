import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Profile = () => {
    const coachProfile = useSelector((state) => state.CoachRegister.CoachRegisterDetails);

    const [isClient, setIsClient] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    // Ensure the code runs only on the client-side
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        // Check if profile picture exists and is an array (assuming binary data)
        if (coachProfile.profilePicture && coachProfile.profilePicture.length > 0) {
            // Convert binary array to Base64 string
            const base64Image = `data:image/jpeg;base64,${btoa(String.fromCharCode(...coachProfile.profilePicture))}`;
            setImageUrl(base64Image);
        } else {
            setImageUrl(null);  // If no image, set to null
        }
    }, [coachProfile.profilePicture]);

    if (!isClient) return null; // Ensure rendering only on the client side

    return (
        <>
            <div className="row">
                {/* Profile Image */}
                <div className="col-md-4 border d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="Profile"
                            className="img-fluid rounded-circle"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                    ) : (
                        <div className="text-muted">No Profile Image</div>
                    )}
                </div>

                {/* Profile Details */}
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                            <label>Name</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" value={`${coachProfile.firstName} ${coachProfile.lastName}`} className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Born</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Team</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-2">
                            <label>Bio</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" className="jumbotron form-control" style={{ backgroundColor: 'transparent', height: '100px', width: '100%' }} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
