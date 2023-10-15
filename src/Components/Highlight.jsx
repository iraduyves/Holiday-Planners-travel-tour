// import {highlightVideo} from '../../public/highlight.mp4'

import Amazingtour from "./Amazingtour"


const Highlight = () => {
    return (
        <>
            <div className="main-highlight overlay back-image" style={{ backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/highlight-image.jpg")' }}>
                <div className="highlight-bg-video">
                    <video controls loop muted autoPlay>
                        <source src={"https://videos.pond5.com/zoom-video-tea-plantations-fresh-footage-073349493_main_xxl.mp4"} />
                    </video>
                </div>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="row-right m-auto">
                                <div className="sec-title">
                                    <h2 className="h2-title">
                                        <span>Traveling Highlights</span>
                                    </h2>
                                    <h3 className="h3-title">Your New Traveling Idea</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Amazingtour/>
        </>
    )
}

export default Highlight