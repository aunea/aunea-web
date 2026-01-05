type Props = {
    title: string;
    record: string;
    updated: string;
};

export function ModuleCard({ title, record, updated }: Props) {
    return (
        <div className="module-card">
            <h3>{title}</h3>
            <p className="record">{record}</p>
            <p className="updated">{updated}</p>
        </div>
    );
}
