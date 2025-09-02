'use client';

import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
    title: string;
    text?: string;
}

export default function ShareButton({ title, text }: ShareButtonProps) {
    const shareArticle = async () => {
        // Vérifier si l'API Web Share est disponible
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: text || title,
                    url: window.location.href,
                });
                return;
            } catch (err) {
                console.log('Erreur Web Share API:', err);
                // Continue vers le fallback clipboard
            }
        }

        // Fallback : copier l'URL dans le presse-papier
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('Lien copié dans le presse-papier !');
            } catch (err) {
                console.log('Erreur Clipboard API:', err);
                // Dernier fallback : selection manuelle
                fallbackCopyToClipboard(window.location.href);
            }
        } else {
            // Fallback pour les navigateurs plus anciens ou HTTP
            fallbackCopyToClipboard(window.location.href);
        }
    };

    // Fonction de fallback pour copier le texte
    const fallbackCopyToClipboard = (text: string) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            alert('Lien copié dans le presse-papier !');
        } catch (err) {
            console.error('Impossible de copier le lien:', err);
            alert('Impossible de copier automatiquement. URL: ' + text);
        }
        
        document.body.removeChild(textArea);
    };

    return (
        <button
            onClick={shareArticle}
            className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer"
            title="Partager l'article"
        >
            <Share2 className="w-4 h-4 mr-1" />
            Partager
        </button>
    );
}