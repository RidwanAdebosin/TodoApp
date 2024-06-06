import React from 'react';

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
    return (
        <button type="submit" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
