import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">My Dearest Richa</h2>
            </div>
            <div className="handwritten-content">
              <p className="handwritten-line">
                Teri muskaan se meri subah roshan ho jaati hai,
                Teri baaton se meri har shaam khoobsurat ho jaati hai.
              </p>
              <p className="handwritten-line">
                Ab aur kya kahoon apne dil ki baat,
                Bas itna jaanta hoon ki tu mere har khwaab mein aati hai.
              </p>
              <p className="handwritten-line">
                Agar tujhe manzoor ho, to meri zindagi ka hissa ban ja,
                Mere har safar ki humsafar, meri har khushi ki wajah ban ja.
              </p>
              <p className="handwritten-line">
                Mujhe khud se pyaar se apne dil mein bsa le ja
              </p>
              <p className="handwritten-line">
              </p>
              <div className="handwritten-signature">
                Forever yours,
                <br />
                <span className="signature-name">Your Love</span>
              </div>
            </div>
          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
