export default function DashboardSetting() {
    return (
        <>
            <div className="dashboard-card">
                <h3>Notifikasi</h3>
                <p>Pilih jenis notifikasi yang ingin Anda terima.</p>
                <div className="setting-item">
                    <span>Notifikasi Email</span>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="setting-item">
                    <span>Notifikasi SMS</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="dashboard-card" style={{ marginTop: '2rem' }}>
                <h3>Akun</h3>
                <p>Kelola informasi keamanan dan data akun Anda.</p>
                <div className="setting-item">
                    <span>Ubah Password</span>
                    <button className="secondary">Ubah</button>
                </div>
            </div>
        </>
    )
}