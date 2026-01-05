type Props = {
    title: string;
};

export function LockedModuleCard({ title }: Props) {
    return (
        <div className="module-card disabled">
            <div className="locked-header">
                <h3>{title}</h3>
                <span className="lock-icon">🔒</span>
            </div>

            <p className="coming-soon">Coming soon</p>
        </div>
    );
}
