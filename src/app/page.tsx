export default function Home() {
    return (
        <main style={{ padding: '24px', maxWidth: 480 }}>
            <h1>AUNE-A</h1>

            <div className="ui-card" style={{ marginTop: 24 }}>
                <h3 className="ui-card__title">Welcome</h3>
                <p className="ui-card__content">
                    Web interface using shared UI layout.
                </p>
            </div>

            <div style={{ marginTop: 24, display: 'grid', gap: 16 }}>
                <label className="ui-input">
                    <span className="ui-input__label">Name</span>
                    <input type="text" />
                </label>

                <button className="ui-button ui-button--primary">
                    Continue
                </button>
            </div>
        </main>
    );
}
