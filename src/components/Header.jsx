import { QRCode } from "../elements/Icons";

export function Header() {
    return (
        <header className="fixed w-full">
            <div className="max-w-screen-sm mx-auto p-4">
                <h1 className="flex justify-center items-center gap-2 text-4xl">
                    QR Generator
                    <QRCode stroke="stroke-blue-600" />
                </h1>
            </div>
        </header>
    );
}

export default Header;
