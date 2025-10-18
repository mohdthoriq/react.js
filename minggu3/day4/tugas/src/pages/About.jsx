export default function About() {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>Tentang Kami</h1>
                <p className="about-subtitle">Membawa Inovasi dan Gaya ke Depan Pintu Anda.</p>
            </section>

            <section className="about-content">
                <div className="about-text">
                    <h2>Misi Kami</h2>
                    <p>
                        Di sini, kami percaya bahwa setiap produk memiliki cerita. Misi kami adalah untuk menemukan produk-produk paling inovatif, berkualitas tinggi, dan bergaya dari seluruh dunia dan menghadirkannya langsung kepada Anda. Kami bukan hanya sekadar toko; kami adalah kurator pengalaman, yang berdedikasi untuk membantu Anda menemukan barang-barang yang tidak hanya memenuhi kebutuhan tetapi juga menginspirasi gaya hidup Anda.
                    </p>
                    <p>
                        Didirikan pada tahun 2024, kami memulai perjalanan ini dengan satu tujuan sederhana: membuat belanja online menjadi pengalaman yang menyenangkan dan memuaskan. Kami menyeleksi setiap item dengan cermat, memastikan bahwa setiap produk yang kami tawarkan memenuhi standar keunggulan, keberlanjutan, dan desain yang tak lekang oleh waktu.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Tim kami bekerja sama" />
                </div>
            </section>

            <section className="our-values">
                <h2>Nilai-Nilai Kami</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Kualitas</h3>
                        <p>Kami tidak pernah berkompromi pada kualitas. Setiap produk diuji dan dipilih untuk daya tahan dan keunggulannya.</p>
                    </div>
                    <div className="value-card">
                        <h3>Inovasi</h3>
                        <p>Kami selalu mencari tren dan teknologi terbaru untuk memberikan Anda produk-produk yang terdepan.</p>
                    </div>
                    <div className="value-card">
                        <h3>Kepuasan Pelanggan</h3>
                        <p>Anda adalah pusat dari semua yang kami lakukan. Tim kami siap membantu Anda dengan sepenuh hati.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}