import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    const [isClient, setIsClient] = useState(false);
    const [formData, setFormData] = useState({
        born: "",
        team: "",
        bio: "",
    });
    const [editField, setEditField] = useState(null);

    const firstName = useSelector((state) => state.cricketer.cricketerDetails?.firstname);
    const lastName = useSelector((state) => state.cricketer.cricketerDetails?.lastname);
    const phone = useSelector((state) => state.cricketer.cricketerDetails?.phonenumber);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [id, setId] = useState();

    useEffect(() => {
        setFname(firstName);
        setLname(lastName);
    }, [firstName, lastName]);

    useEffect(() => {
        const fetchId = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/GetIdByPlayerNumber?phonenumber=${phone}`);
                const data = await res.json();
                setId(data[0]?.cricketerid);
            } catch (error) {
                console.error("Error fetching player ID:", error);
            }
        };
        fetchId();
    }, [phone]);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                const response = await fetch(`/api/GetBasicProfile?cricketerid=${id}`);
                const data = await response.json();
                const cricketer = data[0] || {};

                setFormData({
                    born: cricketer.born || "",
                    team: cricketer.team || "",
                    bio: cricketer.bio || "",
                });

                setFname(cricketer.firstname || "");
                setLname(cricketer.lastname || "");
            } catch (error) {
                console.error("Error fetching cricketer data:", error);
            }
        };

        setIsClient(true);
        fetchData();
    }, [id]);

    if (!isClient) return null;

    const handleEdit = (field) => {
        setEditField(field);
    };

    const handleChange = (e) => {
        if (editField === "firstName") setFname(e.target.value);
        else if (editField === "lastName") setLname(e.target.value);
        else setFormData({ ...formData, [editField]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`/api/BasicProfileUpdate?cricketerid=${id}`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName: fname, lastName: lname, ...formData }),
            });

            if (!response.ok) {
                throw new Error("Failed to update profile");
            }

            console.log("Profile updated successfully");
            setEditField(null);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 border d-flex flex-column align-items-center justify-content-center" style={{ height: '320px' }}>
                    <div className="text-muted">Profile Picture (Dummy)</div>
                    <div className="img-fluid rounded-circle" style={{ width: "150px", height: "150px", backgroundColor: "#ddd", objectFit: "cover" }}></div>
                </div>

                <div className="col-md-6">
                    {/* First Name */}
                    <div className="row mt-3">
                        <div className="col-md-2">
                            <label>First Name</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                value={fname}
                                onChange={handleChange}
                                readOnly={editField !== "firstName"}
                            />
                        </div>
                        <div className="col-md-2">
                            {editField === "firstName" ? (
                                <button className="btn btn-success btn-sm" onClick={handleSubmit}>✔️</button>
                            ) : (
                                <button className="btn btn-primary btn-sm" onClick={() => handleEdit("firstName")}>🖊️</button>
                            )}
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className="row mt-3">
                        <div className="col-md-2">
                            <label>Last Name</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                value={lname}
                                onChange={handleChange}
                                readOnly={editField !== "lastName"}
                            />
                        </div>
                        <div className="col-md-2">
                            {editField === "lastName" ? (
                                <button className="btn btn-success btn-sm" onClick={handleSubmit}>✔️</button>
                            ) : (
                                <button className="btn btn-primary btn-sm" onClick={() => handleEdit("lastName")}>🖊️</button>
                            )}
                        </div>
                    </div>

                    {/* Born */}
                    <div className="row mt-3">
                        <div className="col-md-2">
                            <label>Born</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                value={formData.born}
                                onChange={handleChange}
                                readOnly={editField !== "born"}
                            />
                        </div>
                        <div className="col-md-2">
                            {editField === "born" ? (
                                <button className="btn btn-success btn-sm" onClick={handleSubmit}>✔️</button>
                            ) : (
                                <button className="btn btn-primary btn-sm" onClick={() => handleEdit("born")}>🖊️</button>
                            )}
                        </div>
                    </div>

                    {/* Team */}
                    <div className="row mt-3">
                        <div className="col-md-2">
                            <label>Team</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                value={formData.team}
                                onChange={handleChange}
                                readOnly={editField !== "team"}
                            />
                        </div>
                        <div className="col-md-2">
                            {editField === "team" ? (
                                <button className="btn btn-success btn-sm" onClick={handleSubmit}>✔️</button>
                            ) : (
                                <button className="btn btn-primary btn-sm" onClick={() => handleEdit("team")}>🖊️</button>
                            )}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="row mt-3">
                        <div className="col-md-2">
                            <label>Bio</label>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                value={formData.bio}
                                onChange={handleChange}
                                readOnly={editField !== "bio"}
                            />
                        </div>
                        <div className="col-md-2">
                            {editField === "bio" ? (
                                <button className="btn btn-success btn-sm" onClick={handleSubmit}>✔️</button>
                            ) : (
                                <button className="btn btn-primary btn-sm" onClick={() => handleEdit("bio")}>🖊️</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <button className="btn btn-dark" onClick={handleSubmit}>Submit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
