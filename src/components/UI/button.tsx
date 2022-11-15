import React from 'react';

interface IButton {
    description: string;
    className?: string;
    event: () => void;
}

const defaultClassButton = 'bg-blue-200 text-sm shadow-md rounded-3xl pl-3 pr-3 pt-1 pb-1 text-gray-600 transition-all hover:bg-blue-50';

const Button = (
    {
        description,
        className = defaultClassButton,
        event
    }: IButton
) => {
    return (
        <button
            className={className}
            onClick={() => event()}>
            <b>{description}</b>
        </button>
    );
};

export default Button;