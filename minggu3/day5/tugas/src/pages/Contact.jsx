export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
        event.target.reset();
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Hubungi Kami</h1>
                <p>Punya pertanyaan atau masukan? Kami siap mendengarkan.</p>
            </div>

            <div className="contact-main">
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nama</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Pesan</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>
                        <button type="submit" className="hero-cta">Kirim Pesan</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Informasi Kontak</h3>
                    <p><strong>Alamat:</strong><br />Jl. Web Developer No. 123, Jakarta, Indonesia</p>
                    <p><strong>Email:</strong><br /> support@toko-online.com</p>
                    <p><strong>Telepon:</strong><br /> (021) 555-1234</p>
                </div>
            </div>
        </div>
    );
}