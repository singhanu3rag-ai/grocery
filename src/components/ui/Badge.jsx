import React from 'react';

const Badge = ({ count, className = '' }) => {
    if (!count) return null;

    return (
        <span
            className={`badge ${className}`}
            style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                backgroundColor: 'var(--color-danger)',
                color: 'white',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                padding: '0.1rem 0.4rem',
                borderRadius: 'var(--radius-full)',
                minWidth: '18px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
            }}
        >
            {count}
        </span>
    );
};

export default Badge;
