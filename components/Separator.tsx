export interface SeparatorProps {
    className?: string;
}

export default function Separator({ className }: SeparatorProps) {
    return (
        <div
            class={"w-full h-[24px] bg-contain " + className}
            style={{
                backgroundImage: `url('/images/sardina-black.png')`,
            }}
        ></div>
    );
}
