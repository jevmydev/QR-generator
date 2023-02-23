export function ImageCode({ urlCode }) {
    return urlCode && <img className="w-56 h-56 aspect-square rounded" src={urlCode} alt="Código qr generado para una frase o url" />;
}

export default ImageCode;
