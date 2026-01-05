type Props = {
    label: string;
};

export function PrimaryAction({ label }: Props) {
    return (
        <button className="btn-primary">
            {label}
        </button>
    );
}
