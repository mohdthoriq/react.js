export default function DashboardProfile() {
    return (
        <div className="dashboard-card">
            <h2>Profil Pengguna</h2>
            <div className="profile-layout">
                <div className="profile-avatar-section">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" className="profile-avatar" />
                    <button className="secondary" style={{ marginTop: '1rem' }}>Ubah Foto</button>
                </div>
                <form className="dashboard-form profile-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Nama Lengkap</label>
                        <input type="text" id="fullName" defaultValue="Pengguna Keren" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Alamat Email</label>
                        <input type="email" id="email" defaultValue="user@example.com" readOnly />
                        <small>Email tidak dapat diubah.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio Singkat</label>
                        <textarea id="bio" rows="4" defaultValue="Frontend Developer dari masa depan."></textarea>
                    </div>
                    <button type="submit">Simpan Perubahan</button>
                </form>
            </div>
        </div>
    )
}