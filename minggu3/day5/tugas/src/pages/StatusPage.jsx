import { Link, useNavigate } from 'react-router-dom';

export default function StatusPage({ title, message, actionLink, actionText, showCloseButton, type }) {
    const navigate = useNavigate();

    const containerClass = showCloseButton ? "centered-status fullscreen" : "centered-status";
    const cardClass = type === 'error' ? "status-card error" : "status-card";
    const titleStyle = type === 'error' ? { marginTop: 0, color: 'var(--color-error)' } : { marginTop: 0 };
    return (
        <div className={containerClass} style={{ textAlign: 'center' }}>
            <div className={cardClass}>
            {showCloseButton && (
                <button
                    onClick={() => navigate('/')}
                    className="close-button"
                    aria-label="Kembali ke Beranda"
                    style={{ backgroundColor: 'transparent', color: '#e90e0eff', marginLeft: '90%'}}
                >
                    ❌
                </button>
            )}
                <h1 className="page-title" style={titleStyle}>{title}</h1>
                <p>{message}</p>
                {actionLink && actionText && (
                    <Link to={actionLink}>
                        <button className="hero-cta" style={{ marginTop: '1rem' }}>
                            {actionText}
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}