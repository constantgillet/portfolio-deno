export interface ContainerProps {
    children: any;
    className?: string;
    size?: "default" | "medium";
}

export default function Container({ children, className = "", size = "default" }: ContainerProps) {
    return <div class={"mx-auto max-w-[864px] px-4 " + className}>{children}</div>;
}
