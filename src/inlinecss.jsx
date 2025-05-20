import React from 'react';

const StudentCard = ({ data }) => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        margin: '10px auto'
    };

    const avatarStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px'
    };

    const nameStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '5px'
    };

    const detailStyle = {
        margin: '5px 0',
        color: '#333'
    };

    const mainDivStyle = {

            display: 'flex',
            flexWrap: 'wrap'

    }

    return (
        <div style={mainDivStyle}>
            {data.map((item, index) => (
        <div style={cardStyle} key={index}>
            {item.avatar && <img src={item.avatar} alt={name} style={avatarStyle} />}
            <div style={nameStyle}>{item.name}</div>
            <div style={detailStyle}>Age: {item.age}</div>
            <div style={detailStyle}>Grade: {item.grade}</div>
        </div>
            ))}
        </div>
    );
};

export default StudentCard;
