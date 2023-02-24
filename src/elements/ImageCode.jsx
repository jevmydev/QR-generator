export function ImageWithoutCode() {
    return <div className="w-full h-full bg-gray-300 rounded animate-pulse flex justify-end items-end p-4">QR</div>;
}

export function ImageCode({ urlCode }) {
    return urlCode ? <img className="w-56 h-56 aspect-square rounded" src={urlCode} alt="Código qr generado para una frase o url" /> : <ImageWithoutCode />;
}

export default ImageCode;
