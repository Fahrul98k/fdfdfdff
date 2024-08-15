// Giphy.js
import React from 'react';

const FlowerGiphy = ({ type }) => {
    // URL GIF dari Giphy
    const giphyUrl = "https://giphy.com/embed/HIh3Bjd9edbvzPnOYg"; // Ganti dengan URL GIF sesuai kebutuhan

    return (
        <div style={{ textAlign: 'center' }}>
            <iframe 
                src={giphyUrl} 
                width="320" 
                height="320" 
                frameBorder="0" 
                className="giphy-embed" 
                allowFullScreen
                title="Giphy GIF"
            ></iframe>
        </div>
    );
};

export default FlowerGiphy;
