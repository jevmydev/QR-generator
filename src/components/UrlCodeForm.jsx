import { useId } from "react";

export function UrlCodeForm({ handleSubmit }) {
    const inputGenerateId = useId();

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2" htmlFor={inputGenerateId}>
                <span>Escribe una frase, url o palabra para generar tu QR: </span>
                <input
                    className="border border-transparent rounded px-4 py-3 outline-none transition-colors focus:border-gray-900"
                    type="text"
                    name="code"
                    placeholder="ej: https://jeremydiaz.netlify.app ..."
                    id={inputGenerateId}
                />
            </label>
            <button className="bg-blue-600 text-gray-200 w-full p-2 rounded transition-colors hover:bg-blue-800" type="submit">
                Enviar
            </button>
        </form>
    );
}

export default UrlCodeForm;
