export default function Section({ children, title, id, className = "" }) {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                {title && (
                    <h2 className="section-title">
                        <span>{title.sub}</span>
                        {title.main}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
}
