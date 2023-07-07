
export const Preloader = ({ percentLoad }: { percentLoad: number }) => {
    return (
        <div className="fixed-overlay">
            <div className="modal">
                <div className="preloader">
                    <div className="preloader__value">{percentLoad + '%'}</div>
                    <div className="preloader__phone" style={{ width: percentLoad + "%" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}