export default function HeadFirst({header,paragraph}) {
    return (
        <div className="h-30">
            <h1 className="font-semibold text-2xl">{header}</h1>
            <p className="italic text-lg text-gray-600 text-wrap">{paragraph}</p>
        </div>
    );
}