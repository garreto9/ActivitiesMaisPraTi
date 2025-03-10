import React, { useState } from 'react';
import '../styles/ImageGallery.css';

// Componente de galeria de imagens com um modal de visualização
function ImageGallery() {
  // Lista de imagens da galeria
  const images = [
    { id: 1, url: 'https://www.agendartecultura.com.br/wp-content/uploads/2021/08/Demon-Slayer-divulga%C3%A7%C3%A3o-1024x576.png', title: 'Kimetsu' },
    { id: 2, url: 'https://updateordie.com/wp-content/uploads/2023/04/AAAABXr7oqLz7PS63-VZaMZxTNZmg_XaQ7hlY0ZtPV59Jb0JUS4tByUvo3sIhF2h6yihiHUGqS9uYHMdRfHu87OFvmPvA34J__GhdXhx-1.jpg', title: 'InuYasha' },
    { id: 3, url: 'https://i0.wp.com/bitsebaits.com/wp-content/uploads/2025/01/Hyouka.webp?fit=1200%2C675&ssl=1', title: 'Hyouka' },
    { id: 4, url: 'https://media.graphassets.com/output=format:webp/LNWdajKJRSOPX452Nro9', title: 'Eminence in Shadow' }
  ];

  // Estado para armazenar a imagem selecionada no modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Função para navegar para a próxima imagem
  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  // Função para navegar para a imagem anterior
  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Galeria de Imagens</h2>

      {/* Grade de imagens */}
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image)}>
            <img src={`${image.url}?auto=format&fit=crop&w=300&q=80`} alt={image.title} />
          </div>
        ))}
      </div>

      {/* Modal de visualização */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Botão de fechar */}
            <button className="close-button" onClick={() => setSelectedImage(null)}>X</button>

            {/* Botões de navegação */}
            <button className="nav-button left" onClick={prevImage}>&lt;</button>
            <button className="nav-button right" onClick={nextImage}>&gt;</button>

            {/* Imagem ampliada */}
            <img src={`${selectedImage.url}?auto=format&fit=crop&w=1200&q=80`} alt={selectedImage.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
