import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function AdminProfile() {
    const adminId = localStorage.getItem("adminId");
    const [profile, setProfile] = useState(null);
    const location = localStorage.getItem("location");
    const AdminFlatCount = localStorage.getItem("AdminFlatCount");
    const AdminPlotCount = localStorage.getItem("AdminPlotCount");
    const AdminLandCount = localStorage.getItem("AdminLandCount");

    const fetchAllData = async () => {
        let response = await fetch(`http://localhost:8080/99acers/admin/profile/${adminId}`);
        let profileObject = await response.json();
        setProfile(profileObject);
    };

    useEffect(() => {
        fetchAllData();
    }, [adminId]);

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f8ff' }}>
            <div className="profile-card" style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '500px' }}>
                <h2 className="text-center" style={{ marginBottom: '20px', color: '#333' }}>Admin Profile</h2>
                {profile ? (
                    <div>
                        <p><strong>Username: </strong> {profile.username}</p>
                        <p><strong>Full Name:</strong> {profile.fname} {profile.lname}</p>
                        <p><strong>Mobile Number:</strong> {profile.mnumber}</p>
                        <h5 className="text-center">Product List</h5>
                        <p>Flat: {AdminFlatCount}</p>
                        <p>Plot: {AdminPlotCount}</p>
                        <p>Land: {AdminLandCount}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <Link to={location}>
                        <button type="button" className="btn btn-info">Close</button>
                    </Link>
                    <Link to={"/admin/profile/update"}>
                        <button type="button" className="btn btn-warning">Update</button>
                    </Link>
                </div>


            </div>
        </div>
    );
}
