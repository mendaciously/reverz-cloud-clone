import { ReactNode } from "react";

interface LayoutWrapperProps {
    children: ReactNode;
    className?: string;
}

const LayoutWrapper = ({ children, className = "" }: LayoutWrapperProps) => {
    return (
        <div className={`mx-auto max-w-screen-xl px-6 ${className}`}>
            {children}
        </div>
    );
}

export default LayoutWrapper;