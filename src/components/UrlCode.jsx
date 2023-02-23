import { useState } from "react";

import UrlCodeForm from "./UrlCodeForm";
import ImageCode from "../elements/ImageCode";

import { CODE_GENERATOR_URL } from "../consts";

export function UrlCode() {
    const [urlCode, setUrlCode] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const urlCodeValue = new FormData(e.target).get("code");
        setUrlCode(`${CODE_GENERATOR_URL}&data=${urlCodeValue}`);
    };

    return (
        <section>
            <div className="min-h-screen flex justify-center items-center">
                <article className="flex flex-col items-center gap-4 mt-8">
                    <header className="h-56">
                        <ImageCode urlCode={urlCode} />
                    </header>
                    <section>
                        <UrlCodeForm handleSubmit={handleSubmit} />
                    </section>
                </article>
            </div>
        </section>
    );
}

export default UrlCode;
