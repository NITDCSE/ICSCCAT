import './curtain.css'

export default function CurtainBox() {
    return (
        <label className="curtain-container z-50">
            <div className="curtain-panel">
                <input type="checkbox" className="curtain-trigger"/>
                <div className="left-curtain curtain" data-title="Launch"></div>
                <div className="right-curtain curtain" data-title="Launch"></div>
            </div>
        </label>
    )
}