import React from 'react';

const FinalGiphy = () => {
    // URL GIF dari Giphy
    const giphyUrl = "https://giphy.com/embed/6a67zVJ0wMMOzg3YKA"; // Ganti dengan URL GIF sesuai kebutuhan

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
            <p>
                <a href={giphyUrl} target="_blank" rel="noopener noreferrer">
                    via GIPHY
                </a>
            </p>
        </div>
    );
};

export default FinalGiphy;
